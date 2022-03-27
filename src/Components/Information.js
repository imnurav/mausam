import { Box, makeStyles, Typography } from "@material-ui/core";
import PinDropIcon from "@mui/icons-material/PinDrop";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import OpacityIcon from "@mui/icons-material/Opacity";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloudIcon from "@mui/icons-material/Cloud";
import moment from "moment";

const useStyles = makeStyles({
  component: {
    margin: "30px 95px",
  },
  container: {
    display: "flex",
  },
  row: {
    padding: 10,
    fontSize: 18,
    letterSpacing: 2,
  },
  value: {
    color: "#fff",
  },
  icon: {
    color: "darkred",
    marginRight: 15,
  },
  error: {
    background: "red",
    color: "#fff",
    margin: 50,
    padding: 20,
  },
  ErrorMessage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid green",
    height: "85%",
  },
});

const Information = ({ data, city, country }) => {
  const classes = useStyles();

  const getCloudsData = (value) => {
    if (value === 0) {
      return "Clear";
    } else if (value > 1 && value < 100) {
      return "Partially Cloudy";
    } else {
      return "Cloudy";
    }
  };

  return data && city && country ? (
    <Box className={classes.component}>
      <Typography className={classes.row}>
        <span>{moment().format("LLLL")}</span>
      </Typography>
      <Typography className={classes.row}>
        <PinDropIcon className={classes.icon} />
        Location:
        <Box className={classes.value} component="span">
          {data.name}, {data.sys.country}{" "}
        </Box>
      </Typography>
      <Typography className={classes.row}>
        <Brightness5Icon className={classes.icon} />
        Temperature:
        <Box className={classes.value} component="span">
          {data.main.temp}°C
        </Box>
      </Typography>
      <Typography className={classes.row}>
        <OpacityIcon className={classes.icon} />
        Humidity:
        <Box className={classes.value} component="span">
          {data.main.humidity}%
        </Box>
      </Typography>
      <Typography className={classes.row}>
        <BrightnessHighIcon className={classes.icon} />
        Sun Rise:<i class="fa-solid fa-alicorn"></i>
        <Box className={classes.value} component="span">
          {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
        </Box>
      </Typography>
      <Typography className={classes.row}>
        <BrightnessLowIcon className={classes.icon} />
        Sun Set:{" "}
        <Box className={classes.value} component="span">
          {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
        </Box>
      </Typography>
      <Typography className={classes.row}>
        <DehazeIcon className={classes.icon} />
        Condition:{" "}
        <Box className={classes.value} component="span">
          {data.weather[0].main}{" "}
        </Box>
      </Typography>
      <Typography className={classes.row}>
        <CloudIcon className={classes.icon} />
        Clouds:
        <Box className={classes.value} component="span">
          {getCloudsData(data.clouds.all)}{" "}
        </Box>
      </Typography>
    </Box>
  ) : !(city && country) ? (
    <Typography className={classes.error}>
      {/* <ErrorIcon /> */}
      Enter Valid City and Country Name :-)
    </Typography>
  ) : (
    " "
  );
};

export default Information;
