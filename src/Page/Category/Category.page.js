import React from 'react';
import axios from "axios";
import { useEffect,useState,useMemo } from 'react';
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
  const drawerWidth = 240;
  const {productsId} = useParams()
  const [product, setProduct] = useState([]);
  const[category,setCategory]=useState([]);
  const[data,setData]=useState([]);
  const limit = useMemo(() => 4, []);
  const [page, setPage] = useState(1);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [total, setTotal] = useState("");

  const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
  };

    // console.log(categoriesData.categories)

    

 

  const url = `http://localhost:3002/products?category=${productsId}&_page=${page}&_limit=${limit}`;
  const getData=()=>{
    axios({
      url: url,
      method: "get",
      
    })
      .then(function (response) {
        setProduct(response.data);
        setTotal(response.headers["x-total-count"]);
        
        console.log(product);
      })
      .catch(function (error) {
        console.log("error");
      });
      
    }
    useEffect(() => {
      getData(page)
    }, [productsId,page]);
    

   const url2 = `http://localhost:3002/category`;
  const getData2=()=>{
    axios({
      url: url2,
      method: "get",
      
    })
    .then(function (response) {
      setCategory(response.data);
      
    })
    .catch(function (error) {
      console.log("error");
    });
    
  }
  useEffect(() => {
    getData2()
  }, []);
  

    console.log(category ,"nkkjkj");
    console.log(product);
    
   console.log(productsId);

   
   let categorytitle=category?.find((item)=>{
    return (
     +item.id===+productsId
     )
   })



   const drawer = (
    <Box  sx={{ color: '#00897b', position:"absolute", top:"13vh" , right:"0",display:{xs:"none",md:"block"}}}>
          

        <List>
            {category?.map((text) =>(
                <div key={text.id}>
                    <ListItem >
              
                        
                        <Link to={`/category/${text.id}`} style={{textDecoration:"none"}}>
                           <Typography variant="h5">{text.name}</Typography> 
                            
                        </Link>
                    </ListItem>
 
                </div>
            ))}
        </List>

    </Box>
);


    const sections = product.map(items=>{

    return(




      <Grid sx={{mb: 1}} key={items.id} justifyContent="center" item xs={12} sm={6} lg={4}>
      <ProductCard 
                 data={items}/>
  </Grid>

  
    )})





return(
<Box >



{drawer}
<Typography variant="h5" align='center'sx={{mb:5,mt:4}}> محصولات گروه {categorytitle?.name} </Typography>
  <Grid container spacing={3} sx={{textAlign:{xs: "center"} , width:{md:"88vw",xs:"100vw"}}}>
  {sections}
   </Grid>
   <Pagination
          variant="outlined"
          defaultPage={1}
          page={page}
   
          count={Math.ceil(total / limit)}
         
          sx={{ mb:"1%",ml:"45%" , mr:"outo", pt:"10px" }}
  
          onChange={(_, page) => setPage(page)}
        />
  </Box>
)
}



  
