import React, {useState} from "react";
import './App.css';
import './components/Buttons'
import Buttons from "./components/Buttons";
import DataToday from "./components/DataToday";
import DataWeather from "./components/DataWeather";


const API_KEY = "0554d9821a896924538be4a7c123c706";
const CNT = 5;


class App extends React.Component{
  //состояние
  state = {
      city: undefined,          //город
      country: undefined,       //страна
      feels_like: undefined,    //по ощущению на сегодняшний день
      pressure: undefined,      //атмосферное давление на сегодняшний день
      humidity: undefined,      //влажность воздуха на сегодняшний день
      speed: undefined,         //скорость ветра
      deg: undefined,           //направление ветра
      date1: undefined,
      date: [],                 //даты за 5 дней
      temp: [],                 //температура на 5 дней
      description: [],          //описание погоды на 5  дней
      icon: [],                  //иконка погоды на 5 дней
      error: undefined

  }
    timezone;

  //Функция получения данных для города
  getWeatherData = async(e) =>{
      e.preventDefault();
      const city = e.target.elements.city.value;  //получение названия города, которое ввел пользователь

      if (city){
          const urlDataWeather =
          await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${CNT}&appid=${API_KEY}&units=metric&lang=ru`);
          const dataWeather = await urlDataWeather.json();
          console.log(dataWeather);

          const d = dataWeather.list[0].dt*1000;
          const date = new Date(d);
          const new_date = date.toDateString();

          this.setState({
              city: dataWeather.city.name,
              country: dataWeather.city.country,
              feels_like: dataWeather.list[0].feels_like.day,
              pressure: dataWeather.list[0].pressure,
              humidity: dataWeather.list[0].humidity,
              speed: dataWeather.list[0].speed,
              deg: dataWeather.list[0].deg,
              date1: new_date,
              error: undefined,

              date: [dataWeather.list[0].dt,
                  dataWeather.list[1].dt,
                  dataWeather.list[2].dt,
                  dataWeather.list[3].dt,
                  dataWeather.list[4].dt
              ],

              temp: [dataWeather.list[0].temp.day,
                  dataWeather.list[1].temp.day,
                  dataWeather.list[2].temp.day,
                  dataWeather.list[3].temp.day,
                  dataWeather.list[4].temp.day
              ],

              description: [dataWeather.list[0].weather[0].description,
                  dataWeather.list[1].weather[0].description,
                  dataWeather.list[2].weather[0].description,
                  dataWeather.list[3].weather[0].description,
                  dataWeather.list[4].weather[0].description
              ],

              icon: [
                  "http://openweathermap.org/img/w/" + dataWeather.list[0].weather[0].icon + ".png",
                  "http://openweathermap.org/img/w/" + dataWeather.list[1].weather[0].icon + ".png",
                  "http://openweathermap.org/img/w/" + dataWeather.list[2].weather[0].icon + ".png",
                  "http://openweathermap.org/img/w/" + dataWeather.list[3].weather[0].icon + ".png",
                  "http://openweathermap.org/img/w/" + dataWeather.list[4].weather[0].icon + ".png",
              ]
          });
    }else {
          this.setState({
              city: undefined,
              country: undefined,
              feels_like: undefined,
              pressure: undefined,
              humidity: undefined,
              speed: undefined,
              deg: undefined,
              date1: undefined,
              date: [],
              temp: [],
              description: [],
              icon: [],
              error: "Введите название города"
          });
    }

  }
  render() {
    return(
      <div className="wrapper">
          <div className="main">
              <div className="container">
                  <div className="row">
                      <div className="col-sm-5 info">
                          <Buttons weather={this.getWeatherData}
                                   error={this.state.error}
                          />
                      </div>
                      {this.state.city&&
                          <div  className="height">

                              <DataWeather
                                  date={this.state.date}
                                  temp={this.state.temp}
                                  description={this.state.description}
                                  icon={this.state.icon}
                              />
                          </div>
                      }
                      <DataToday
                          city={this.state.city}
                          country={this.state.country}
                          feels_like={this.state.feels_like}
                          pressure={this.state.pressure}
                          humidity={this.state.humidity}
                          temp={this.state.temp[0]}
                          date={this.state.date1}
                          speed={this.state.speed}
                          deg={this.state.deg}
                      />
                  </div>
              </div>
          </div>
      </div>
    );
  }
}
export default App;
