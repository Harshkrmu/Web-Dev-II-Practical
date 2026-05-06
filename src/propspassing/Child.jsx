import React from 'react'
import Parent from './Parent'

function Child(props){
  return (
    <>
    <div>
        <h1>Student Name: {props.name}</h1>
        <h1>Student Age: {props.age}</h1>
    </div>
  </>
  )
}

export default Child