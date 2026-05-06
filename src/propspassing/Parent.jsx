import React from 'react'
import Student from './Child'

function Parent(){
  return (
    <>
    <div>
        <Student name="Harsh" age="23"/>
        <Student name="Yash" age="18"/>
    </div>
  </>
  )
}

export default Parent