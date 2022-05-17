import React from "react";
import { Link, Outlet } from "react-router-dom";
import WaitingOrder from "./Watingorder";
// import WithAdmin from '../Layouts/WithAdmin'
// import WaitingOrder from'./WaitingOrder'
// import Resived from './Resived'
export default function Orders() {
  return (
    <>
      <span>سفارش های در حال انتظار ارسال</span>
      <input type="radio" name="orderRadio" value="waiting" id="wait" />
      <span>سفارش های تحویل داده شده</span>
      <input type="radio" name="orderRadio" value="resive" id="resive"/>
{<WaitingOrder/>}
    </>
  );
}
