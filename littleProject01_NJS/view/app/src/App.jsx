// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import './layout/global/index.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {Object.keys(routes).map((item)=>{
          return(
            <Route path={routes[item].path} element={routes[item].element}/>
          )
          
        })}
      </Routes>

    </BrowserRouter>
  )
}

export default App
