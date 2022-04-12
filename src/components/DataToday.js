import React from "react";

class DataToday extends React.Component {
    render(){
        return(
            <div>
            {this.props.city&&
                    <div>
                        <p>Местоположение: {this.props.city}, {this.props.country}</p>
                        <p>Дата: {this.props.date}</p>
                        <p>Температура: {this.props.temp}</p>
                        <p>По ощущению: {this.props.feels_like}</p>
                        <p>Давление: {this.props.pressure} мм рт.ст.</p>
                        <p>Влажность: {this.props.humidity}%</p>
                        <p>Ветер: {this.props.speed} м/с, {this.props.deg}</p>
                    </div>
            }
            </div>
        );
    }
}

export default DataToday;