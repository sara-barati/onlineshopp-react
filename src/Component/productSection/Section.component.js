import React from 'react';
import {Box, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";

import { ProductCard } from '../ProductCard/ProductCard.component';
import CategoryIcon from '@mui/icons-material/Category';
import {Link} from "react-router-dom";
// import styles from './Section.module.scss'
;

function Section({title, data, limitness, id}) {
    // console.log(data.length)
    let newData = !limitness ? data.slice(Math.max(data.length - 6, 0)) : data

    let cards = newData.map(product => {
        return (
            <Grid sx={{mb: 1}} key={product.id} justifyContent="center" item xs={12} sm={6} lg={4}>
                <ProductCard data={product}/>
            </Grid>
        )
    })
    return (
        data.length > 0 &&
        <Box sx={{mb: 3}}>
            <Typography variant='h4' sx={{
                backgroundColor: '',
                borderBottom: '2px solid #424242',
                mt: 3,
                mb: 2,
                py: 2,
                px: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform .3s ease'
            }}>
                <span >
                    <CategoryIcon sx={{m: 1, color: '#33691e'}}/>
                    <Link to={`/Category/${id}`} style={{textDecoration:"none", color:"#424242"}}>{title}</Link>
                    <CategoryIcon sx={{m: 1, color: '#33691e'}}/>
                </span>

            </Typography>
            <Grid container spacing={2} sx={{textAlign: {xs: "center"}}}>
                {cards}
            </Grid>

        </Box>
    );
}

export {Section};