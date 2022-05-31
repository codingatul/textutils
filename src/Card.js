import React from 'react'
import './Card.css';

function Card(props) {
  return (
    <div className='card'>
  <div className="cardbody">
      <span className= {`${props.color==='white'? 'position-absolute top-0 translate-middle badge rounded-square bg-danger' : ''}`} style={{left:'50%',zIndex:'1'}}>{props.color==='white'?'RECOMMENDED':''}</span>
    <p>$9.99/mo</p>
    <h5>Professional</h5>
    <h6>Fully automated AI Culling</h6>
    <h6>Quick filters for Selections, Sneak Previews, and more...</h6>
    <h6>Ability to view Duplicates and Key Faces</h6>
    <h6>One click import into Lightroom and Capture One</h6>
    <h6>Priority Support</h6>
    <h6>Regular updates</h6>
   <div className="buttonbody" style={{display:'flex',float: props.direction}}>
   <button className='button' style={{backgroundColor: (props.color==='white'? 'lightseagreen' : 'white')}} onClick={()=>{props.toggle(null)}}>Current Plan</button>
   </div>
  </div>
  
    </div>
  )
}

export default Card