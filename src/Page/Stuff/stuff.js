// import React, { useState, useEffect } from 'react'
// // import WithAdmin from '../Layouts/WithAdmin'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
// // export default WithAdmin(Product)
// export default function Stuff() {
//   const [Product, setproduct] = useState([])
//   const [Categroys, setcategorys] = useState([])
//   const url = 'http://localhost:3002/products';

//   useEffect(() => {
//     axios({
//       url: url,
//       method: 'get',
//       // params: {
//       //   token: 'TOP-SECRET'
//       // }
//     })
//       .then(function (response) {
//         setproduct(response.data)
//       })
//       .catch(function (error) {
//         console.log("error");
//       });

//   }, [])

//   useEffect(() => {
//     axios({
//       url: 'http://localhost:3002/category',
//       method: 'get',

//     })
//       .then(function (response) {
//         setcategorys(response.data)
//       })
//       .catch(function (error) {
//         console.log("error");
//       });

//   }, [])

//   return (
//     <>
//       <button ><Link to='' />افزودن کالا</button>
//       <h2>مدیریت کالاها</h2>
//       {Product == null ? "loding" :
//         <div>
//           <table dir="rtl">
//             <tr>
//               <th>تصویر</th>
//               <th>نام کالا</th>
//               <th>دسته بندی</th>
//               <th>لینک</th>
//             </tr>
//             {Product.map((item) => {

//                 return (
//                   <tr>
//                     <td> <div style={{width: '40px', height: '40px'}}>
//                         <img style={{width: '100%', height: '100%'}}
//                              src={`http://localhost:3002/files/${item.thumbnail}`} alt=""/>
//                     </div></td>
//                     <td>{item.name}</td>
//                     {Categroys?.map(categroyItem => {
//                       if (categroyItem.id == item.category) {
//                         return (
//                           <>
//                             <td style={{padding:"30px"}}>{categroyItem.name}</td>
//                             <td>
//                               <Link to=''>ویرایش </Link>
//                               <Link to=''>حذف</Link>
//                             </td>
//                           </>

//                         )
//                       }

//                     })}
//                   </tr>
//                 )

//             })}
//           </table>

//         </div>

//       }

//     </>
//   )
// }


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
 import {CircularProgress,Pagination,Box,Typography} from "@mui/material";


// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// const SamplePaginaion = () => {
//   const limit = useMemo(() => 3, []);
//   const [activePage, setActivePage] = useState(1);
//   const { data, loading, error } = useFetch(
//     `/products?_page=${activePage}&_limit=${limit}}`
//   );

  // if (error) {
  //   return (
  //     <>
  //       <Typography variant="body1">ERROR - Typography Body1</Typography>
  //       <Typography variant="body2">ERROR - Typography Body2</Typography>
  //     </>
  //   );
  // }

export default function Stuff() {
  const [Product, setproduct] = useState([]);
  const [Categroys, setcategorys] = useState([]);
  const limit = useMemo(() => 5, []);
  const [page, setPage] = useState(1);
  const url = `http://localhost:3002/products?_page=${page}&_limit=5`;

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        marginInline: 2
      }}
    >
    <TableContainer component={Paper} dir="rtl" sx={{width:"45vw" , height:{},alignContent:"center", ml:"25%",mr:"outo%", textAlign:"center", mt:"5%"}}aria-label="customized table" >
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
     count={Math.ceil(24/ limit)}
     // Math.ceil(total data / limit)
     // 6 / 4 = 1
     onChange={(_, page) => setPage(page)}
   />
   </Box>
  </>
  );
}
