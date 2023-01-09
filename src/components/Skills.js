import React from 'react'
import SkillsInfo from '../files/SkillsInfo.json';
import SkillsItemComponent from './SkillsItemComponent'



export default function Skills() {
  return (
        <section id="skills">
            <h3>Skills</h3>
            <ul className="padding">
              {SkillsInfo.skills.map((item, index) => <SkillsItemComponent key={index.toString()} value={item}/>)}
            </ul>
        </section>
  )
}
