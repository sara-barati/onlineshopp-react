
import React, { useState, useEffect,useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

 import {CircularProgress,Pagination,Box,Typography, Button} from "@mui/material";




export default function Stuff() {
  const [Product, setproduct] = useState([]);
  const [Categroys, setcategorys] = useState([]);
  const limit = useMemo(() => 4, []);
  const [page, setPage] = useState(1);
  const url = `http://localhost:3002/products?_page=${page}&_limit=4`;

  const getData=(page)=>{
    axios({
      url: url,
      method: "get",
      // params: {
      //   token: 'TOP-SECRET'
      // }
    })
      .then(function (response) {
        setproduct(response.data);
      
      })
      .catch(function (error) {
        console.log("error");
      });

  }
  useEffect(() => {
   getData(page)
  }, [page]);
  console.log(Product);
  useEffect(() => {
    axios({
      url: "http://localhost:3002/category",
      method: "get",
    })
      .then(function (response) {
        setcategorys(response.data);
        
      })
      .catch(function (error) {
        console.log("error");
      });
  }, []);
  console.log(Product);
  // if (error) {
  //   return (
  //     <>
  //       <Typography variant="body1">ERROR - Typography Body1</Typography>
  //       <Typography variant="body2">ERROR - Typography Body2</Typography>
  //     </>
  //   );
  // }

  return (
    <>
             <Button  variant="contained"  sx={{bgcolor:"#388e3c" ,':hover': {
      bgcolor: '#69f0ae'} , ml:"26%", mt:"1%", pl:"1.5%",pr:"1.5%"}}>
          افزودن کالا
        </Button>
    <Box
      sx={{
        
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        marginInline: 2
      }}
    >
    <TableContainer component={Paper} dir="rtl" sx={{width:"45vw" , height:"57vh",alignContent:"center", textAlign:"center", mt:"5%"}}aria-label="customized table" >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>تصویر</TableCell>
            <TableCell align="right">نام کالا</TableCell>
            <TableCell align="right">دسته بندی</TableCell>
            <TableCell align="right">ویرایش</TableCell>
            <TableCell align="right">حذف</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
        {/* <Box
                sx={{
                  position: "absolute",
                  background: "#fafafa",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <CircularProgress />
              </Box> */}
              <>
          
          {Product.map((item) => (
            <TableRow
              key={item.name}
             
            >
            
          
              <TableCell align="right">

                <div style={{ width: "40px", height: "40px" }}>
          
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={`http://localhost:3002/files/${item.thumbnail}`}
                    alt=""
                  />
                </div>
              </TableCell>
              <TableCell align="right">
                {item.name}
              </TableCell>
              {Categroys?.map((categroyItem) => {
                if (categroyItem.id == item.category) {
                  return (
                    <>
                      <TableCell align="right"> {categroyItem.name}</TableCell>{" "}
                    </>
                  );
                }
              })}
              <TableCell align="right">
                {" "}
                <Link to="">ویرایش </Link>
              </TableCell>
              <TableCell align="right">
                {" "}
                <Link to="">حذف </Link>
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
     count={Math.ceil(32/ limit)}
     
     sx={{mb:"3%"}}
     // Math.ceil(total data / limit)
     // 6 / 4 = 1
     onChange={(_, page) => setPage(page)}
   />
   </Box>
  </>
  );
}
