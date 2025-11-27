
import React, { useEffect } from 'react'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { useNavigate } from 'react-router-dom';
export default function FirstLevelFolder({data,handleFolderId,setBreadCrumbList,folderId,setPrevId}) {
   const navigate = useNavigate();

  const handleSubFolderRouting = (e) => {
       e.stopPropagation()
       setPrevId("");
       console.log("selected foldeId",folderId)
       setBreadCrumbList((i)=>[...i,{...data,folderId}])
       navigate(`/saveSection/subFolder/${data._id}`)
  }

        useEffect(() => {
          
               const elements = document.getElementsByClassName(`Selected`);
                  console.log(elements)
               if (elements.length > 0) {
                    const element = elements[0]; 
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
               }
               else {
                    console.warn("No element found to scroll");
               }
              
        }, []);



  return (
            <li 
              id={`folder-${data._id}`}
              className={`expertTrackContainerListItem ${data._id === folderId && 'Selected'}`} 
              onClick={()=>handleFolderId(data._id)}
            >
                  <div className="expertTrackOwnerDetails">
                    <img src={data?.folderImg} alt="" className='expertTrackOwnerprofileImg'/>

                    <div className="expertTrackOwnerNameAndDesignation">
                       <span style={{'fontWeight':'bold','fontSize':'15px'}}>{data.folderName}</span>
                       <span style={{'fontWeight':'100','fontSize':'12px'}}>{data.folderDescription}</span>
                    </div>
                  </div>
                  <div className="expertTrackOwnerLeftDetails">
                       <div className="expertTrackOwnerFollow" onClick={(e)=>handleSubFolderRouting(e)}>
                            <ArrowRightAltOutlinedIcon/>  
                       </div>
                  </div>
                </li>
  )
}
