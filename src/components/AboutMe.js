import React from 'react';
import AboutMeJson from '../files/AboutMe.json';
import AboutMeComponent from './AboutMeComponent.js'


export default function AboutMe() {
  return (
            <section id="about">
                <h3>About Me</h3>
                {AboutMeJson.aboutMe.map((item,index) => <AboutMeComponent key={index.toString()} p={item}/>)} 
            </section>
  )
}
