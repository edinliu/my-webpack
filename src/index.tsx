import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import AnimePic from './anime.jpg'

console.log("ts")

function Index(props: { title: string }) {
  return (
    <>
      <img src={AnimePic} alt="" />
      <h1>{props.title}</h1>
    </>
  )
}

ReactDOM.render(<Index title="Hello" />, document.querySelector("#root"))