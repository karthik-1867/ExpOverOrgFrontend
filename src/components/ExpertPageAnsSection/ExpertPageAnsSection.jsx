import React, { useEffect, useState } from 'react'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import SwipeRightOutlinedIcon from '@mui/icons-material/SwipeRightOutlined';

import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AnswerList from '../AnswerList/AnswerList';
import Nodata from '../Nodata/Nodata';
export default function ExpertPageAnsSection() {
      const [ans,setAns] = useState([]);
      const [loading,setLoading]  = useState(false)
      const id = useParams();
      
      console.log("answer section call",ans,id)

      useEffect(()=>{
            const answer = async() => {
                  setLoading(true)
                  try{
                       const ans = await axios.get(`${process.env.REACT_APP_URL}/answer/getAnswersByUserId/${id.id}`,{withCredentials:true})
                       setAns(ans.data)
                       setLoading(false)
                  }catch(e){
                       console.log(e)
                  }
                  
            }

            answer();
      },[id])
 
 
      return (
                     <div className="HomeQueryAndAns">                     
                        <div className="HomeQueryAnsSection">
                              { ans.length > 0 && ans?.map((item)=>(
                                    <AnswerList key={item._id} data={item}/>
                              ))}
                              {ans.length === 0 && loading === false &&
                              <Nodata message='No answers posted yet' />
                              }
                              
                        </div>
            </div>
  )
}
