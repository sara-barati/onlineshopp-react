import React, { useState, useEffect } from 'react'
// import WithAdmin from '../Layouts/WithAdmin'
import axios from 'axios'
import { Link } from 'react-router-dom'
// export default WithAdmin(Product)
export default function kalaha() {
  const [Product, setproduct] = useState()
  const [Categroys, setcategorys] = useState()
  const url = 'http://localhost:3002/products';

  useEffect(() => {
    axios({
      url: url,
      method: 'get',
      // params: {
      //   token: 'TOP-SECRET'
      // }
    })
      .then(function (response) {
        setproduct(response.data)
      })
      .catch(function (error) {
        console.log("error");
      });




  }, [])

  


  useEffect(() => {
    axios({
      url: 'http://localhost:3002/category',
      method: 'get',

    })
      .then(function (response) {
        setcategorys(response.data)
      })
      .catch(function (error) {
        console.log("error");
      });




  }, [])

  return (
    <>
      <button ><Link to='' />افزودن کالا</button>
      <h2>مدیریت کالاها</h2>
      {Product == null ? "loding" :
        <div>
          <table dir="rtl">
            <tr>
              <th>تصویر</th>
              <th>نام کالا</th>
              <th>دسته بندی</th>
              <th>لینک</th>
            </tr>
            {Product.map((item) => {
         
                return (
                  <tr>
                    <td> <div style={{width: '40px', height: '40px'}}>
                        <img style={{width: '100%', height: '100%'}}
                             src={`http://localhost:3002/files/${item.thumbnail}`} alt=""/>
                    </div></td>
                    <td>{item.name}</td>
                    {Categroys.map(categroyItem => {
                      if (categroyItem.id == item.category) {
                        return (
                          <>
                            <td style={{padding:"30px"}}>{categroyItem.name}</td>
                            <td>
                              <Link to=''>ویرایش </Link>
                              <Link to=''>حذف</Link>
                            </td>
                          </>

                        )
                      }

                    })}
                  </tr>
                )
              
            })}
          </table>


        </div>

      }


    </>
  )
}

