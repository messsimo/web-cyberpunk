import React from "react";
import Photo from "/Users/danielmihai/Documents/code/web-cyberpunk/src/images/Group 217.png";
import Pixels from "/Users/danielmihai/Documents/code/web-cyberpunk/src/images/22.jpeg";


class Form extends React.Component {
    render() {
        return (
            <div className="containerForm">
                <h1>Играй и выигрывай!</h1>

                <div className="discription">
                    <span>Играй в <b>Cyberpunk 2077</b> и получи возможность выиграть консоль <b>Xbox Series X</b> или <b>Sony PlayStation 5!</b> Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 августа. Удачи!</span>
                </div>

                <div className="images">
                    <img src={Photo} />
                </div>

                <div className="form">
                    <form>
                        <input type="text" placeholder="Как тебя зовут?" className="inputForm"/><br />
                        <input type="text" placeholder="Твой e-mail" className="inputForm"/><br />

                        <label class="uploadFile" for="file">
                            <div class="icon">
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
                            </div>
                            <div class="text">
                                <span>Прикрепить скриншот</span>
                            </div>
                            <input type="file" id="file" />
                        </label>


                        <button type="submit">Отправить</button><br />

                        <label class="checkbox">
                            <input type="checkbox" class="inputCheckbox" />
                        Согласен на обработку персональных данных</label>
                    </form>
                </div>

                <div className="img">
                    <img src={Pixels} />
                </div>
            </div>
        )
    }
}

export default Form