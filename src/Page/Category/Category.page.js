import React from 'react';
import axios from "axios";
import { useEffect,useState } from 'react';
import { ProductCard } from 'Component/ProductCard/ProductCard.component';
import {api} from "api/api";
import { useFetch } from 'hook/useFetch';
import { Section } from 'Component/productSection/Section.component';
import {Link, useParams, useSearchParams} from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {MenuItem, PaginationItem, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";



export default function Categorypage() {
  const {productsId} = useParams()
  // const [searchParams, setSearchParams] = useSearchParams();

  const [product, setProduct] = useState([]);
  const[category,setCategory]=useState([]);
  const[data,setData]=useState([])
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
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
    
    console.log(product);
    
   



return(<>
 <Section limitness={true} id={productsId} key={productsId} title={productsId}
                 data={product.filter(productt => +productt.category === productsId)}/>

 
  </>
)}

  // useEffect(() => {
  //   axios({
  //     url: "http://localhost:3002/category",
  //     method: "get",
  //   })
  //     .then(function (response) {
  //       setcategorys(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log("error");
  //     });
  // }, []);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       setLoading(true);
  //       const response = await api.get( url);
      
  //       setData(response);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   })();
  // }, [url]);
  
  // const { data, loading, error } = useFetch(
  //   `/products`
  // );

  
 

    // <>
    // {product.map(item=>{
    //   return(<h1>{item.name}</h1>)
     
    // })}
    // </>
  
