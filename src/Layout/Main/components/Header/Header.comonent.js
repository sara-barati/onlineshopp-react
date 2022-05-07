import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "assets/image/logo.png";
import styles from "./Header.scss";



export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
          <Link to={"/login"} >
            <Button sx={{ color: 'white'}}  color="inherit" className="style.button" >مدیریت</Button>
            </Link>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, ml: 4 }}
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
            <Link to="" style={{direction:"none"}}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, color: "#f8f8f8", display: { md: "flex" } }}
              >
                فروشگاه نوا
              </Typography>
            </Link>
            <figure className={styles.logo_wrapper}>
              <Link to="">
                <img
                  className={styles.logo}
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
