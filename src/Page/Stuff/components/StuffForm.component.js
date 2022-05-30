import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {Button, TextField, Typography} from "@mui/material";
import CreatableSelect from 'react-select/creatable';
import Box from "@mui/material/Box";
import CloseIcon from '@mui/icons-material/Close';
import Select from 'react-select';
import FileUploader from './fileUploader.component';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import formimg from 'hook/formData';
import postform from 'hook/postform'
import putData from 'hook/putdata'
import { ToastContainer, toast } from 'react-toastify';
import * as yup from 'yup';
// import * as yup from 'yup';

// import {toast} from "react-toastify";
// import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';


export default function StuffFormcomponent({categories, types, editId, info, onClose}) {
  const[setCategorys,categorys]=useState([])
  const [update, setUpdate] = useState(false)
  // const [open, setOpen] = React.useState(false);
  //  const [EditId, setEditId] = React.useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const [type, setType] = useState(null)
  const [img, setImg] = useState([]);
  useEffect(() => {
    if (types === 'edit') {
        setType({
            label: categories?.find(category => category.id === +info.category).name,
            value: categories?.find(category => category.id === +info.category).id
        })

        setImg([info.image])
    }
}, [editId])



const [editorText, setEditorText] = useState(null)
const[select,setSElect]=useState("")

const imageList =
 img?.length > 0 &&
 img?.map(imgt => {

  return {
      value: imgt,
      label: <img style={{width: '70px', height: '70px'}} src={`http://localhost:3002/files/${imgt}`}/>
  }
})


const handleChangeType = (inp, value) => {setType(value)}

// const handleChangeType = (inp, value) => {
//     console.log('Value Changed');
//     switch (inp) {
//         case 'category': {

//             setType(value)

//             break
//         }
//         default:
//             break
//     }
// };
  const options= categories?.map(category => {
    return {
        value: category.id,
        label: category.name
    }
})


const submitUploadForm = async (e) => {
 e.preventDefault()
 const formData = new FormData();
 formData.append("image", e.target.image.files[0]);
 // console.dir(e.currentTarget[0].value)
 if (e.currentTarget[0].value !== '') {
     e.currentTarget.reset();

     toast.success('عکس با موفقیت آپلود شد.')
    const res= formimg(formData);
     // const res = await dispatch(upload(formData))
console.log(res);
     setImg((prevImg) => [...prevImg, res.data])
 } else {
     toast.error('حداقل یک عکس آپلود کنید')
 }

};


const handleSubmitAll = (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const data = Object.fromEntries(form);

  data.image = img;
  data.thumbnail = img[0];
  data.category = type.value;
  data.description = editorText
  console.log(data)
  let schema = yup.object().shape({
      name: yup.string().required(),
      price: yup.string().required(),
      quantity: yup.string().required(),
      category: yup.string().required(),
      image: yup.array().min(1).required(),
      thumbnail: yup.string().required(),
      description: yup.string().required()
  })
  // const currentParams = Object.fromEntries([...searchParams]);
  schema.isValid(data)
      .then((valid) => {
          if ("valid") {
              if (types === 'add') {
                  event.target.reset()
                  setType(null)
                  setEditorText('')
                  setImg([])
                  toast.success('محصول با موفقیت افزوده شد.')
                  
                //  const post= postform(data)
                //  console.log(post);
  
  
  
             const url="http://localhost:3002/products";
          
                    axios({
                      url: url,
                      method: "post",
                      data:data,
                      headers: {
                        "Content-Type": "multipart/form-data"
                      },
                
                    })
                      .then(function (response) {
                     
                        console.log(response.data);
                        
                      })
                      .catch(function (error) {
                        console.log("error");
                      });
                     
                //   useEffect(() => {
                //     postData(url);
                //   }, [url]);
  

   



                  setUpdate(!update)
              } else if (types === 'edit') {
                  toast.success('محصول با موفقیت ویرایش شد.')



                  const urlput=`http://localhost:3002/products/${editId}`;
          
                  axios({
                    url: urlput,
                    method: "put",
                    data:data,
                    id:editId,
                    headers: {
                      "Content-Type": "multipart/form-data"
                    },
              
                  })
                    .then(function (response) {
                   
                      console.log(response.data);
                      
                    })
                    .catch(function (error) {
                      console.log("error");
                    });
                
              
                //   const put=putData(editId,data)
                
                //   setUpdate(!update)
                //   onClose()
              }

          } else {
              toast.error('تمام فیلد ها را پر نمایید.')
          }
      })

}

<ToastContainer />
//  const handleChangeType=((e)=>{
//   setSElect(e.target.value)
//  }
//  )


const handleDeleteImage = (index) => {

  const deletedImg = img.splice(index, 1)

  setImg(prevState => prevState.filter(item => {
      return item !== deletedImg
  }))

  toast.success("عکس مورد نظر با موفقیت حذف شد")

}





  return (
    <>
    {types==='add'?
        <Box sx={{display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'start'}}>

            <Box sx={{display: "flex", justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                <Typography align='right'>
                    افزودن/ویرایش کالا
                </Typography>
                <CloseIcon cursor="pointer" onClick={onClose}/>
            </Box>

            <Typography sx={{mt: 1}} align="right">
                تصویر کالا :
            </Typography>

            <FileUploader
            
                        onFileSelectSuccess={(file) => setSelectedFile(file)}
                        onFileSelectError={({error}) => alert(error)}
                        handleSubmit={submitUploadForm}
                        
                    />

            <Box
                component="form"
                sx={{
                    width: '100%',
                    '& .MuiTextField-root': {my: 1},
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmitAll}
                
            >

                {
                    imageList.length > 0 &&
                    <>
                        <Box sx={{overflowX: 'scroll', "figure": {display: 'inline-block'}}}>
                            {img.map((item, index) => {
                                return (
                                    < Typography component='figure'
                                                 sx={{
                                                     width: '80px',
                                                     height: '80px',
                                                     "img": {height: '100%', width: '100%'},
                                                     mr: 2,
                                                     position: 'relative'
                                                 }}>

                                        <CancelPresentationIcon cursor='pointer'
                                                                onClick={() => handleDeleteImage(index)}
                                                                sx={{
                                                                    position: 'absolute',
                                                                    "color": 'error.main'
                                                                }}/>
                                        < img src={`http://localhost:3002/files/${item}`} alt=""/>

                                    </Typography>

                                )
                            })}
                        </Box>
                    </>
                }

                <Typography sx={{mt: 2}}>
                    نام کالا :
                </Typography>
                <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="نام کالا"
                    defaultValue=""
                    name="name"
                />

                <Typography sx={{my: 1}}>
                    قیمت کالا :
                </Typography>

                <input type='number' name='price' placeholder='قیمت کالا را وارد نمایید..' style={{
                    width: '100%',
                    height: '55px',
                    border: '1px solid #ccc',
                    padding: '0 8px',
                    fontSize: '1.2rem',
                    borderRadius: '4px'
                }}/>

                <Typography sx={{my: 1}}>
                    موجودی کالا :
                </Typography>

                <input type='number' name='count' placeholder='موجودی کالا را وارد نمایید...' style={{
                    width: '100%',
                    height: '55px',
                    border: '1px solid #ccc',
                    padding: '0 8px',
                    fontSize: '1.2rem',
                    borderRadius: '4px'
                }}/>

                <Typography sx={{my: 1}}>
                    دسته کالا :
                </Typography>

                {/* <CreatableSelect
                    name='category'
                    menuPortalTarget={document.body}
                    menuPosition="fixed"
                    styles={{
                        menuPortal: (provided) => ({...provided, zIndex: 9999}),
                        menu: (provided) => ({...provided, zIndex: 9999})
                    }}
                    isClearable
                    // onChange={(value) => handleChangeType('category', value)}
                    onChange={handleChangeType}
                    // onCreateOption={(value) => handleCreateType('category', value)}
                    options={options}
                    // value={type}
                    value={select}
                    placeholder='دسته ی مورد نظر را انتخاب یا ایجاد کنید...'
                /> */}

<Select options={options} 
 onChange={(value) => handleChangeType('category', value)}
 placeholder='دسته ی مورد نظر را انتخاب  کنید...'
 />

                {/*create ck-editor*/}
                <Typography sx={{my: 2}}>
                    توضیحات کالا :
                </Typography>
                <CKEditor
                    data={editorText}
                    name='description'
                    editor={ClassicEditor}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setEditorText(data)
                    }}

                />

<Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                            <Button type='submit' size='large' color='info'  variant='contained'>ذخیره</Button>
                        </Box>
                       <ToastContainer/>
            </Box>

        
         </Box> :

         // jsx for edit modal
         <Box sx={{
             display: 'flex',
             flexDirection: "column",
             justifyContent: 'center',
             alignItems: 'start'
         }}>

             <Box sx={{display: "flex", justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                 <Typography>
                     افزودن/ویرایش کالا
                 </Typography>
                 <CloseIcon cursor="pointer" onClick={onClose}/>
             </Box>

             <Typography sx={{mt: 1}}>
                 تصویر کالا :
             </Typography>

             <FileUploader
                 onFileSelectSuccess={(file) => setSelectedFile(file)}
                 onFileSelectError={({error}) => alert(error)}
                 handleSubmit={submitUploadForm}
             />


             <Box
                 component="form"
                 sx={{
                     width: '100%',
                     '& .MuiTextField-root': {my: 1},
                 }}
                 noValidate
                 autoComplete="off"
                 onSubmit={handleSubmitAll}
             >

                 {
                     imageList.length > 0 &&

                     //show image and delete it
                     <>
                         <Box sx={{overflowX: 'scroll', "figure": {display: 'inline-block'}}}>
                             {img.map((item, index) => {
                                 return (
                                     < Typography component='figure'
                                                  sx={{
                                                      width: '80px',
                                                      height: '80px',
                                                      "img": {height: '100%', width: '100%'},
                                                      mr: 2,
                                                      position: 'relative'
                                                  }}>

                                         <CancelPresentationIcon cursor='pointer'
                                                                 onClick={() => handleDeleteImage(index)}
                                                                 sx={{
                                                                     position: 'absolute',
                                                                     "color": 'error.main'
                                                                 }}/>
                                         < img src={`http://localhost:3002/files/${item}`} alt=""/>

                                     </Typography>

                                 )
                             })}
                         </Box>
                     </>
                 }

                 <Typography sx={{mt: 2}}>
                     نام کالا :
                 </Typography>
                 <TextField
                     name='name'
                     fullWidth
                     required
                     id="outlined-required"
                     label="نام کالا"
                     defaultValue={info.name}

                 />

                 <Typography sx={{my: 1}}>
                     قیمت کالا :
                 </Typography>

                 <input type='number' defaultValue={info.price} name='price'
                        placeholder='قیمت کالا را وارد نمایید..' style={{
                     width: '100%',
                     height: '55px',
                     border: '1px solid #ccc',
                     padding: '0 8px',
                     fontSize: '1.2rem',
                     borderRadius: '4px'
                 }}/>

                 <Typography sx={{my: 1}}>
                     موجودی کالا :
                 </Typography>

                 <input type='number' defaultValue={info.quantity} name='quantity'
                        placeholder='موجودی کالا را وارد نمایید...' style={{
                     width: '100%',
                     height: '55px',
                     border: '1px solid #ccc',
                     padding: '0 8px',
                     fontSize: '1.2rem',
                     borderRadius: '4px'
                 }}/>

                 <Typography sx={{my: 1}}>
                     دسته کالا :
                 </Typography>
                 <Select options={options} 
                 value= {type}
                  onChange={(value) => handleChangeType('category', value)}
 placeholder='دسته ی مورد نظر را انتخاب کنید...'
 />
                 {/* <CreatableSelect
                     name='category'
                     menuPortalTarget={document.body}
                     menuPosition="fixed"
                     styles={{
                         menuPortal: (provided) => ({...provided, zIndex: 9999}),
                         menu: (provided) => ({...provided, zIndex: 9999})
                     }}
                     isClearable
                     onChange={(value) => handleChangeType('category', value)}
                     onCreateOption={(value) => handleCreateType('category', value)}
                     options={options}
                     value={type}
                     placeholder='دسته ی مورد نظر را انتخاب یا ایجاد کنید...'
                 /> */}

                 {/*create ck-editor*/}
                 <Typography sx={{my: 2}}>
                     توضیحات کالا :
                 </Typography>
                 <CKEditor
                    onReady={(editor => {
                        editor.setData(info.description)
                    })}
                    data={editorText}
                    name='description'
                    editor={ClassicEditor}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setEditorText(data)
                    }}

                />
                 {/* <CKEditor
                     onReady={(editor => {
                         editor.setData(info.description)
                     })}
                     data={editorText}
                     name='description'
                     editor={ClassicEditor}
                     onChange={(event, editor) => {
                         const data = editor.getData();
                         setEditorText(data)
                         // console.log( { event, editor, data } );
                     }}


                 /> */}

                 <Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                     <Button type='submit' size='large' color='info'
                             variant='contained'>ذخیره</Button>
                 </Box>
                 <ToastContainer />

             </Box>

         </Box>
        }
        </>
  );
}
