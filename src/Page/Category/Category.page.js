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
    
   console.log(productsId);
   
  //  const getSelec =() => {
  //   const select = product.filter(
  //     (item) => item.category === productsId);
  //   setData(select)
  // };

 
  const sections= product.map(items=>{
  if(items.category===productsId){
    return(
 
      <Grid sx={{mb: 1}} key={items.id} justifyContent="center" item xs={12} sm={6} lg={4}>
      <ProductCard 
                 data={items}/>
  </Grid>
 
  
    )}})


  


return(<>
  <Grid container spacing={3} sx={{textAlign:{xs: "center"}}}>
  {sections}
   </Grid>
  
  </>
)
}


// const sections = category.map(categoryy => {
//   return (
//       <Section limitness={false} id={categoryy.id} key={categoryy.id} title={categoryy.name}
//                data={product.filter(productt => +productt.category === categoryy.id)}/>
//   )
// })


// return(<>
// {sections}
// </>
// )}

    // if(+product.category===productsId){
    //   product.map(item=>{
    //     return (
    //     <>
    //     <Grid sx={{mb: 1}} key={item.id} justifyContent="center" item xs={12} sm={6} lg={4}>
    //     <ProductCard data={item}/>
    // </Grid>
    // </>)
    //   }
    // )

    // }}
    // return (
    //         <Grid sx={{mb: 1}} key={product.id} justifyContent="center" item xs={12} sm={6} lg={4}>
    //         <ProductCard data={product}/>
    //     </Grid>
      // <Section limitness={false} id={productsId} key={productsId} title={"k"}
      //            data={product.filter(productt => +productt.category === productsId)}/>
    //     <Grid sx={{mb: 1}} key={product.id} justifyContent="center" item xs={12} sm={6} lg={4}>
    //         <ProductCard data={product}/>
    //     </Grid>
    // )
    


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
  
