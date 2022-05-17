import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';

// import { setOrder } from 'Redux/reducer/orderSlice';
// import { useSelector } from 'react-redux'
import axios from 'axios'

export default function WaitingOrder() {
    const[Order,setOrder]=useState([])
//   const order = useSelector((state) => state.order)
//   const dispatch = useDispatch()
  const url = 'http://localhost:3002/orders';

//   headers: {
//       const token = localStorage.getItem('token');
//       config.headers.Authorization =  token ? `Bearer ${token}` : '';

//       const config = {
//           headers: { Authorization: `Bearer ${token}` }
//       };}
  function getData() {
    axios({
      url: url,
      method: 'get',
     
  
    })
      .then( (response) =>{
        setOrder(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() =>  { getData() }, [])

  return (
    <>
        <div>
        <h2>مدیریت سفارشات</h2>
        <table dir="rtl" style={{ border: '1' }}>
          <tr>
            <th>نام کاربر</th>
            <th>مجموع مبلغ</th>
            <th>زمان ثبت سفارش</th>
            <th>وضعیت</th>
          </tr>
          {Order == null ? "loading" : Order.map((item, id) => {
            if (item.orderStatus === 1) {
              return (
                <>
                  <tr>
                    <td>{item.customerDetail.firstName}<span style={{ paddingRight: '3px' }}>{item.customerDetail.lastName}</span></td>
                    <td>{item.purchaseTotal}</td>
                    <td>{item.orderDate}</td>
                    <td>بررسی سفارش</td>
                  </tr>
                </>)
            }

          })}


        </table>
        </div>
    </>
  )
}