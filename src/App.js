import React from "react";
import './App.css';
import './components/Buttons'
import Buttons from "./components/Buttons";
import DataToday from "./components/DataToday";
import DataWeather from "./components/DataWeather";


const API_KEY = "0554d9821a896924538be4a7c123c706";
const CNT = 5;
function DateUSF (props) {
    var d = props*1000;
    var date = new Date();
    date.setUTCMilliseconds(d);
    var new_date = date.toDateString();
}

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
    icon: []                  //иконка погоды на 5 дней
  }

  getWeatherData = async(e) =>{
      e.preventDefault();
      const city = e.target.elements.city.value;

      if (city){
          const urlDataWeather =
          await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${CNT}&appid=${API_KEY}&units=metric&lang=ru`);
          const dataWeather = await urlDataWeather.json();
          console.log(dataWeather);

          var d = dataWeather.city.timezone
          var date = new Date();
          date.setUTCMilliseconds(d);
          var new_date = date.toDateString();

            this.setState({
                city: dataWeather.city.name,
                country: dataWeather.city.country,
                feels_like: dataWeather.list[0].feels_like.day,
                pressure: dataWeather.list[0].pressure,
                humidity: dataWeather.list[0].humidity,
                speed: dataWeather.list[0].speed,
                deg: dataWeather.list[0].deg,
                date1: new_date,

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

                icon: [dataWeather.list[0].weather[0].icon,
                    dataWeather.list[1].weather[0].icon,
                    dataWeather.list[2].weather[0].icon,
                    dataWeather.list[3].weather[0].icon,
                    dataWeather.list[4].weather[0].icon
                ]
            })
    }

  }


  render() {
    return(
      <div>
        <Buttons weather={this.getWeatherData} />
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
       <DataWeather
           date={this.state.date}
           temp={this.state.temp}
           description={this.state.description}
           icon={this.state.icon}
        />
      </div>
    );
  }
}
//ссылка для получения данных о погоде city name- название города cnt-количество дней API key-ключ
//https://api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}&units=metric

//URL для получения значка погоды по weather.icon weather.main - группа погодных параметров
//http://openweathermap.org/img/wn/10d@2x.png
export default App;
