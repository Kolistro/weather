import React from "react";

class DataToday extends React.Component {
    render(){
        return(
            <div>
            {this.props.city&&
                    <div className="data-today-table">
                        <table>
                            <tbody>
                                <tr >
                                    <td className="pad">Местоположение: </td>
                                    <td className="re">{this.props.city}, {this.props.country}</td>
                                </tr>
                                <tr>
                                    <td className="pad">Дата: </td>
                                    <td className="re">{this.props.date}</td>
                                </tr>
                                <tr>
                                    <td className="pad">Температура: </td>
                                    <td className="re he">{this.props.temp}</td>
                                </tr>
                                <tr>
                                    <td className="pad">По ощущению: </td>
                                    <td className="re he">{this.props.feels_like}</td>
                                </tr>
                                <tr>
                                    <td className="pad">Давление:</td>
                                    <td>{this.props.pressure} мм рт.ст.</td>
                                </tr>
                                <tr>
                                    <td className="pad">Влажность:</td>
                                    <td className="re">{this.props.humidity}%</td>
                                </tr>
                                <tr>
                                    <td className="pad">Ветер:</td>
                                    <td>{this.props.speed} м/с,</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
            }<p>{this.props.error}</p>
            </div>
        );
    }
}

export default DataToday;
/*
<p>Местоположение: {this.props.city}, {this.props.country}</p>
                        <p>Дата: {this.props.date}</p>
                        <p>Температура: {this.props.temp}</p>
                        <p>По ощущению: {this.props.feels_like}</p>
                        <p>Давление: {this.props.pressure} мм рт.ст.</p>
                        <p>Влажность: {this.props.humidity}%</p>
                        <p>Ветер: {this.props.speed} м/с, {this.props.deg}</p>
*/