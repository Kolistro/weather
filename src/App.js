import React from "react";
import './App.css';
import './components/Buttons'
import Buttons from "./components/Buttons";

const API_KEY = "0554d9821a896924538be4a7c123c706";
const CNT = 5;

class App extends React.Component{
  //состояние
  state = {
    city: undefined,          //город
    country: undefined,       //страна
    date: undefined,          //дата на день просмотра
    temp: undefined,          //температура
    feels_like: undefined,    //по ощущению
    speed: undefined,         //скорость ветра
    deg: undefined,           //направление ветра
    pressure: undefined,      //атмосферное давление
    humidity: undefined,      //влажность воздуха
    description: undefined,   //описание погоды
    icon: undefined,          //код погоды
    days: []
  }

  getWeatherData = async(e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const urlDataWeather =
    await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${CNT}&appid=${API_KEY}&units=metric`);
    const dataWeather = await urlDataWeather.json();
    console.log(dataWeather);
  }

  render() {
    return(
      <div>
        <Buttons weather={this.getWeatherData} />
      </div>
    );
  }
}
//ссылка для получения данных о погоде city name- название города cnt-количество дней API key-ключ
//https://api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}&units=metric

//URL для получения значка погоды по weather.icon weather.main - группа погодных параметров
//http://openweathermap.org/img/wn/10d@2x.png
export default App;
