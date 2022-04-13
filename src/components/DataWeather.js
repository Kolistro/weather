import React from "react";

function DateUSF (props) {
    var d = props.value*1000;
    var date = new Date(d);
    return date.toDateString();
}


class DataWeather extends React.Component {

    render() {
        const d = this.props.date;
        const newDate = d.map((d) =>

            <DateUSF key={d.toString()} value={d} />
        );

        let date = newDate.map(function (item){
            return <tr key={item.toString()}>
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
                <td>{item}</td>
            </tr>;
        });

        return (
            <div>
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
            </div>
        );
    }
}

export default DataWeather;
/*
function ListItem(props) {
  // Правильно! Не нужно определять здесь ключ:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Правильно! Ключ нужно определять внутри массива:
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
 */