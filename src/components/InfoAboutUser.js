import React from 'react'
import Contacts from './Contacts'
import Education from './Education'
import English from './English'
import Skills from './Skills'
import User from './User'

export default function InfoAboutUser() {
  return (
    <section className='InfoAboutUser'>
      <User />
      <Contacts />
      <Skills />
      <Education />
      <English />

    </section>
  )
}
