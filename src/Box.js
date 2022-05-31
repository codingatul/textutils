import React from 'react'
import './Box.css'

function Box() {
  return (
    <div>
   <div className="box">
   <div className="Pcontainer1">
       <h3><small className='text-muted'>Your Plan</small></h3>
       <p>Professional</p>
   </div>
   <div className="Pcontainer2">
       <h3><small className='text-muted'>Next bill on</small></h3>
       <p>08/09/2022</p>
       </div>     
   <div className="buttonbody">
       <button className='button'>Download Now</button>
   </div>
   </div>
    </div>
  )
}

export default Box