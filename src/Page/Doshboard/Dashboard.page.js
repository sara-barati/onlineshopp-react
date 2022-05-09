import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, Navigate } from "react-router-dom";
export default function Dashboardpage() {
  const location = useLocation();

  const islogin=useSelector(state=>state.user)
  if(islogin===false){
    return <Navigate to={"/login"}  state={location.pathname}/>;

  }
  return (
    <div>dashboard</div>
  )
}
