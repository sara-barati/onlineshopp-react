import React from 'react'
import Approutes from 'Routes/App.routes'
import {BrowserRouter}from "react-router-dom";

export default function App() {
  return (
    <div>
        <BrowserRouter>
        <Approutes/>
        </BrowserRouter>
    </div>
  )
}
