

import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import { useFetch } from 'hook/useFetch';
import './login.css'
import * as yup from 'yup';
// import Button from '@material-ui/core/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin } from 'Redux/reducer/login.Slice';
import pic from 'assets/image/login.webp'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const validationSchema = yup.object({
  username: yup
    .string('لطفا نام کاربری خود را وارد کنید')
    .required('پر کردن این فیلد اجباری است')
    .min(3, 'نام کاربری شما باید طولانی تر باشد'),
  password: yup
    .string('لطفا رمز ورود خود را وارد کنید')
    .min(3, 'رمز ورود شما باید طولانی تر باشد')
    .required('پر کردن این فیلد اجباری است'),
});

 export default function Login() {
  const dispatch = useDispatch()
   const navigate=useNavigate()
  // const { data, error } = useFetch(`http://localhost:3002/auth/login`);
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
        onSubmit:async(values)=>{ await axios.post('http://localhost:3002/auth/login', values).then(
      (res)=>{

        toast.success("Success message",{
          position:"top-center",
        
        });
        const{data,status}=res
        if(status===200){
          dispatch(setLogin(true))
          localStorage.setItem("token",data.token)
          localStorage.setItem("is-login",true)
          navigate("/dashboard/order",  { replace: true })
         
        }
      }
      
    )
    .catch((err)=>toast.error("نام کاربری یا رمز ورود صحیح نمیباشد", {
      position:"top-center",
      autoClose: 5000
  })
    )
  

    }
  
  });

  return (

    <div className='container'  >
  <Box sx={{width:"35vw", height:"90vh",ml:"10", alignItems:"start"}}> <img className="img-fluid" 
     src={pic } 
     alt="logo"/></Box>
      <form onSubmit={formik.handleSubmit}  className="form">
     <Typography variant="h4" component="h4" sx={{mb:"10%", color:"#388e3c",textAlign:"left"}}>
 ورود به پنل مدیریت
</Typography>
        <TextField
        sx={{width:"50%", height:"10vh", mb:"3%"}}
        className='input'
          id="username"
          name="username"
          label="نام کاربری"
          type={"text"}
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        
        />
        <TextField
          sx={{width:"50%", height:"10vh",  mt:"3%"}}
          id="password"
          name="password"
          label="روز ورود"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button  variant="contained" type="submit" sx={{bgcolor:"#388e3c" ,':hover': {
      bgcolor: '#69f0ae'}, width:"50%", mt:"4%"}}>
          ورود
        </Button>
        <ToastContainer />
     
    
      </form>
    </div>
  );
};