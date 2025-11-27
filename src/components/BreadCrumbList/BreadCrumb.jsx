import React from 'react'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import '../BreadCrumbList/breadCrumb.css'
import { useNavigate } from 'react-router-dom';

export default function BreadCrumb({data,breadCrumbUpdate}) {

  const navigate = useNavigate();

  const handleBreadCrumbUpdate = () => {
    breadCrumbUpdate(data,'breadCrumb')
    navigate(`/saveSection/subFolder/${data._id}`)
  }

  return (
     <div className="BreadCrumbContainer" onClick={handleBreadCrumbUpdate}>
          <ChevronRightOutlinedIcon/>
          <div className="expertTrackOwnerDetails">
            <img src={data?.folderImg} alt="" className='BreadCrumbImg'/>

            <div className="expertTrackOwnerNameAndDesignation">
                <span style={{'fontWeight':'bold','fontSize':'15px'}}>{data.folderName}</span>
                <span style={{'fontWeight':'100','fontSize':'12px'}}>{data.folderDescription}</span>
            </div>
         </div>
     </div>
  )
}
