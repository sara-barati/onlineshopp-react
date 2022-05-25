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
  const drawerWidth = 240;
  const {productsId} = useParams()
  const [product, setProduct] = useState([]);
  const[category,setCategory]=useState([]);
  const[data,setData]=useState([])

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
  };

    // console.log(categoriesData.categories)

    

 

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
  
    

    // useEffect(() => {
    //   api
    //     .get(`/category`)
    //     .then(function (response) {
    //       setCategory(response.data);
    //     })
    //     .catch(function (error) {
    //       console.log("error");
    //     });
    // }, []);
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
                    <ListItem 
                    //  button sx={{
                    //     display: 'flex',
                    //     transition: "transform .3s linear",
                    //     "a": {color: '#9393ce'},
                    //     "&:hover": {transform: "scale(1.1) translateX(10px)"}
                    // }}
                    >
                        {/* <figure style={{width: '50px', height: '50px', borderRadius: '50%', margin: '0 0 0 8px'}}>
                            <img style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}}
                                 src={`http://localhost:3002/files/${text.icon}`} alt=""/>
                        </figure> */}
                        
                        <Link to={`/category/${text.id}`} style={{textDecoration:"none"}}>
                           <Typography variant="h5">{text.name}</Typography> 
                            
                        </Link>
                    </ListItem>
                    {/* <ListItem button sx={{
                        display: 'flex',
                        alignItems: 'start',
                        flexDirection: 'column',
                        "&:hover": {backgroundColor: 'inherit'},
                        "a": {color: '#9393ce'}
                    }}>
                        {subCategoriesData.subcategories.filter(sub => sub.category === text.id).map(subcategroy => {
                            return (
                                <MenuItem key={subcategroy.name}> <Link to='/'>{subcategroy.name}</Link></MenuItem>
                            )
                        })}
                    </ListItem> */}
                </div>
            ))}
        </List>

    </Box>
);


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


return(
<Box >
{/* <Box
                    component="nav"
                    sx={{width: {md:" 300px"}, flexShrink: {sm: 0} ,position:"absolute"}}
                    aria-label="mailbox folders"
                > */}
                    {/* <Drawer
                        // container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: {xs: 'block', sm: 'none'},
                            '& .MuiDrawer-paper': {boxSizing: 'border-box', width:" 300px"},
                        }}
                    >
                        {drawer}
                    </Drawer> */}
                    {/* <Drawer
                        variant="permanent"
                        sx={{
                            top: 'initial',
                            display: {xs: 'none', md: 'block'},
                            width:"300px"
                            // '& .MuiDrawer-paper': {
                            //     boxSizing: 'border-box',
                            //     width: "300px",
                            //     paddingTop: '70px',
                            //     zIndex: '0'
                            // },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer> */}
                     {/* <Drawer
        sx={{
          position:"absolute",top:"10vh",
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
           
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      > {drawer}</Drawer>
                </Box> */}


{drawer}
<Typography variant="h5" align='center'sx={{mb:5,mt:4}}> محصولات گروه {categorytitle?.name} </Typography>
  <Grid container spacing={3} sx={{textAlign:{xs: "center"} , width:{md:"88vw",xs:"100vw"}}}>
  {sections}
   </Grid>
  
  </Box>
)
}



  
