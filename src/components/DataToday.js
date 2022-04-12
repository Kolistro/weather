import React from "react";
/*
city={this.state.city}
            country={this.state.country}
            feels_like={this.state.feels_like}
            pressure={this.state.pressure}
            humidity={this.state.humidity}
            temp={this.state.temp[0]}
            date={this.state.date[0]}
            speed={this.state.speed}
            deg={this.state.deg}
 */
class DataToday extends React.Component {
    render(){
        return(
            <div>
                <p>Местоположение: {this.props.city}, {this.props.country}</p>
                <p>Дата: {this.props.date}</p>
                <p>Температура: {this.props.temp}</p>
                <p>По ощущению: {this.props.feels_like}</p>
                <p>Давление: {this.props.pressure} мм рт.ст.</p>
                <p>Влажность: {this.props.humidity}%</p>
                <p>Ветер: {this.props.speed} м/с, {this.props.deg}</p>
            </div>
        );
    }
}

export default DataToday;