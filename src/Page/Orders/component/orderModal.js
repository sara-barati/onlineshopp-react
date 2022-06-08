import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box , Typography} from '@mui/material';
export default function OrderModal(orderData) {



const rows = orderData?.orderInfo?.products.map(product => {
  return (
    <TableRow key={product.name}>
      <TableCell align="right">{product.name}</TableCell>

<TableCell align="right">
{(+product.price).toLocaleString()} تومان
</TableCell>
<TableCell align="right">
{product.count}
</TableCell>
    </TableRow>


  )
})
     console.log(rows)
  return (
   <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          marginInline: 2,
        }}
      >

        <TableContainer
          component={Paper}
          dir="rtl"
        //   sx={{
        //     width: "45vw",
        //     height: "57vh",
        //     alignContent: "center",
        //     textAlign: "center",
        //     mt: "5%",
        //   }}
          aria-label="customized table"
        >
          <Table>
            <TableHead>
              <TableRow>
                {/* <TableCell>تصویر</TableCell> */}
                <TableCell align="right">نام کالا</TableCell>
                <TableCell align="right">قیمت</TableCell>
                <TableCell align="right">تعداد</TableCell>
                {/* <TableCell align="right">حذف</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
     
          {rows}

            </TableBody>
          </Table>
        </TableContainer>
        </Box>
  )
}


