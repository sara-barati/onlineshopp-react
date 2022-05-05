import React from 'react'
import Headercomponent from './components/Header/Header.component'
export default function Managementlayout({children}) {
  return (

    <div>
      <Headercomponent/>
      {children}
      </div>
  )
}
