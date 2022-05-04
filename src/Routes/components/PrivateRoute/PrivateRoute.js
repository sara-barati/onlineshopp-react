import React from 'react'
import Managementlayout from 'Layout/Management/Management.layout'

export default function PrivateRote({MyComponent}) {
  return (
    <div>
            <Managementlayout>
                    <MyComponent/>
             </Managementlayout>
        </div>
  )
}
