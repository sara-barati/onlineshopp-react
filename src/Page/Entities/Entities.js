
import React, { useState, useEffect,useMemo } from 'react'
import axios from 'axios'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
 import {CircularProgress,Pagination,Box,Typography} from "@mui/material";
import { Link } from 'react-router-dom'

export default function Entities(){
  const [product, setProduct] = useState([])
  const limit = useMemo(() => 5, []);
  const [page, setPage] = useState(1);
  const url = `http://localhost:3002/products?_page=${page}&_limit=5`;
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
     <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        marginInline: 2
      }} >
        <TableContainer component={Paper} dir="rtl" sx={{width:"45vw" , height:{},alignContent:"center", ml:"25%",mr:"outo%", textAlign:"center", mt:"5%"}}aria-label="customized table" >
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
           <TableCell style={{padding:"30px"}}>{item.price}</TableCell>
          <TableCell>{item.count}</TableCell>
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
count={Math.ceil(24/ limit)}
// Math.ceil(total data / limit)
// 6 / 4 = 1
onChange={(_, page) => setPage(page)}
/>
</Box>
</>
)
/*     
//         <TableCell align="right"></TableCell>
//           <table dir="rtl">
//             <tr>
//               <th>نام کالا</th>
//               <th>قیمت</th>
//               <th>موجودی</th>
//             </tr>
//             {product.map((item) => {
             */}
//                 return (
//                   <tr>
//                     <td>{item.name}</td>
//                     <td style={{padding:"30px"}}>{item.price}</td>
//                     <td>{item.count}</td>
//                   </tr>
//                 )
              
//             })}
//           </table>


//         </div>


//       }
// </Table>
// </TableContainer>
// </Box>
//     </>
//   )
// }

// <TableContainer component={Paper} dir="rtl" sx={{width:"45vw" , height:{},alignContent:"center", ml:"25%",mr:"outo%", textAlign:"center", mt:"5%"}}aria-label="customized table" >
// <Table>
//   <TableHead>
//     <TableRow>
//       <TableCell>تصویر</TableCell>
//       <TableCell align="right">نام کالا</TableCell>
//       <TableCell align="right">دسته بندی</TableCell>
//       <TableCell align="right">ویرایش</TableCell>
//       <TableCell align="right">حذف</TableCell>
//     </TableRow>
//   </TableHead>
//   <TableBody >
//   {/* <Box
//           sx={{
//             position: "absolute",
//             background: "#fafafa",
//             width: "100%",
//             height: "100%",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center"
//           }}
//         >
//           <CircularProgress />
//         </Box> */}
//         <>
    
//     {Product.map((item) => (
//       <TableRow
//         key={item.name}
       
//       >
      
    
//         <TableCell align="right">

//           <div style={{ width: "40px", height: "40px" }}>
    
//             <img
//               style={{ width: "100%", height: "100%" }}
//               src={`http://localhost:3002/files/${item.thumbnail}`}
//               alt=""
//             />
//           </div>
//         </TableCell>
//         <TableCell align="right">
//           {item.name}
//         </TableCell>
//         {Categroys?.map((categroyItem) => {
//           if (categroyItem.id == item.category) {
//             return (
//               <>
//                 <TableCell align="right"> {categroyItem.name}</TableCell>{" "}
//               </>
//             );
//           }
//         })}
//         <TableCell align="right">
//           {" "}
//           <Link to="">ویرایش </Link>
//         </TableCell>
//         <TableCell align="right">
//           {" "}
//           <Link to="">حذف </Link>
//         </TableCell>
//       </TableRow>
//     ))}
//     </>
//   </TableBody>
// </Table>
// </TableContainer>
// <Pagination
// variant="outlined"
// defaultPage={1}
// page={page}
// count={Math.ceil(24/ limit)}
// // Math.ceil(total data / limit)
// // 6 / 4 = 1
// onChange={(_, page) => setPage(page)}
// />
// </Box>
// </>
// );
// }
