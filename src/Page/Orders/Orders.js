import React, { useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import NumberFormat from 'react-number-format';
import {useFetch} from 'hook/useFetch';
import { useEffect } from 'react';
import * as moment from 'jalali-moment';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useMemo } from 'react';
 import {CircularProgress,Pagination,Box,Typography, Button} from "@mui/material";
import axios, { Axios } from 'axios';

export default function Orders() {
  const [total, setTotal] = useState("");
  const limit = useMemo(() => 4, []);
  const [page, setPage] = useState(1);
  const [data, setData]=useState([])
  const [status,setValue]=useState("1")
  const url =`http://localhost:3002/orders?orderStatus=${status}&_page=${page}&_limit=${limit}`;

  const getData = (page) => {
    axios({
      url: url,
      method: "get",
    })
      .then(function (response) {
        setData(response.data);
        console.log(response);
        setTotal(response.headers["x-total-count"]);
      })
      .catch(function (error) {
        console.log("error");
      });
  };
  useEffect(() => {
    getData(page);
  }, [page,status]);


  // useEffect(()=>{
  //   axios.get(`http://localhost:3002/orders?orderStatus=${status}&_page=${page}&_limit=${limit}`)
  //   .then((response)=>setData(response.data));
  //   console.log(response);
  //   setTotal(response.headers["x-total-count"]);
    
  // },[page])



  // const { data, loading, error } = useFetch(
  //   `/orders?orderStatus=${status}&_page=${page}&_limit=${limit}`,
  
  // )
  let dateObject=""
 
  const handleActive=((e)=>
  {
    setValue(e.target.value)}
  )
  console.log(status);
  // console.log(data.data);
  return (
 <>
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">مدیریت سفارش ها</FormLabel>
      <RadioGroup
       sx={{display:"flex",flexDirection:"row"}}
      onClick={handleActive}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="1"
        name="radio-buttons-group"
       
      >
        <FormControlLabel value="1" control={<Radio />} label="سفارش های تحویل شده" />
        <FormControlLabel value="2"  control={<Radio />} label="سفارش های در انتظار ارسال" />
     
      </RadioGroup>
    </FormControl>
<Box
    sx={{
        
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        marginInline: 2
      }}
    >
    <TableContainer component={Paper} dir="rtl" sx={{width:"45vw" , height:"outo",alignContent:"center", textAlign:"center", mt:"5%"}}aria-label="customized table" >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">نام کاربر</TableCell>
            <TableCell align="right">مجموع مبلغ</TableCell>
            <TableCell align="right"> زمان ثبت سفارش</TableCell>
            <TableCell align="right">بررسی سفارش ها</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody >

              <>
          
          {data?.map((item, id) => (
            <TableRow
              key={id}
             
            >
            
          

              <TableCell align="right">
              {item.customerDetail.firstName} <span>{item.customerDetail.lastName}</span>
              </TableCell>


              <TableCell align="right">
            <NumberFormat className='fa-num' value={item.purchaseTotal || +item.purchaseTotal} displayType={'text'}
                                      thousandSeparator={true}
                                      prefix={''}/>
                                
              
              
              </TableCell>
              
              <TableCell align="right">
            {moment(new Date(item.orderDate),'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}
                 </TableCell>
    
              {/* {Categroys?.map((categroyItem) => {
                if (categroyItem.id == item.category) {
                  return (
                    <>
                      <TableCell align="right"> {categroyItem.name}</TableCell>{" "}
                    </>
                  );
                }
              })} */}
              <TableCell align="right">
              
                <Link to="">بررسی سفارش </Link>
              </TableCell>
         
            </TableRow>
          ))}
          </>
        </TableBody>
      </Table>
    </TableContainer>
    <Pagination
          variant="outlined"
          defaultPage={1}
          page={page}
          //  count={Math.ceil(32/limit)}
          count={Math.ceil(total / limit)}
          //  count={Math.ceil(Product?.headers["Product-total-count"] / limit)}
          sx={{ mt: "3%" ,position:"absolute", bottom:"3%"}}
          // Math.ceil(total data/ limit)
          // 6 / 4 = 1
          onChange={(_, page) => setPage(page)}
        />
</Box>





{/* 
    <div>{data?.map(item=>{
      return(
        <>
          <div>{item.purchaseTotal}</div>
        </>
      )
    })}</div> */}

    </>)}