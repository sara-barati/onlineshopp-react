import React, { useEffect } from 'react'
import { table_headers } from './kalahaconfig'
import {Table} from "Component/Table/Table.component"
import {Box, PaginationItem, Typography,Button} from "@mui/material";
import axios from 'axios';
import { useState } from 'react';

export default function Kalaha() {
  const [data,setdata]=useState({})

   axios.get('http://localhost:3002/products').then(res=>console.log(res.data))
  

  
  
  // const rows=data.map(row=>{
  //   return (
  //     <tr key={row.id}>
         
  //         <td>
  //             <figure style={{width: '40px', height: '40px'}}>
  //                 <img style={{width: '100%', height: '100%'}}
  //                      src={`http://localhost:3002/products/data/${row.thumbnail}`} alt=""/>
  //             </figure>
  //         </td>
  //         <td>{row.name}</td>
  //         <td></td>
  //         <td></td>
  //         {/* <td>{!categoriesData.loading && !subCategoriesData.loading && categoriesData.categories.find(category => +row.category === (category.id || +category.id)).name}/ {row.subcategory && subCategoriesData.subcategories.find(subcategory => row.subcategory === subcategory.id).name}</td> */}
  //         {/* <td>
  //             <button onClick={() => {
  //                 handleOpenEdit(row.id)
  //                 setProductInfo({
  //                     name: row.name,
  //                     price: row.price,
  //                     quantity: row.quantity,
  //                     category: row.category,
  //                     image: row.image,
  //                     description: row.description,
  //                     thumbnail: row.thumbnail
  //                 })


  //             }}
  //                     style={{
  //                         display: 'flex',
  //                         alignItems: 'center',
  //                         justifyContent: 'center',
  //                         marginBottom: '3px'
  //                     }}>
  //                 <EditIcon/>

  //             </button>
  //             <button onClick={() => handleDeleteStuff(row.id)}
  //                     style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
  //                 <DeleteForeverIcon/>
  //             </button>
  //         </td> */}

  //     </tr>
  // )
  // })


// const rows = !subCategoriesData.loading && !productsData.loading && !categoriesData.loading && productsData.limitProducts.data.map(row => {
  
// })




  return (
    <Box>
      <Typography>مدیریت کالاها</Typography>
<Button>افزودن کالا</Button>

       <Table tableHeaders={table_headers}>
       {/* {rows} */}
            </Table>
    </Box>
    

  )
}
