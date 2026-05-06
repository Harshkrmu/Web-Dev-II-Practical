import React from 'react'
import Parent from './propspassing/Parent'
import Child from './propspassing/Child'
import Fetching from './api fetch/Fetching'

function App(){
  return (
    <>
    <div>
        <h1>Welcome to React Practical</h1>
    </div>
    <Parent/>
    <Fetching/>
    </>
  )
}

export default App