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
                <td className="pad color">
                    {item}
                </td>
            </tr>;
        });

        let temp = this.props.temp.map(function(item) {
            return <tr key={item.id}>
                <td className="pad color">{item}</td>
            </tr>;
        });

        let description = this.props.description.map(function(item) {
            return <tr key={item.id}>
                <td className="pad color">{item}</td>
            </tr>;
        });

        let icon = this.props.icon.map(function(item) {
            return <tr key={item.id}>
                <td className="color"> <img src={item} /> </td>
            </tr>;
        });

        return (
            <div>{
                <table className="table ">
                    <thead >
                    <p className="he g">Погода на 5 дней</p>
                    <tr >
                        <td className="pad color">Дата</td>
                        <td className="pad color">Температура</td>
                        <td className="pad color">Описание</td>
                        <td className="color">Иконка</td>
                    </tr>
                    </thead>
                    <tbody>
                        <td>{date}</td>
                        <td>{temp}</td>
                        <td>{description}</td>
                        <td className="fix">{icon}</td>
                    </tbody>
                </table>
            }
             </div>
        );
    }
}

export default DataWeather;
