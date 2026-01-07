import { useCallback, useRef } from "react";

export function useInfiniteScroll(fetchMore, hasMore, rootRef = null) {
  const observerRef = useRef(null);

  const callbackRef = useCallback(
    (node) => {
      // disconnect any existing observer
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      console.log('[useInfiniteScroll] callbackRef called, node=', node);
      if (!node) return;

      // determine root element (either a ref object or a direct DOM node)
      const rootElement = rootRef && ('current' in rootRef ? rootRef.current : rootRef) || null;

      observerRef.current = new IntersectionObserver(
        (entries) => {
          const e = entries[0];
          const isIntersecting = e?.isIntersecting;
          const bc = e?.boundingClientRect;
          const rb = e?.rootBounds;
          const ir = e?.intersectionRect;
          console.log('[useInfiniteScroll] intersection', {
            isIntersecting,
            hasMore,
            boundingClientRect: bc,
            rootBounds: rb,
            intersectionRect: ir,
          });

          if (isIntersecting && hasMore) {
            const target = e.target;
            console.log('[useInfiniteScroll] calling fetchMore (will unobserve target)');
            // prevent re-entrancy by unobserving the target until fetch completes
            try {
              observerRef.current.unobserve(target);
            } catch (err) {
              /* ignore */
            }

            Promise.resolve(fetchMore())
              .catch((err) => console.error('fetchMore (from observer) error', err))
              .finally(() => {
                // re-observe after a tick so layout updates first
                setTimeout(() => {
                  try {
                    if (observerRef.current && target) observerRef.current.observe(target);
                  } catch (err) {
                    /* ignore */
                  }
                }, 50);
              });
          }
        },
        { root: rootElement, rootMargin: '0px 0px 300px 0px', threshold: 0 }
      );

      observerRef.current.observe(node);
    },
    [fetchMore, hasMore, rootRef]
  );

  return callbackRef;
}
