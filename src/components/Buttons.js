import React from "react";

//упрощенный компонент, можно делать только если нет состояний
class Button extends React.Component {
    render(){
        return(
            //<input> текстовое поле и плэйсхолдер для ввода города
            //<button>  кнопка для получения погоды
            <form onSubmit={this.props.weather}>
                <div className="bot">
                    Узнай погоду в вашем городе!
                </div>
                <input type="text" name="city" placeholder="Город"/>
                <button>Получить погоду</button>
                <div className="error">{this.props.error}</div>
            </form>
        );
    }
}

export default Button;