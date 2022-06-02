import React, { useEffect, useState } from "react";
// import { styled } from '@mui/material/styles';

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import shopping from "assets/image/shopp.png";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder } from "Redux/reducer/orderSlice";
import Swal from 'sweetalert2'
export default function ShoppingBasketpage() {
  const dispatch = useDispatch();
  const order = JSON.parse(localStorage.getItem("Orders"));
  const [orders, setOrders] = useState([]);
  //  const badgeUpdateState = useSelector(state => state.order)

  useEffect(() => {
    setOrders(order);
  }, []);

  function priceRow(count, price) {
    return count * price;
  }
  function createRow(id, image, name, count, price) {
    const prices = priceRow(count, price);
    return { id, image, name, count, price, prices };
  }
  const rows = orders?.map((order) => {
    return createRow(
      order.id,
      order.image,
      order.name,
      order.count,
      order.price
    );
  });
  function subtotal(items) {
    return items.map((item) => item.prices).reduce((sum, i) => sum + i, 0);
  }
  const invoiceTotal = orders !== [] && orders != null && subtotal(rows);

  const handleDeleteOrder = (id) => {
    Swal.fire({
      title: 'حذف کالا',
      text: `مطمعنی؟`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'حذف کن',
      cancelButtonText:'لغو عملیات',
    }).then((result) => {
      if (result.isConfirmed) {
      const indexDeleteOrder = orders.findIndex((order) => order.id === id);

      const deleteItem = orders.splice(indexDeleteOrder, 1);
  
      ///every time we delete an order update the ui
      const d = orders?.filter((item) => {
        return item.id !== deleteItem.id;
      });
      setOrders(d);
  
      localStorage.setItem("Orders", JSON.stringify(orders));
      dispatch(updateOrder(orders));
        Swal.fire(
          'حذف شد!'
        )
      }
    })
    // const indexDeleteOrder = orders.findIndex((order) => order.id === id);

    // const deleteItem = orders.splice(indexDeleteOrder, 1);

    // ///every time we delete an order update the ui
    // const d = orders?.filter((item) => {
    //   return item.id !== deleteItem.id;
    // });
    // setOrders(d);

    // localStorage.setItem("Orders", JSON.stringify(orders));
    // dispatch(updateOrder(orders));
  };

  return (
    <>
      <Box dir="rtl" sx={{ pr: 3, pt: 3 }}>
        <Typography variant="h4" color="error">
          سبد خرید :
        </Typography>
      </Box>
      {orders !== null && orders.length > 0 ? (
        <Box
          sx={{
            padding: "0 7px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            maxHeight: "100%",
            mt: { xs: 5, md: 3 },
            // td: {color: '#f8f8f8'},
            th: { color: "#f8f8f8" },
          }}
        >
          <TableContainer
            dir="rtl"
            sx={{ width: "min(900px,100%)", maxHeight: "100%", flex: 3 }}
            component={Paper}
          >
            <Table sx={{ minWidth: 400, maxHeight: "100%" }}>
              <TableHead sx={{ bgcolor: "#388e3c" }}>
                <TableRow>
                  {/* <TableCell>شناسه کالا</TableCell> */}
                  <TableCell align="right">عکس کالا</TableCell>
                  <TableCell align="right">نام کالا</TableCell>
                  <TableCell align="right">تعداد</TableCell>
                  <TableCell align="right">قیمت واحد</TableCell>
                  <TableCell align="right">مجموع</TableCell>
                  <TableCell align="right">حذف</TableCell>
                  {/* <TableCell align="center"></TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                 
                    <TableRow key={row.id}>
                      {/* <TableCell>{row.id}</TableCell> */}
                      <TableCell>
                        <Typography
                          component="figure"
                          sx={{
                            width: "50px",
                            height: "50px",
                            img: {
                              width: "1005",
                              height: "100%",
                              objectFit: "cover",
                            },
                          }}
                        >
                          <img
                            src={`http://localhost:3002/files/${row.image}`}
                            alt=""
                          />
                        </Typography>
                      </TableCell>
                     
                      <TableCell align="right">  <Link
                        to={`/product/${row.id}`}
                        style={{ textDecoration: "none", color:"black"}}
                      >{row.name}</Link></TableCell>
                      <TableCell align="right">{row.count}</TableCell>
                      <TableCell align="right">
                        {(+row.price).toLocaleString()}
                      </TableCell>
                      <TableCell align="right">
                        {priceRow(row.price, row.count).toLocaleString()}
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          onClick={() => handleDeleteOrder(row.id)}
                          //    onClick={handleDeleteOrder(row.id)}
                          sx={{
                            backgroundColor: "error.main",
                            color: "background.paper",
                            "&:hover": { color: "red" },
                          }}
                        >
                          حذف
                        </Button>
                      </TableCell>
                    </TableRow>
            
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box
            sx={{
              flex: 1,
              width: "min(900px,100%)",
              m: "auto",
              mt: 2,
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
            }}
          >
            <Box
              dir="rtl"
              sx={{
                flex: 1,
                backgroundColor: "#388e3c",
                color: "background.paper",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginRight: "20px",
                borderRadius: "4px",
                p: 2,
              }}
            >
              <Typography>جمع کل :</Typography>
              <Typography
                sx={{ fontFamily: "IranSanse-number!important" }}
                align="center"
              >
                {invoiceTotal.toLocaleString()}
              </Typography>
            </Box>
            <Link to={"Buy"} style={{textDecoration:"none"}}>
            <Button
              // onClick={handleTotalPrice}
              sx={{ color: "background.paper", p: 2 }}
              variant="contained"
              color="success"
              // navigate("/dashboard/order",  { replace: true })
            >
              {" "}
              نهایی کردن خرید
            </Button>
            </Link>
          </Box>
        </Box>
      ) : (
        // For when Empty
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          <Typography variant="h5" sx={{ mt: 2 }} component="figcaption">
            سبد خرید شما خالیست
          </Typography>
          <Button
            variant="contained"
            sx={{ bgcolor: "#4db6ac", color: "white" }}
          >
            <Link to="/">مشاهده محصولات ما</Link>
          </Button>
          <Typography
            component="figure"
            sx={{ width: "min(300px,100%)", pr: "13%" }}
          >
            <img src={shopping} alt="shopping-card image" />
          </Typography>
        </Box>
      )}
    </>
  );
}
