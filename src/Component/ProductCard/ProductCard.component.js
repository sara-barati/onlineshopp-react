
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NumberFormat from 'react-number-format';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import {Link} from "react-router-dom";



function ProductCard({data}) {


    return (
        <Link to={`/product/${data.id}`} style={{textDecoration:"none"}}>
            <Card sx={{
                maxWidth: 330,
                height: '380px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform .3s linear',
                background: 'white',
                boxShadow:" 0.5px 1px #888888",
                margin: 'auto',
                '&:hover': {transform: 'translateY(7px)'}
            }}>

                <CardMedia
                    sx={{boxSizing: 'border-box', width: '100%', height:'55%', objectFit: 'contain ', color:"white", alignContent:"center"}}
                    component="img"

                    image={`http://localhost:3002/files/${data.thumbnail}`}
                    alt="green iguana"

                />

                <CardContent
                    sx={{display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'space-between', bgcolor:"#dcedc8"}}>
                    <Typography gutterBottom variant="h6" sx={{color: '#2c2c2c'}} component="div">
                        {data.name}
                    </Typography>
                    <Typography sx={{
                        textAlign: 'right',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                                variant="body1" color="#2c2c2c">
                    <span style={{display: 'flex', alignItems: 'center', textAlign: 'right'}}>
                        <LocalShippingIcon sx={{marginRight: 1}}/>
                        <span>ارسال سریع</span>

                    </span>

                        <span>
                         <span style={{marginRight: '5px'}}>
                        تومان
                         </span>
                        <NumberFormat className='fa-num' value={data.price || +data.price} displayType={'text'}
                                      thousandSeparator={true}
                                      prefix={''}/>
                    </span>
    

                    </Typography>
                </CardContent>

            </Card>
         </Link>
    );
}

export {ProductCard}
