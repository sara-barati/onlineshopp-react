import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import Swal from "sweetalert2";
import deletProduct from "hook/deletProduct";
import StuffFormcomponent from "./components/StuffForm.component";

import {
  CircularProgress,
  Pagination,
  Box,
  Typography,
  Button,
} from "@mui/material";
import Header from "Layout/Main/components/Header/Header.comonent";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "min(600px,100%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  maxHeight: "700px",
  overflowY: "auto",
  boxShadow: 24,
  p: 4,
};

export default function Stuff() {
  const [Product, setproduct] = useState([]);
  const [Categroys, setcategorys] = useState([]);
  const [total, setTotal] = useState("");
  const limit = useMemo(() => 4, []);
  const [page, setPage] = useState(1);
  const [open, setOpen] = React.useState(false);
  const [delet, setDelet] = useState("");
  const [EditId, setEditId] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = (id) => {
    setOpenEdit(true)
    setEditId(id)
};
const handleCloseEdit = () => setOpenEdit(false);
const [productInfo, setProductInfo] = useState({
  name: "",
  price: null,
  quantity: null,
  category: null,
  image: null,
  description: "",
  thumbnail: null
})

  const url = `http://localhost:3002/products?_page=${page}&_limit=${limit}}`;

  const getData = (page) => {
    axios({
      url: url,
      method: "get",
      // params: {
      //   token: 'TOP-SECRET'
      // }
    })
      .then(function (response) {
        setproduct(response.data);
        console.log(response);
        setTotal(response.headers["x-total-count"]);
      })
      .catch(function (error) {
        console.log("error");
      });
  };
  useEffect(() => {
    getData(page);
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

  const handleDeleteStuff = (id) => {
    Swal.fire({
      title: "مطمعنی؟",
      text: "بعد از حذف هیچ راه بازگشتی نیست!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "حذف کن",
      cancelButtonText: "لغو عملیات",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const idproduct = id;
        deletProduct(idproduct).then( ()=>    axios({
          url: url,
          method: "get",
       
        })
          .then(function (response) {
            setproduct(response.data);
            console.log(response);
            setTotal(response.headers["x-total-count"]);
          })
          .catch(function (error) {
            console.log("error");
          })
    )
     

        // getData(page);
        // window.location.reload()
        Swal.fire("پاک شد!", "محصول مورد نظر با موفقیت حذف شد.", "success");
      }
    });
  };

  return (
    <>
      <Modal

open={openEdit}
onClose={handleCloseEdit}
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description"
>
<Box sx={style}>
    <StuffFormcomponent onClose={handleCloseEdit} info={productInfo} editId={EditId} types='edit'
   categories={Categroys}/>
</Box>
</Modal>



      <Button
        variant="contained"
        sx={{
          bgcolor: "#388e3c",
          ":hover": {
            bgcolor: "#69f0ae",
          },
          ml: "26%",
          mt: "1%",
          pl: "1.5%",
          pr: "1.5%",
        }}
        onClick={handleOpen}
      >
        افزودن کالا
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <StuffFormcomponent onClose={handleClose} 
        types='add'
            categories={Categroys}
                                       />
        </Box>
      </Modal>

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
          sx={{
            width: "45vw",
            height: "57vh",
            alignContent: "center",
            textAlign: "center",
            mt: "5%",
          }}
          aria-label="customized table"
        >
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
            <TableBody>
              <>
                {console.log("لاگ محصولات", Product)}
                {Product.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell align="right">
                      <div style={{ width: "40px", height: "40px" }}>
                        <img
                          style={{ width: "100%", height: "100%" }}
                          src={`http://localhost:3002/files/${item.thumbnail}`}
                          alt=""
                        />
                      </div>
                    </TableCell>
                    <TableCell align="right">{item.name}</TableCell>
                    {Categroys?.map((categroyItem) => {
                      if (categroyItem.id == item.category) {
                        return (
                          <>
                            <TableCell align="right">
                              {" "}
                              {categroyItem.name}
                            </TableCell>{" "}
                          </>
                        );
                      }
                    })}
                    <TableCell align="right">
                      {/* {" "}
                      <Link to="">
                        <EditIcon sx={{ color: "black", fontSize: "medium" }} />{" "}
                      </Link> */}
                                     <button onClick={() => {
                        handleOpenEdit(item.id)
                        setProductInfo({
                            name: item.name,
                            price: item.price,
                            quantity: item.count,
                            category: item.category,
                            image: item.image,
                            description: item.description,
                            thumbnail: item.thumbnail
                        })


                    }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '3px'
                            }}>
                        <EditIcon sx={{ fontSize: "medium" }}/>

                    </button>
                    </TableCell>
                    <TableCell align="right">
                      {" "}
                      {/* <Link to="">
                        <DeleteIcon
                          sx={{ color: "black", fontSize: "medium" }}
                        />{" "}
                      </Link> */}
                      <button
                        onClick={() => handleDeleteStuff(item.id)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <DeleteIcon
                          sx={{ color: "black", fontSize: "medium" }}
                        />
                      </button>
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
          sx={{ mb: "3%" }}
          // Math.ceil(total data/ limit)
          // 6 / 4 = 1
          onChange={(_, page) => setPage(page)}
        />
      </Box>
    </>
  );
}
