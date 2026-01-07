import React from 'react'
import "../ExpertiseList/expertiseList.css"

export default function ExpertiseList({data}) {
  return (
    <div className='ExpertiseContainer'>
        <img className='ExpertiseContainerImg' src={data?.categoryImage} alt=''/>
        <div className="ExpertiseTextAndCount">

            <span className='ExpertiseText'>
                 {data?.categoryName}
            </span>
            <div className="ExpertiseCount">
                selected : 30 members
            </div>
        </div>
    </div>
  )
}
