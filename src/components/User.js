import React from 'react';
import ava from '../img/avatar.jpg';
import InfoUser from '../files/InfoUser.json';



export default function User() {
  return (
    <section >
        <img src={ava} alt="user" height={300} width={300} className='avatar'/>
        <h1>{InfoUser.users[0].firstName} {InfoUser.users[0].secondName}</h1>
        <h2>{InfoUser.users[0].profession}</h2>
    </section>
  )
}
