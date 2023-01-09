import React from 'react'
import ContactUser from '../files/ContactsUser.json'
import ContactsItem from '../components/ContactsItem'


export default function Contacts() {
  return (
    <section>
      <h3>Contacts</h3>
      <ul className='padding'>
      {ContactUser.contacts.map(item => <ContactsItem  key={item.index} img={item.img} description={item.description} link={item.link}/>)}
      </ul>
    </section>
  )
}
