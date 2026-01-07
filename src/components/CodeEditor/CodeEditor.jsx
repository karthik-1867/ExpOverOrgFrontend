import React, { useState, useCallback, useMemo } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { EditorState } from '@codemirror/state';
import { EditorView } from "@codemirror/view";

import { tomorrowNightBlue } from '@uiw/codemirror-theme-tomorrow-night-blue';
import { basicSetup } from 'codemirror';  // depends on your wrapper
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
import { sql } from '@codemirror/lang-sql';
import { loadLanguage, langNames } from "@uiw/codemirror-extensions-langs";

const languageExtensions = {
  javascript: javascript({ jsx: true }),
  js: javascript({ jsx: true }),
  python: python(),
  java: java(),
  sql: sql(),

};



console.log("languageExtensions",langNames)

export default function CodeEditor({ language = 'js', value=""  
    , onChange }) {
  const ext = languageExtensions[language] || languageExtensions.js;


  const langExt = useMemo(() => {
    return loadLanguage(language);
  }, [language]);

  return (
    <CodeMirror
      value={value}
      extensions={[ basicSetup, langExt,EditorView.lineWrapping, ]}
      onChange={onChange}
      theme={tomorrowNightBlue}
      height={value===''?'100px' :'fit-content'}
      style={{border: value===''? '1px solid white' : '',boxShadow:'0 2px 6px rgb(0 0 0), 0 -6px 20px rgba(255, 140, 0, 0.02) inset'
      ,backdropFilter: 'blur(4px)'}}
      
     
      
    />
  );
}
