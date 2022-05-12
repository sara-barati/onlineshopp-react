import React from 'react'
import Managementlayout from 'Layout/Management/Management.layout'
import { Navigate } from 'react-router-dom';


export default function PrivateRote({MyComponent, flag}) {
  const isLoggedIn = JSON.parse(localStorage.getItem("is-login"));

    if (!isLoggedIn) {
      return <Navigate replace to='/login'/>
  } else {
    return (

      flag ? (
          <Managementlayout>
              <MyComponent/>
          </Managementlayout>
      ) : (
          <MyComponent/>

      )

  )
  
      }}
    