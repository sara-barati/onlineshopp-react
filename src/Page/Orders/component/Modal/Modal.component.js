import React, { useState,useEffect } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";
import {Table} from "Component/Table/Table.component";
import {table_Headers} from "./Modal.config";
import moment from "jalali-moment";
import axios, { Axios } from 'axios';
// import {useDispatch, useSelector} from "react-redux";
// import {setPatchOrder} from "redux/action/patchOrder.action";
// import {setOrdersPaging} from "redux/action/orders.action";
import {toast} from "react-toastify";
import {useSearchParams} from "react-router-dom";
import { DataArraySharp, Directions } from '@mui/icons-material';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'min(100%,700px)',
    maxHeight: '700px',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};

const ModalComponent = ({orderData, hanldeUpdate}) => {

    const [open, setOpen] = React.useState(false);
    const [setData,data]=useState([])
    // const userData = useSelector(state => state.ordersState)
    // const [searchParams, setSearchParams] = useSearchParams();
    // console.log(userData)
    // const dispatch = useDispatch();

    const rows = orderData?.orderInfo?.products.map(product => {
        return (
            <tr key={product.name} style={{textAlign:"center"}}>
                <td>
                    {product.count}
                </td>

                <td>{(+product.price).toLocaleString()} تومان</td>
                <td>{product.name}</td>
            </tr>
        )
    })

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDeliveredOrder =  (editId) => {
        setOpen(false);
        orderData.orderInfo.orderDate= Date.now();
        orderData.orderStatus=1;
        const dataa=JSON.stringify(orderData)
        // const arr=[orderData];
        const url=`http://localhost:3002/orders/${editId}`;
        axios({
          url: url,
          method: "put",
          data:orderData,
          id:editId,
        //   headers: {
        //     "Content-Type": "multipart/form-data"
        //   },
     
    
        })
          .then(function (response) {
         
            console.log(response.data);
            
          })
          .catch(function (error) {
            console.log("error");
          });
         
        // console.log(userData.orders.data.length)
        // const currentParams = Object.fromEntries([...searchParams]);
        // const url ='http://localhost:3002/orders'

        //   axios({
        //       url:url,
        //       method:"post",
        //       headers: {
              
        //           "Content-Type":"multipart/form-data"
        //         },
        //         data:orderData,
        //   })
        //     .then(function (response) {
        //     //   setData(response.data);
        //       console.log(response.data);
   
        //     })
        //     .catch(function (error) {
        //       console.log("error");
        //     });
        
        // useEffect(() => {
        //   getData();
        // }, []);
        //conditions is for when delete an border item then come back to prev page

     
            }
        


    

    // console.log(orderData.createdAt)
    return (
        <div>
            <Button sx={{backgroundColor: '#f8f8f8', '&:hover': {backgroundColor: '#aeaeae'}}}
                    onClick={handleOpen}>
                بررسی سفارش
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box  dir="rtl" sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography  id="modal-modal-title" variant="h6" component="h2" sx={{alignContent:"right"}}>
                            نمایش سفارش
                        </Typography>
                        <Typography>
                            <CloseIcon sx={{cursor: 'pointer'}} onClick={handleClose}/>
                        </Typography>
                    </Box>

                    <Box sx={{
                        direction:"rtl",
                        mt: 2,
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'flex-start;',
                        padding: '0 40px'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            height: '100%',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                           
                        }}>
                            <Typography>
                                نام مشتری :
                            </Typography>
                            <Typography>
                                آدرس :
                            </Typography>
                            <Typography>
                                تلفن :
                            </Typography>
                            <Typography>
                                زمان تحویل :
                            </Typography>
                            <Typography>
                                زمان سفارش :
                            </Typography>

                        </Box>

                        <Box 
                       
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            justifyContent: 'space-between',
                  
                        }}>
                            <Typography className='fa-num'>
                              <span> {orderData?.orderInfo?.username}</span> 
                              {"  "}
                              <span>{orderData?.orderInfo?.lastName}</span>
                            </Typography>
                            <Typography className='fa-num'>
                                {orderData?.orderInfo?.address}
                            </Typography>
                            <Typography className='fa-num'>
                                {orderData?.orderInfo?.phoneNumber}
                            </Typography>
                            <Typography className='fa-num'>
                                {/* {new Date(orderData.expectAt).getFullYear()+"/"+(new Date(orderData.expectAt).getMonth()+1)+"/"+new Date(orderData.expectAt).getDate()} */}
                                {moment(new Date(orderData.orderInfo.expectAt), 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}
                            </Typography>
                            <Typography className='fa-num'>
                                {moment(new Date(orderData.createdAt), 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}
                            </Typography>
                        </Box>
                    </Box>

                    <Table tableHeaders={table_Headers}>
                        {rows}
                    </Table>

                    <Box sx={{display: 'flex', justifyContent: 'center', mt: 3}}>
                        {orderData.orderStatus == "2" ?
                            <Button  onClick={()=>handleDeliveredOrder(orderData.id)} sx={{color: '#f8f8f8'}} color='success'
                                    variant="contained">
                                تحویل شد
                            </Button> :
                             <Typography > زمان تحویل نهایی
                                : {moment(new Date(orderData?.orderInfo?.orderDate), 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}
                             </Typography>}
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

export {ModalComponent}