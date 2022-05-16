import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { useFetch } from 'hook/useFetch';

export default function WaitingOrder() {

    const { data, loading, error } = useFetch(
      `/orders`
    );
    console.log(data);


  

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
          {data ==null ? loading : data.map((item, id) => {
           
 
               return(<>
                
                  <tr key={id}>
                    <td>{item.customerDetail.firstName}<span style={{ paddingRight: '3px' }}>{item.customerDetail.lastName}</span></td>
                    <td>{item.purchaseTotal}</td>
                    <td>{item.orderDate}</td>
                    <td>بررسی سفارش</td>
                  </tr>
                </>)
            
       
          })}


        </table>
        </div>
    </>
  )
}