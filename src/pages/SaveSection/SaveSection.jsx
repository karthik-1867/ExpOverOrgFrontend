import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import BreadCrumb from '../../components/BreadCrumbList/BreadCrumb';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SaveTypeSelect from '../SaveTypeSelect/SaveTypeSelect';
export default function SaveSection() {
  const [selectPage,setSelectPage] = useState(true)
  const [breadCrumbList,setBreadCrumbList] = useState([]);
  const [createFolder,setCreateFolder] = useState(false);
  const [folderId,setFolderId] = useState("");
  const [prevId,setPrevId] = useState("");
  const navigate = useNavigate()
  console.log("breadcrumbList",breadCrumbList)

  const breadCrumbUpdate = (data,type) => {
        setBreadCrumbList((prev) => {
          
            let index = prev.indexOf(data);

            if(type !== 'back'){
                index = index + 1;
                setPrevId(prev[index].folderId);
                console.log("previds",prev[index])
                 console.log("previd",prev[index].folderId)
            }else{
                setPrevId(prev[index].folderId);
                console.log("previd",prev[index].folderId)
            }
            console.log("indexo0f",data)
            if (index === -1) return prev; 
            return prev.slice(0,index)  // slice returns new array of items after the matched one
        });
  }



  

  const initialPosition = () => {
    navigate(`/saveSection/save`) 
    setPrevId(breadCrumbList[0].folderId)    
    setBreadCrumbList([]);
  }

  useEffect(()=>{
      if(selectPage === false)
        {
          navigate(`/saveSection/save`)
          
        }else{
          navigate(`/saveSection/selectType`)
        } 

  },[selectPage])

  const handleSelectPage = () => {
      setSelectPage(!selectPage)
      if(selectPage === true){
            if(breadCrumbList.length>0)
            {
              setPrevId(breadCrumbList[0].folderId)    
              setBreadCrumbList([]);
            }
      }
  }

  return (
    <>
    { selectPage === false
    
    ?

      <div className="SaveSectionContainer">
        <div className="HomeRecommendedHeading3">
            <div className="breadCrumbMenu">
                    <span style={{color: "white",gap:'5px',padding:'4px',borderRadius:"10px",display:"flex",alignItems:"center"}} onClick={()=>initialPosition()}>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_TZWHKZW9D8TXXWWA2hcw1B42qDVD8ADxiw&s' style={{width:"30px",height:"30px",borderRadius:"50%",objectFit:"cover"}}/>
                      Question folder 
                    </span>
                {breadCrumbList.length>0 && breadCrumbList.map((i)=>(
                    <BreadCrumb key={i._id} data={i} breadCrumbUpdate={breadCrumbUpdate}/>
                ))

                }
            </div>

            <div className="BreadCrumButtons" style={{display:'flex',gap:'10px',alignItems:'center'}}>
              <div className="saveContainerCreateFolder" onClick={()=>setCreateFolder((i)=>!i)}>
                  <CreateNewFolderIcon/>
                  create folder
              </div>

              <div className="saveContainerCreateFolder" style={{background:'linear-gradient(to bottom, red, #742a2a)', border: '1px solid red'}} onClick={handleSelectPage}>
                  <ExitToAppIcon/>
                  Back
              </div>
            </div>
        </div>
        <Outlet context={{breadCrumbList,setBreadCrumbList,breadCrumbUpdate,createFolder,setCreateFolder,setFolderId,folderId,prevId,setPrevId}}/>
    </div>
   :
   <div className="SaveSectionContainer" onClick={handleSelectPage}>
     <SaveTypeSelect/>
   </div>
   }
    </>
  )
}
