import React, { use, useEffect, useState } from 'react'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import axios from 'axios';


export default function Filter({data,type,fullData,handleList=[],singleChange,getUser,category}) {

  const [switchOn,setSwitchOn] = useState(type);
  console.log("data in filter",data,fullData);

  const string =  data.name.length > 17 ? data.name.slice(0,  17) + ".." : data.name

  useEffect(() => {
       console.log("switchOn",switchOn);
       console.log("type",type);

       const updateFilter = async(filterType) => {
           try{
                  await axios.post(`${process.env.REACT_APP_URL}/Notification/updateNotificationFriendFiltersById`,{id:data._id,filterType:filterType,category},{withCredentials:true});
                  getUser();
            }
            catch(e){
                  console.log(e);
            }
         }

       if(singleChange==='NotAllow'){
       if(type==='include' && switchOn==='Exclude'){  
          handleList(data._id,'include')
       }
      if(type==='Exclude' && switchOn==='include'){
            handleList(data._id,'Exclude')
      }
      if(type==='include' && switchOn==='include'){  
          handleList(data._id,'Removeinclude')
      }
      if(type==='Exclude' && switchOn==='Exclude'){
            handleList(data._id,'RemoveExclude')
      } 
    }
    else{
         if(type==='include' && switchOn==='Exclude'){
            console.log("update include to block")
            updateFilter("block");
         }
         if(type==='Exclude' && switchOn==='include'){
            console.log("update exclude to allow")
            updateFilter("allow");
         }

    }


  }, [switchOn]) 
  


  return (
             <li className='expertTrackContainerListItemRight' >
                  <div className="expertTrackOwnerDetails">
                    <img src={data?.profilePicture} alt="" className={`expertTrackOwnerprofileImg ${(switchOn !== 'include') && 'gray'}`}/>

                    <div className="expertTrackOwnerNameAndDesignation">
                       <span style={{'fontWeight':'bold','fontSize':'17px'}}>{string}</span>
                       <span style={{'fontWeight':'100','fontSize':'12px'}}>Software enginneer</span>
                    </div>
                  </div>
                  <div className="expertTrackOwnerLeftDetails">
                      <ToggleSwitch type={type} setSwitchOn={setSwitchOn}/>
                  </div>
                </li>
  )
}
