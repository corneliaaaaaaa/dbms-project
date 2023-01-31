import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { makeStyles } from "@mui/styles";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import HealingIcon from "@mui/icons-material/Healing";

const useStyles = makeStyles((theme) => ({
  page: {
    paddingRight: "40px",
    cursor: "pointer",
  },
  header: {
    color: theme.palette.custom.main,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerElement: {
    display: "flex",
    flexDirection: "row",
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    setItemList([
      {
        text: "Consultation",
        path: "/consultation",
      },
      {
        text: "Articles",
        path: "/articles",
      },
      {
        text: "Erica's Reservation",
        path: "/my-reservation",
      },
    ]);
  }, []);
  return (
    <AppBar position="static" style={{ backgroundColor: "#99A799" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className={classes.header}>
          <div className={classes.headerElement}>
            <HealingIcon sx={{ marginRight: "15px" }} />
            <Typography variant="h6" sx={{ transform: "translateY(1px)" }}>
              營了健康，營了人生
            </Typography>
          </div>
          <div className={classes.headerElement}>
            {itemList.map((item, index) => (
              <Typography
                variant="h6"
                className={classes.page}
                onClick={() => {
                  history.push(item.path);
                  window.location.reload();
                }}
                key={item.text}
              >
                {item.text}
              </Typography>
            ))}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
