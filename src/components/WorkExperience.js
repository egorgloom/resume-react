import React from 'react'
import WorkExperienceJson from '../files/WorkExperience.json';
import WorkExperienceComponent from './WorkExperienceComponent'
export default function WorkExperience() {
  return (
    <section className="black">
      <h3>Work Experience</h3>
      {WorkExperienceJson.workExperience.map(item => <WorkExperienceComponent key={item.index} img={item.img} link={item.link} description={item.description} />)}

    </section>
  )
}
