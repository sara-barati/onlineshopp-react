import React from 'react'
import {Route, Routes} from "react-router-dom";
import PrivateRote from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import ProtectRoute from './components/ProtectRoute/ProtectRoute';
import Entities from 'Page/Entities/Entities';
import Orders from 'Page/Orders/Orders';
import stuff from 'Page/Stuff/stuff';
import Dashboardpage from 'Page/Doshboard/Dashboard.page';
import Homepage from 'Page/Home/Home.page';
import Buypage from 'Page/Buy/Buy.page';
import Categorypage from 'Page/Category/Category.page';
import Loginpage from 'Page/Login/Login.page';
import NotFoundpage from 'Page/NotFound/NotFound.page';
import Productpage from 'Page/Product/Product.page';
import Resultpage from 'Page/Result/Result.page';
import ShoppingBasketpage from 'Page/ShoppingBasket/ShoppingBasket.page';
import { Login } from '@mui/icons-material';





export default function Approutes() {
  return (
    <Routes>
       <Route path="/login" element={<ProtectRoute flag={false}  MyComponent={Loginpage} />}/>
       <Route path="/dashboard" element={<PrivateRote flag={true} MyComponent={Dashboardpage}/>}>
        <Route path="entities" element={<PrivateRote flag={false} MyComponent={Entities}/>}/>
        <Route path="order" element={<PrivateRote flag={false} MyComponent={Orders}/>}/>
        <Route path="stuff" element={<PrivateRote flag={false} MyComponent={stuff}/>}/>
       </Route>
      
       <Route path="/" element={<PublicRoute MyComponent={Homepage}/>}/>
       <Route path="/category/:productsId" element={<PublicRoute MyComponent={Categorypage}/>}/>
       <Route path="/product/:productId" element={<PublicRoute MyComponent={Productpage}/>}/>
       <Route path="/shoppingbasket" element={<PublicRoute MyComponent={ShoppingBasketpage}/>}/>
       <Route path="/Buy" element={<PublicRoute MyComponent={Buypage}/>}/>
       <Route path="/Result" element={<PublicRoute MyComponent={Resultpage}/>}/>
       <Route path="*" element={<NotFoundpage/>}/>
       

      
    </Routes>
  )
}
