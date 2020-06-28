import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import { artJpg, Apple } from './images'

console.log("js")

function Index(props) {
  return (
    <>
      <Apple />
      <img src={artJpg} alt="" />
      <h1>{props.title}</h1>
      <style jsx>{`
:global(svg){
background: red;
}
`}</style>
    </>
  )
}

ReactDOM.render(<Index title="Hello" />, document.querySelector("#root"))