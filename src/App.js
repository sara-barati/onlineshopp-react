import React from 'react'
import Approutes from 'Routes/App.routes'
import {BrowserRouter}from "react-router-dom";
import {Provider} from "react-redux";
import store from 'Redux/store';
export default function App() {
  return (
    <div>
        <BrowserRouter>
        <Provider store={store}>
        <Approutes/>
        </Provider>
        </BrowserRouter>
    
    </div>
  )
}
