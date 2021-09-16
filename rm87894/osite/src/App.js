import React from "react"
import Header from "./components/header/header"
import { ElHtml, Body } from "./styled"

export default function App() {
  return(
    <div className='container'>
      <ElHtml>
        <h1>ROUTER - APP.JS</h1>
        <Body>
          <Header/>
        </Body>
      </ElHtml>
    </div>
  )
}