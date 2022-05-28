
import React, { useState, useEffect,useMemo } from 'react'
import axios from 'axios'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
 import {Pagination,Box} from "@mui/material";

import Button from '@mui/material/Button';

export default function Entities(){
  const [product, setProduct] = useState([])
  const limit = useMemo(() => 4, []);
  const [page, setPage] = useState(1);
  const url = `http://localhost:3002/products?_page=${page}&_limit=4`;
  function getData() {
    axios({
      url: url,
      method: 'get',
      // params: {
      //   token: 'TOP-SECRET'
      // }
    })
      .then(function (response) {
        setProduct(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  useEffect(() =>  { getData() }, [page])
  // useEffect(() => {
  //   axios({
  //     url: url,
  //     method: 'get',
  //     // params: {
  //     //   token: 'TOP-SECRET'
  //     // }
  //   })
  //     .then(function (response) {
  //       setProduct(response.data)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });




  // }, [])
  return (
    < >
         <Button  variant="contained"  sx={{bgcolor:"#388e3c" ,':hover': {
      bgcolor: '#69f0ae'} , ml:"26%", mt:"1%", pl:"1%",pr:"1%"}}>
          ذخیره
        </Button>
     <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        marginInline: 2
      }} >
        <TableContainer component={Paper} dir="rtl" sx={{width:"45vw" , height:"100%",alignContent:"center", textAlign:"center", mt:"3%"}}aria-label="customized table" >
<Table>
<TableHead>
    <TableRow>

      <TableCell align="right">نام کالا</TableCell>
      <TableCell align="right">قیمت</TableCell>
      <TableCell align="right">موجودی</TableCell>
  
    </TableRow>
  </TableHead>
  <TableBody>
     {product.map((item) =>{
       return(
       <>
     
      <TableRow
        key={item.name}
      >

           <TableCell align="right">{item.name}</TableCell>
           <TableCell align="right" style={{padding:"26px"}}>{item.price}</TableCell>
          <TableCell align="right">{item.count}</TableCell>
     </TableRow>
      </>
       )
     })}

 
  </TableBody>
</Table>
</TableContainer>
 <Pagination
variant="outlined"
defaultPage={1}
page={page}
count={Math.ceil(32/limit)}
// Math.ceil(total data / limit)
// 6 / 4 = 1
sx={{mb:"3%"}}
onChange={(_, page) => setPage(page)}
/>
</Box>
</>
)}
