import React from 'react'

export default function GroupComponent(props) {
  return (
    <>
      <h4>{props.groupName}</h4>
      <ul className="padding">
        {props.items.map((item, index) => <a href={item.link} key={index.toString()}><li key={index.toString()}>{item.name}</li></a>)}
      </ul>
    </>
  )
}
