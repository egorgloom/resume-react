import React from 'react'
// import  from "../img/avatar.jpg"

export default function WorkExperienceComponent(props) {
  return (
    <div className="projects">
    <div className="proj">
    <a className="black " href={props.link}><img src={props.img} alt="website" width="120" height="100" /></a>
    </div>
    <div className="text">
      <p>{props.description}</p>
     </div>
 
 </div>
  )
}
