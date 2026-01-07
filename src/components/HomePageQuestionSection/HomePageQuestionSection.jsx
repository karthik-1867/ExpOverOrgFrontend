import React, { useEffect, useState, useCallback, useRef } from 'react'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import SwipeRightOutlinedIcon from '@mui/icons-material/SwipeRightOutlined';

import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import HomeQueryPostItems from '../HomeQueryPostItems/HomeQueryPostItems';
import {question} from "../../Dummy.js"
import axios from 'axios';
import { useInfiniteScroll } from "../../utility/InfiniteScroll.jsx";
import { useOutletContext, useParams } from 'react-router-dom';
import HomeQueryPostItemsLoader from '../HomequerypostItemsLoader/HomeQueryPostItemsLoader.jsx';

export default function HomePageQuestionSection({type}) {
  const [user,setUser] = useState("");
  const [questions,setQuestion] = useState([]);
  const [InfiniteScrollReq,setInfiniteScrollReq] = useState(false)
  const [loading,setLoading] = useState(false);
  const [expertQuestions,setExpertQuestion] = useState();

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);


  const {searchTokenSelected} = useOutletContext()

  console.log("context",searchTokenSelected)

  const id = useParams();

  console.log('type',type)
  console.log("12sadasd",questions)
  console.log("homepageids",id)
      // small number of skeleton loaders — keep sentinel close to the end
      const arr = Array(1).fill().map((_, i) => i);
      const arr2 = Array(50).fill().map((_, i) => i);
      useEffect(() => {
            if(setInfiniteScrollReq === false) return
            fetchItems();
      }, [page]);

  const fetchItems = async () => {
    const res = await axios.get(`${process.env.REACT_APP_URL}/question/getQuestions?page=${page}`,{withCredentials:true});
   ;

    console.log("current output",res.data.questions)
    setQuestion(prev => [...prev, ...res.data.questions]);
    if (res.data.questions.length < 10) setHasMore(false);
  };

      // Use a callback ref so the observer attaches when the loading node mounts
      const observerRef = useRef(null);
      const setLoader = useCallback(
            (node) => {
                  if(setInfiniteScrollReq === false) return
                  if (observerRef.current) {
                        observerRef.current.disconnect();
                        observerRef.current = null;
                  }
                  if (!node) return;
                  observerRef.current = new IntersectionObserver(
                        (entries) => {
                              if (entries[0]?.isIntersecting && hasMore) {
                                    setPage((prev) => prev + 1);
                              }
                        },
                        { rootMargin: '200px' }
                  );
                  observerRef.current.observe(node);
            },
            [hasMore]
      );

      // const loaderRef = useRef(null);
      // useEffect(() => {
      //       if (!loaderRef.current || !hasMore) return;

      //       const observer = new IntersectionObserver(
      //             (entries) => {
      //             const target = entries[0];
      //             if (target.isIntersecting) {
      //             setPage((prev) => prev + 1);
      //             }
      //             },
      //             { rootMargin: "200px" } // triggers slightly before visible
      //       );

      //       observer.observe(loaderRef.current);

      //       return () => {
      //             if (loaderRef.current) observer.unobserve(loaderRef.current);
      //             observer.disconnect();
      //       };
      // }, [hasMore]);


  useEffect(()=>{
      const userDetails = async() => {
            try{
               
                setLoading(true);
                
                if(id.id === 'loading'){
                  return setLoading(true);     
                }

                if(searchTokenSelected.selected === 'true'){
                  setInfiniteScrollReq(false)
                  console.log("selected context",searchTokenSelected.data.searchResult)
                  setQuestion(searchTokenSelected.data.searchResult)

                }
                
                
                if(type === 'question'){
                  setInfiniteScrollReq(true)
                  const user = await axios.get(`${process.env.REACT_APP_URL}/user/getYourDetails`,{withCredentials:true})
                  setUser(user)
                  const question = await axios.get(`${process.env.REACT_APP_URL}/question/getQuestions?page=1`,{withCredentials:true})
                  console.log("questiuons",question)
                  setQuestion(question.data.questions)
                }
                else if(type === 'questionByExpert' || type === 'questionByFriend'){
                   const question = await axios.get(`${process.env.REACT_APP_URL}/question/getQuestionByUserId/${id.id}`,{withCredentials:true})
                   console.log("questiuons",question)
                   setQuestion(question.data)
                }
                setLoading(false);

            }catch(e){
                console.log(e)
            }
      }

      userDetails();
  },[id])


  return (
        <div className="HomeQuery">
                  <div className="HomeQueryHeading">

                        <div className="HomeQueryNameAndImg">
                              <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" className='HomeQueryImgProfile'/>
                              <div className="HomeQueryNameSection">

                                 Karthik
                                 <span className='HomeQueryDesign'>Software engineer</span>
                              </div>
                        </div>
                        <div className="HomeContriButionAndFollowers">

                              <div className="HomeUrFollower">
                                    <GroupOutlinedIcon/>
                                    Follower : 300
                              </div>
                              <div className="HomeUrContribution">
                                    <EmojiObjectsOutlinedIcon/>
                                    Solution contributed : 20
                              </div>
                              <div className="HomeUrFriend">
                                    <ConnectWithoutContactOutlinedIcon/>
                                    Friend : 30
                              </div>
                        </div>
                  </div>
                  <div className="HomeQueryPostSection">
                        {InfiniteScrollReq === false && loading == false && questions.length > 0 && questions?.map((item)=>(

                               <HomeQueryPostItems key={item._id} data={item} type={type}/>
                               
                        ))
                        }
                        {
                              InfiniteScrollReq === true  && questions.length > 0 && 
                              <>
                              {questions?.map((item, ind)=>(
                                    <div key={item._id} ref={ind === questions.length - 1 ? setLoader : null}>
                                          <HomeQueryPostItems data={item} type={type}/>
                                    </div>
                              ))}

                              <div className="Loading">
                                    {arr.map((i)=> (
                                          <HomeQueryPostItemsLoader key={i}/>
                                    ))}
                              </div>

                              </>
                        }
                        {
                            loading == true && 
                              arr2.map((i)=>
                              (<HomeQueryPostItemsLoader/>)
                            )
                        }
                  </div>
            </div> 
  )
}
