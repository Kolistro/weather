import React from "react";
import app from "../App";

function ListItem(props) {
    return <p>{props.value}</p>;
}
async function UrlICon(props) {

}

class DataWeather extends React.Component {
    getIconWeather;
    render() {

        const temps = this.props.temp;
        const listTemp = temps.map((temps) =>
            <ListItem key={temps.toString()} value={temps}/>
        );
        const descriptions = this.props.description;
        const listDescription = descriptions.map((descriptions) =>
            <ListItem key={descriptions.toString()} value={descriptions}/>
        );

        /*
        const icon = this.props.icon;
        const listIcon = icon.map((icon) =>
            <UrlICon key={icon.toString()} value={icon}/>
        );

        const img = [];
        this.getIconWeather = async(e) =>{
            const urlIconWeather =
                await fetch(`http://openweathermap.org/img/wn/${listIcon}@2x.png`);
            const iconWeather = await urlIconWeather.json();
            console.log(iconWeather);
            img.app(iconWeather);
        }

        /*
        const icon = this.props.icon;
        const  listIcon = icon.map((icon) =>
        <UrlICon key={icon.toString()} value={icon} />
        );*/

        return (
            <div>
                <div>
                    {listTemp}
                </div>
                <div>
                    {listDescription}
                </div>
                <div>

                </div>

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

/*
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
*/
/*
["dog", "cat", "hen"].forEach(function(currentValue, index, array) {
// Сделать что-нибудь с currentValue или array[index]
});
 */