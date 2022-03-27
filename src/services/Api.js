import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "49c52c385165361328d4aafbff37e087";
export const getWeather = async (city, country) => {
  const data = await axios.get(
    `${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`
  );
  return data;
};
