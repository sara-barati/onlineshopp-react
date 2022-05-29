import React, { useEffect, useRef, useState } from "react";
// import {useDispatch, useSelector} from "react-redux";
import { Link, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Box, Typography } from "@mui/material";
import NumberFormat from "react-number-format";
import axios from "axios";
import { api } from "api/api";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { ProductCard } from "Component/ProductCard/ProductCard.component";
// import {Helmet} from "react-helmet";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import BarChartIcon from "@mui/icons-material/BarChart";

export default function Productpage() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [counts, setCount] = useState(0);

  const url = `http://localhost:3002/products`;
  const getData = () => {
    axios({
      url: url,
      method: "get",
    })
      .then(function (response) {
        setProduct(response.data);
      })
      .catch(function (error) {
        console.log("error");
      });
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    api
      .get(`/category`)
      .then(function (response) {
        setCategory(response.data);
      })
      .catch(function (error) {
        console.log("error");
      });
  }, []);

  console.log(category);
  // let categoryitem=category?.map(itemc=>{
  //   itemc.find
  // })

  const { productId } = useParams();
  console.log(product);

  let details = product.find((deat) => {
    return +deat.id === +productId;
  });

  console.log(details);
  let productCategory = "";
  if (details) {
    productCategory =category.find((categoryitem) => {
      return +details.category === +categoryitem.id;
    });
    console.log(productCategory);
  }
  const handleCount = (e) => {
    setCount(e.target.value);
  };

  // <Box>

  //    <div style={{ width: "200px", height: "200px" }}>

  //     <img
  //       style={{ width: "100%", height: "100%" }}
  //       src={`http://localhost:3002/files/${product.items.thumbnail}`}
  //       alt=""
  //     />
  //   </div>
  //   <Typography variant='h4' sx={{my: 1}}>
  //                           {product.data.name}
  //                       </Typography>
  // </Box>

  return (
    <Box sx={{ width: "100vw",
    height:"100vh",bgcolor:"#fafafa"}}>
      <Box
        sx={{
          width: "83vw",
          height: "80vh",
          bgcolor:"White",
          position:"absolute",
          top:"20vh",
          bottom: "10vh",
          left: "8vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
         
          
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h4"  align="right">{details?.name}</Typography>
          <Typography variant="h6" align="right">
            {details?.brand}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "end", mt: 2 }}>
            <Link
              to={`/category/${details?.category}`}
              style={{ textDecoration: "none", color: "#00695c" }}
            >
              <Typography variant="h5" align="right">
                {productCategory?.name}
              </Typography>
            </Link>
            <Typography variant="h5" align="right" sx={{ color: "#2c2c2c" }}>
              : دسته بندی ها
            </Typography>
          </Box>
          <Box
            sx={{
              my: 5,
              fontSize: "1.3rem",
              display: "flex",
              justifyContent: "end",
            }}
            align="right"
          >
            <span className="margin-r-10">تومان</span>
            <NumberFormat
              className="fa-num"
              value={details?.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={""}
            />
          </Box>

          {+details?.count === 0 ? (
            <Typography variant="h5" align="right" sx={{ color: "error.main" }}>
              اتمام موجودی
            </Typography>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                // "input": {width: '50px', fontSize: '1.3rem', textAlign: 'center'}
              }}
            >
              <input
                min={0}
                value={counts}
                onChange={handleCount}
                style={{
                  padding: "10px 0",
                  borderRadius: "5px",
                  border: "1px solid gray",
                  outline: "none",
                }}
                max={+details?.count}
                type="number"
              />
              <Button sx={{ mx: 2 }} variant="contained" color="success">
                <ShoppingCartIcon fontSize="small" />
                افزودن به سبد خرید
                {/* <span style={{color: '#f8f8f8'}}>افزودن به سبد خرید</span> */}
              </Button>
            </Box>
          )}

                 <Typography align="right" sx={{mt:3}}>{details?.description}</Typography>

        </Box>
        <Grid item xs={12} md={6} lg={4}>
          <img
            style={{ width: "300px", height: "300px" }}
            src={`http://localhost:3002/files/${details?.images}`}
            alt=""
          />
        </Grid>
        {/* <div>{details?.name}</div> */}
      </Box>
    </Box>
  );
}
