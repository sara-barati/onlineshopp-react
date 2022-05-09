import React from 'react'
import { table_headers } from './kalahaconfig'
import {Table} from "Component/Table/Table.component"
import {Box, PaginationItem, Typography,Button} from "@mui/material";
import axios from 'axios';
export default function Kalaha() {
  const product=axios.get('http://localhost:3002/products').then(res=>{const dev=res.data;
  console.log(dev);
  console.log(dev.name);
})

  return (
    <Box>
      <Typography>مدیریت کالاها</Typography>
<Button>افزودن کالا</Button>

       <Table tableHeaders={table_headers}>
             
            </Table>
    </Box>
    

  )
}
