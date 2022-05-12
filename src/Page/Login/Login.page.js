// import * as React from 'react';
// import axios from "axios"
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useState } from 'react';

// // function Copyright(props) {
// //   return (
// //     <Typography variant="body2" color="text.secondary" align="center" {...props}>
// //       {'Copyright © '}
// //       <Link color="inherit" href="https://mui.com/">
// //         Your Website
// //       </Link>{' '}
// //       {new Date().getFullYear()}
// //       {'.'}
// //     </Typography>
// //   );
// // }

// const theme = createTheme();

// export default function SignIn() {
//   const[Dataa,setdata]=useState({})


//   const handleSubmit = async(value) => {
//     value.preventDefault();

//     const res= await axios.post('http://localhost:3002/auth/login', value).catch((err)=>{
//       console.log("err");
//     })
//     if(res){
//      console.log("k");
//     }
    
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//            ورود
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//           <TextField
                             
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 id="username"
//                                 label="نام کاربری"
//                                 name="username"
                               
//                                 // helperText={!!userValid && 'لطفا نام کاربری خود را وارد کنید!'}
//                                 autoFocus
//                             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="رمز عبور"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//              ورود
//             </Button>
//             {/* <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid> */}
//           </Box>
//         </Box>
//         {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
//       </Container>
//     </ThemeProvider>
//   );
// }
import React, {useState} from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Typography , TextField} from '@mui/material';
import { values } from 'lodash';


export default function SignIn() {
  const[login,setlogin]=useState(false)
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: '',
      username: '',
     
    },
    validationSchema: Yup.object({
      password: Yup.string()
      .min(3, "پسورد باید بیشتر از سه کاراکتر باشد")
      .required("پسورد نمیتواند خالی باشد"),

      username: Yup.string()
      .required("نام کاربری نمیتواند خالی باشد"),
    
    }),

  //   nSubmit={ async (values, { setSubmitting }) => {
  //     await ...
  //     setSubmitting(false)
  // }}
    // onSubmit: async values =>{
    //   await axios.post('http://localhost:3002/auth/login', values).then(res => 
    //   // navigate("/dashboard"),
    //    console.log(res)
    //   )
      
    //   .catch(function (error) {
    //     console.log("error");
    //   })

     
    // },

    onSubmit:async(values)=>{ await axios.post('http://localhost:3002/auth/login', values).then(
      res=>{
        const{data,status}=res
        if(status===200){
          localStorage.setItem("token",data.token)
          localStorage.setItem("is-login",true)
          navigate("/dashboard/order",  { replace: true })
         
        }
      }
    )

    }



  });


  return (
    // <Box
    //         sx={{
    //           marginTop: 8,
    //            display: 'flex',
    //            flexDirection: 'column',
    //            alignItems: 'center',
    //           }}
    //         >
    <Container   component="main" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ورود
          </Typography>
          
    <form onSubmit={formik.handleSubmit}>
      <div className='pass'>

      <label htmlFor="password">پسورد</label>
      <input
      placeholder='پسورد'
        id="password"
        type="password"
        {...formik.getFieldProps('password')}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
      </div>
      




<div className='username'>

      <label htmlFor="lastName">نام کاربری</label>
      <input id="username" type="text" {...formik.getFieldProps('username')} />
      {formik.touched.username && formik.errors.username ? (
        <div>{formik.errors.username}</div>
      ) : null}
</div>



      <button type="submit">ورود</button>
    </form>
    </Box>
    </Container>
  );
};