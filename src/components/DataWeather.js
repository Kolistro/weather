import React from "react";

function DateUSF (props) {
    const d = props.value*1000;
    const date = new Date(d);
    return date.toDateString();
}


class DataWeather extends React.Component{

    render() {
        const d = this.props.date;
        const newDate = d.map((d) =>
            <DateUSF key={d.id} value={d} />
        );

        let date = newDate.map(function (item){
            return <tr key={item.id}>
                <td>
                    {item}
                </td>
            </tr>;
        });

        let temp = this.props.temp.map(function(item) {
            return <tr key={item.id}>
                <td>{item}</td>
            </tr>;
        });

        let description = this.props.description.map(function(item) {
            return <tr key={item.id}>
                <td>{item}</td>
            </tr>;
        });

        let icon = this.props.icon.map(function(item) {
            return <tr key={item.id}>
                <td><img src={item} /></td>
            </tr>;
        });

        return (
            <div>{
                <table>
                    <thead>
                    <tr>
                        <td>Дата</td>
                        <td>Температура</td>
                        <td>Описание</td>
                        <td>Иконка</td>
                    </tr>
                    </thead>
                    <tbody>
                    <td>{date}</td>
                    <td>{temp}</td>
                    <td>{description}</td>
                    <td>{icon}</td>
                    </tbody>
                </table>
            }
             </div>
        );
    }
}

export default DataWeather;
