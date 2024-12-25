import React from 'react'
import '../style.css'
const LayOut = () => {
  return (
    <div className='layOut'>
      <div className='side-show'>
        <p className='title'>ثبت نام شاغلین در کسب و کارها</p>
      </div>
      <div className='content'>
        <div className='top'>
           <div className='progress-wrapper'>
            <ul>
              <li>
              <span>1</span>
              </li>
              <li>
              <span>2</span>
              </li>
              <li>   
              <span>3</span>
              </li>
            </ul>
           </div>
        </div>
       <MultiStep/>
      </div>
    </div>
  )
}

export default LayOut