import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import Cloud from "../image/cloud.jpg";
import Form from "./Form";
const useStyles = makeStyles({
  component: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    width: "65%",
    margin: "auto",
    // masr,
  },
  leftContainer: {
    backgroundImage: `url(${Cloud})`,
    height: "90%",
    width: "30%",
    borderRadius: "20px 0 0 20px",
    backgroundSize: "cover",
  },
  rightContainer: {
    background: "linear-gradient(to right,#e74c3c,#e67e22)",
    height: "90%",
    width: "70%",
  },
});
const Weather = () => {
  const classes = useStyles();
  return (
    <Box className={classes.component}>
      <Box className={classes.leftContainer}></Box>
      <Box className={classes.rightContainer}>
        <Form />
      </Box>
    </Box>
  );
};

export default Weather;
