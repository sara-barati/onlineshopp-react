import React, {useRef} from 'react'
import Button from "@mui/material/Button";
import {Input} from "@mui/icons-material";
import Box from "@mui/material/Box";
<<<<<<< HEAD
import { ToastContainer, toast } from 'react-toastify';
=======
>>>>>>> 137695280390d05243d8edf23ebcc0b6369e20f1

export default function FileUploader  ({onFileSelectSuccess, onFileSelectError, handleSubmit}){
    const fileInput = useRef(null)

    const handleFileInput = (e) => {
        console.log(e.target.files[0])
        const file = e.target.files[0];
        if (file.size > 1024 * 1024) {

            onFileSelectError({error: "File size cannot exceed more than 2MB"});
            fileInput.current.value = null

        } else {
            onFileSelectSuccess(file)
        }
        ;

    };
    // console.log(handleSubmit)
    return (

        <Box onSubmit={handleSubmit} component="form"
             sx={{width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', my: 2,"input":{border:"1px solid gray",py:1,px:2}}}>
            <input ref={fileInput} name='image' type="file" onChange={handleFileInput} style={{width: "400px",borderRadius:"4px"}}/>
            <label>

            </label>
            <Button type='submit' color='info' variant="contained">
                Upload
            </Button>
<<<<<<< HEAD
            <ToastContainer />
=======

>>>>>>> 137695280390d05243d8edf23ebcc0b6369e20f1
        </Box>

    )
}

// export {FileUploader};