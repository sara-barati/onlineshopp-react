import React from "react";
import { AppBar, Container, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
// import {PATH} from "configs/routes.config";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Tab from "@mui/material/Tab";
// import styles from './Header.module.scss'

export default function Headercomponent() {
  const [active, setActive] = React.useState(3);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // console.log(document.location.pathname)

  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }

  function handleActive(num) {
    setActive(num);
  }

  return (
    <header>
      <Box sx={{ minHeight: "100px" }}>
        <AppBar sx={{ height: "100%", bgcolor:"#c5e1a5" }} position="static">
          <Container
            maxWidth="xl"
            sx={(theme) => {
              return {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "100%",
                [theme.breakpoints.down("md")]: {
                  flexDirection: "column",
                },
              };
            }}
          >
            <Box
              sx={{
                flexGrow: 2,
                display: { xs: "flex", alignItems: "center" },
              }}
            >
              <Typography
                variant="h4"
                noWrap
                component="h4"
                sx={{ mr: 2, display: { xs: "none", md: "flex",  color: "#558b2f" } }}
              >
                پنل مدیریت فروشگاه
              </Typography>
            </Box>

            <Box
              sx={(theme) => {
                return {
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  backgroundColor: "#dcedc8",
                  textAlign: "center",
                  height: "50px",
                  borderRadius: "8px",
                  padding: "10px",
                  a: {
                    margin: "0 5px",
                  },
                  [theme.breakpoints.down("md")]: {
                    marginTop: "20px",
                  },
                };
              }}
            >
              <Link style={{ textDecoration: "none" }}   onClick={() => handleActive(1)} to={"/dashboard/stuff"}>
                کالاها{" "}
              </Link>
              <Link style={{ textDecoration: "none" }} onClick={() => handleActive(2)} to={"/dashboard/entities"}>
                {" "}
                موجودی و قیمت ها
              </Link>
              <Link style={{ textDecoration: "none" }} onClick={() => handleActive(3)} to={"/dashboard/order"}>
                {" "}
                سفارش ها
              </Link>
            </Box>

            <Box
              sx={{
                flexGrow: 2,
                display: { xs: "flex", alignItems: "center" },
                flexDirection: "row-reverse",
              }}
            >
              <Link to={"/"}>
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "flex",
                    fontSize: "1.2rem",
                    marginRight: "15px",
                   bgcolor: "#558b2f"
                  }}
                >
                  <ArrowForwardIcon sx={{ marginLeft: "8px" }} />
                  بازگشت به سایت
                </Button>
                <Button
                 sx={{
                    my: 2,
                    color: "white",
                    display: "flex",
                    fontSize: "1.2rem",
                    marginRight: "15px",
                    bgcolor: "#558b2f"
                  }}
                  onClick={() => {
                    localStorage.clear();
                  }}
                >
               خروج
                </Button>
              </Link>
            </Box>
          </Container>
        </AppBar>
      </Box>
    </header>
  );
}
