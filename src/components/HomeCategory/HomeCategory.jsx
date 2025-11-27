import React from 'react'
import './homeCategory.css'


export default function HomeCategory({data,handleCategory,selectedCategory}) {
  return (
               <li className={`cateorgyListItem ${selectedCategory===data._id && 'Selected'}`} onClick={()=>handleCategory(data)}>
                  <div className="categoryHomeDetailsInternal">
                    <img src={data?.categoryImage} alt="" className='catgoryImg' />

                    <div className="expertTrackOwnerNameAndDesignation">
                       <span style={{'fontWeight':'bold','fontSize':'17px'}}>{data.categoryName}</span>
                    </div>
                  </div>
                </li>
  )
}
