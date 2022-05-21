import React, {useEffect, useRef, useState} from 'react';
// import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {Box, Typography} from "@mui/material";
import NumberFormat from "react-number-format";
import axios from 'axios';
import {ProductCard} from 'Component/ProductCard/ProductCard.component';
// import {Helmet} from "react-helmet";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function Productpage() {
const[product,setProduct]=useState([])
  const url = `http://localhost:3002/products`;
  const getData=()=>{
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
      
    }
    useEffect(() => {
      getData()
    }, []);

    const {productId} = useParams()
    console.log(product);

    let details=product.find(deat => {
        return (
            +deat.id === +productId
        )
    })
    console.log(details);
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
     
      
   
    

  return (<>
    <div>{details?.name}</div>
    </>
  )
}
