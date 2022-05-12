import React from 'react'
import Mainlayout from 'Layout/Main/Main.layout';
import { Navigate } from 'react-router-dom';

export default function ProtectRoute({MyComponent, flag}) {
   
        const isLoggedIn = JSON.parse(localStorage.getItem("is-login"));
    
        if (isLoggedIn) {
            return <Navigate replace to='/'/>
        } else {
           
            return (
    
                flag ? (
                    <Mainlayout>
                        <MyComponent/>
                    </Mainlayout>
                ) : (
                    <MyComponent/>
                )
    
            )
        }
    
    }
    
    
  


