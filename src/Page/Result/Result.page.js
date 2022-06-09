import React, {useEffect,useState} from 'react';
import {Link, useSearchParams} from "react-router-dom";
import success from 'assets/image/success.png'
import failed from 'assets/image/fail2.png'
import {Box, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import { deletOrder } from "Redux/reducer/orderSlice";
import Button from "@mui/material/Button";
import axios from 'axios';


export default function Resultpage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentParams = Object.fromEntries([...searchParams]);
  // const test=Object.fromEntries([currentParams])
  console.log(currentParams)
const[val,setVal]=useState([])
  // console.log(searchParams)
  const orderInfo = JSON.parse(localStorage.getItem("ORDER_INFO"))
  const orderStatus =JSON.parse(localStorage.getItem("orderStatus"))
  const tokenn=(localStorage.getItem("token"))
  const dispatch = useDispatch()
  
    useEffect(() => {
   
//         orderInfo?.products?.map(product=>{

//             console.log(product?.count);
//             const cc=product?.count

//             const url2=`http://localhost:3002/products?id=${product.id}`;
          
//             axios({
//               url: url2,
//               method: "get",
        
        
//             })
//               .then(function (response) {
//                 setVal(response.data);
//                 console.log(response.data);
                
//               })
          
// const c=val.count;
// const res=c-cc

// val.count=cc
// console.log(val);
// console.log(cc);
//             const url1=`http://localhost:3002/products/${product.id}`;
//             axios({
//               url: url1,
//               method: "put",
//               data:val,
//             //   id:product.id,
//                 //    headers: {
//                 //         "Content-Type": "multipart/form-data"
//                 //       },
         
        
//             })
//               .then(function (response) {
             
//                 console.log(response.data);
                
//               })
//               .catch(function (error) {
//                 console.log("error");
//               });
             

//         }
            
//         )


        
      if (currentParams.result === 'success') {
        // dispatch(setPostOrder(orderInfo));


        const url="http://localhost:3002/orders";
          
        axios({
          url: url,
          method: "post",
          data:{orderInfo,orderStatus},
         
    
        })
          .then(function (response) {
         
            console.log(response.data);
            
          })
          .catch(function (error) {
            console.log("error");
          });
         
          dispatch(deletOrder())
          localStorage.removeItem("TOTAL_PRICE")
          localStorage.removeItem("Orders")
          localStorage.removeItem("ORDER_INFO")
          localStorage.removeItem("orderStatus")
      } else {
        console.log("non");
          localStorage.removeItem("ORDER_INFO")
          localStorage.removeItem("orderStatus")
      }
  }, [searchParams])
  

return (
  <>



      <Box>
          <Typography variant="h4" sx={{
              padding: {xs: "40px 0", md: "0 40px"},
              textAlign: {xs: "center", md: "left"},
              color: '#2c2c2c'
          }}>
              نتیجه پرداخت :
          </Typography>
      </Box>
      {currentParams.result === 'success' ?

          <Box sx={{
              display: 'flex',
              height: "100%",
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
          }}>
              <Typography component='figure' sx={{width: '400px', height: '300px'}}>
                  <img src={success} alt=""/>
              </Typography>

              <Box>
                  <Typography variant='h5' component='h3'
                              sx={{width: '450px', mt: 4, color: '#32ff87', textAlign: 'center'}}>
                      با تشکر از پرداخت شما،سفارش شما ثبت شده و جهت هماهنگی در ارسال با شما تماس گرفته خواهد شد
                  </Typography>
              </Box>

              <Link to="/">
                  <Button sx={{mt: 1, width: '400px'}} variant='contained' color='info'>بازگشت به صفحه
                      اصلی</Button>
              </Link>
          </Box>


          :
          <Box sx={{
              display: 'flex',
              height: "100%",
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
          }}>
              <Typography component='figure' sx={{width: '400px', height: '300px'}}>
                  <img src={failed} alt="" width={"100%"}/>
              </Typography>

              <Box>
                  <Typography variant='h5' component='h3'
                              sx={{width: 'min(450px,100%)', m: "auto", color: '#C61E27', textAlign: 'center'}}>
                      پرداخت شما موفقیت آمیز نبود،سفارش شما در انتظار پرداخت است.
                  </Typography>
              </Box>
              <Link to="/">
                  <Button sx={{mt: 1, width: '400px'}} variant='contained' color='info'>بازگشت به صفحه
                      اصلی</Button>
              </Link>
          </Box>

      }

  </>
)

    }