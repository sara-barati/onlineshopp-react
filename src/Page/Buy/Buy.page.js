import React,{useState} from 'react';
import * as moment from 'jalali-moment';
import { useFormik } from 'formik';
import { useFetch } from 'hook/useFetch';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';

import {
  DatePicker,
  DateTimePicker,
  DateRangePicker,
  DateTimeRangePicker
} from "react-advance-jalaali-datepicker";

// import Button from '@material-ui/core/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin } from 'Redux/reducer/login.Slice';
import Buy from 'assets/image/buy.png'
import Grid from '@mui/material/Grid';
import 'react-toastify/dist/ReactToastify.css';
const validationSchema = yup.object({
  "username": yup
    .string('لطفا نام کاربری خود را وارد کنید')
    .required('پر کردن این فیلد اجباری است')
    .min(3, 'نام کاربری شما باید طولانی تر باشد'),
  "lastName": yup
    .string('لطفا رمز ورود خود را وارد کنید')
    .min(3, 'رمز ورود شما باید طولانی تر باشد')
    .required('پر کردن این فیلد اجباری است'),
    "address": yup
    .string('لطفا نام کاربری خود را وارد کنید')
    .required('پر کردن این فیلد اجباری است')
    .min(3, 'نام کاربری شما باید طولانی تر باشد'),
    "phoneNumber": yup
    .string()
    .required("لطفا شماره ی همراه خود را وارد کنید")
    .matches(
/^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
      "شماره وارد شده معتبر نیست"
      )
      .max(13, 'شماره ی  وارد شده نامعتبر میباشد!'),
});

 export default function Buypage() {
  const [expectDate, setExpectDate] = useState()
  const products = JSON.parse(localStorage.getItem("Orders"));
  const total = JSON.parse(localStorage.getItem("TOTAL_PRICE"))
  var today =  Date.now();
  let x= moment(new Date(today),'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')
  console.log(x , "now");

  const change = (unix, formatted) => {
    console.log(unix); // returns timestamp of the selected value, for example.
    setExpectDate(formatted); // returns the selected value in the format you've entered, forexample, "تاریخ: 1396/02/24 ساعت: 18:30".
    console.log( formatted);
    console.log(+new Date(expectDate))
   
}
 const DatePickerInput = (props) => {
        return <input  {...props} />;
    }
// Date.parse(expectDate) 
console.log(Date.parse(expectDate) );
  const formik = useFormik({
    initialValues: {
      username: '',
      lastName: '',
      address:'',
      phoneNumber:""
    },
    validationSchema: validationSchema,
        onSubmit:(values)=>{  
          if(expectDate){
            values.expectAt = typeof expectDate === 'string' ? Date.parse(expectDate) : expectDate
            values.products = products
            values.price = total
            values.delivered = "false"
            localStorage.setItem("ORDER_INFO", JSON.stringify(values))
            window.location.replace('http://localhost:5500/')
          }
else{
  toast.warning("زمان مورد نظر خود را انتخاب کنید")
}

        }
      }
      
    )

  return (

    <Box sx={{px: 2, overflow: 'auto'}}>
                <Box sx={{marginTop: {xs: '50px', md: '0'}, textAlign: {xs: 'center', md: 'left'}}}>
                    <Typography color='#4040b3' variant='h4' sx={{px: {xs: 0, md: 5}}}>
                        نهایی کردن خرید
                    </Typography>
                </Box>
                <Box component='figure' sx={{
                    width: 'min(400px,100%)',
                    height: '200px',
                    display: 'flex',
                    mx: 'auto',
                    justifyContent: 'center',
                    "img": {width: '100%', height: '100%'},
                    marginTop: {xs: '50px', md: '0'}
                }}>

                    <img src={Buy} alt=""/>

                </Box>
                <Box component='form'
                dir="rtl"
                     onSubmit={formik.handleSubmit}
                     sx={{
                         width: 'min(900px,100%)',
                         display: 'flex',
                         mx: 'auto',
                         marginTop: '10px',
                         justifyContent: 'center',
                         flexDirection: 'column'
                     }}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} md={6}>
                            <label htmlFor="name-form">نام :</label>
                            <TextField value={formik.values.username}
                                       onChange={formik.handleChange}
                                       error={formik.touched.username && Boolean(formik.errors.username)}
                                       helperText={formik.touched.username && formik.errors.username}
                                       sx={{marginTop: '7px'}}
                                       id='name-form' autoFocus
                                       fullWidth name='username'
                                       label="نام"
                                       variant="outlined"/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <label htmlFor='lastname-form'>نام خانوادگی :</label>
                            <TextField sx={{marginTop: '7px'}} fullWidth id="lastName-form" name='lastName'
                                       label="نام خوانوادگی"
                                       variant="outlined"
                                       value={formik.values.lastName}
                                       onChange={formik.handleChange}
                                       error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                       helperText={formik.touched.lastName && formik.errors.lastName}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <label htmlFor="address-form">آدرس :</label>
                            <TextField sx={{marginTop: '7px'}} fullWidth id="address-form" name='address'
                                       label="آدرس"
                                       variant="outlined"
                                       value={formik.values.address}
                                       onChange={formik.handleChange}
                                       error={formik.touched.address && Boolean(formik.errors.address)}
                                       helperText={formik.touched.address && formik.errors.address}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <label htmlFor="phone-form">تلفن همراه :</label>
                            <TextField sx={{marginTop: '7px'}} fullWidth id="phone-form" type='phoneNumber'
                                       name='phoneNumber' label="تلفن همراه"
                                       variant="outlined"
                                       value={formik.values.phoneNumber}
                                       onChange={formik.handleChange}
                                       error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                                       helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <label htmlFor="expect-form">زمان تحویل :</label>
                            <DateRangePicker
                                inputComponent={DatePickerInput}
                                placeholderStart="تاریخ شروع"
                                placeholder={x}
                                onChange={change}
                                format="jYYYY/jMM/jDD"
                                // id="datePicker"
                                idStart="rangePickerStart"
                                
                                
                            />
                            
                       
              </Grid>

                    </Grid>
                    <Button type='submit' sx={{my: 4, color: 'background.paper'}} variant='contained'
                            color='success'>پرداخت</Button>
                           <ToastContainer/>
                </Box>
            </Box>
  );
};