import React from 'react'

export default function HomeCategory({data}) {
  return (
               <li className='cateorgyListItem'>
                  <div className="categoryHomeDetailsInternal">
                    <img src={data?.categoryImage} alt="" className='catgoryImg' />

                    <div className="expertTrackOwnerNameAndDesignation">
                       <span style={{'fontWeight':'bold','fontSize':'17px'}}>{data.categoryName}</span>
                    </div>
                  </div>
                </li>
  )
}
