import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import { artJpg, Apple } from './images'

console.log("ts")

function Index(props: { title: string }) {
  return (
    <>
      <Apple />
      <img src={artJpg} alt="" />
      <h1>{props.title}</h1>
    </>
  )
}

ReactDOM.render(<Index title="Hello" />, document.querySelector("#root"))