import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Navigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import logo from "assets/image/logo.png";
import './Header.component.css'

import { useSelector } from "react-redux";

export default function Header() {
  // const islogin=useSelector(state=>state.user)
  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: "primary.main", width: "100vw" }}
      className="add-header"
    >
      <AppBar position="static" sx={{ flexGrow: 1, bgcolor: "#c5e1a5",width:"100vw",mr:"0",}}>
        <Toolbar sx={{width:"100vw", mr:"0"}}>
          <Box
            sx={{
              flexGrow: 1,
              display: { lm: "flex", flexDirection: "column" },
              // flexDirection: {
              //   xs: 'col'
              //   }
            }}
          >
            <Link to={"/dashboard/entities"} style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  color: "white",
                  bgcolor: "#558b2f",
                  textDecoration: "none",
                  width: "80px",
                  height: "30px",
                }}
                color="inherit"
                className="style.button"
              >
                {" "}
                <ManageAccountsIcon sx={{ marginLeft: "8px", pt: "2px" }} />
                مدیریت
              </Button>
            </Link>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                ml: 5,
                bgcolor: "#558b2f",
                borderRadius: "5px",
                width: "90px",
                height: "30px",
              }}
            >
              <ShoppingCartIcon />
              <Typography component="div" sx={{ flexGrow: 1 }}>
                سبد خرید
              </Typography>
            </IconButton>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                alignItems: "center",
                justifyContent: "end",
              },
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { md: "flex" }, color: "#558b2f" }}
              >
                فروشگاه نوا
              </Typography>
            </Link>
            <figure>
              <Link to="/">
                <img
                  style={{ with: "80px", height: "50px" }}
                  src={logo}
                  alt=""
                />
              </Link>
            </figure>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
