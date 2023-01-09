import React from 'react'
export default function ContactsItem(props) {
  return (
    <a href={props.link}>
              <li>
                <img src={props.img} alt="Phone" width="20" height="20" />{props.description}
              </li>
    </a>
  )
}
