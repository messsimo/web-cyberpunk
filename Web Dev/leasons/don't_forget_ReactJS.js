// Вывод значений по одном и несколько
eactDOM.render(<h2>Hello World</h2>, document.getElementById("test"));

ReactDOM.render(<div>
    <h1>hello</h1>
    <h3>world</h3>
    <input type="text"></input>
</div>, document.getElementById("test"));
// По переменной
var html = <p>Hello world</p>
var sel = document.getElementById("test")
ReactDOM.render(html, sel)
// Добавление текста с перменной
const newText = "Hello World"
ReactDOM.render(<div>
    <h1>{newText}</h1>
    <h4>Привет Мир</h4>
</div>, document.getElementById("test"))


// События(через {}) + функции
const click = () => console.log("Click")
const enter = () => console.log("Mouse Enter")
const html = <input placeholder="Write the text" onClick={click} onMouseEnter={enter} />
const selector = document.getElementById("test")
ReactDOM.render(html, selector)


// Компоненты + их вложеность (с помощью функций)
const Add = () => {
    return (<div>
      <h2>Спасибо большое за ответ!</h2>
    </div>)
  }

function Block() {
  return (<div>
      <p>Поле для ввода:</p>
      <input placeholder='Впиши что-то'></input>
      <Add />
    </div>
  );
}
// С помощью Классов + работа внутри класса с переменными и функциями
class Field extends React.Component {
    render() {
      return (<div>
        <h3>Введите ваше имя:</h3>
        <input placeholder='Vasea Pupkin' onClick={this.click}></input>
        <p>{this.word}</p>
      </div>)
  }
  
    word = "Нажми на поле ввода!"
    click = () => {
      console.log("Click")
    }
  }

// Передача свойств(атрибута)
class Header extends React.Component {
    render() {
      return (<header>
        <h1>Logo</h1>
        <p>{this.props.title}</p>
      </header>)
    }
  }
  
  class Block extends React.Component {
    render() {
      return(
        <Header title="About" />
      )
    }
  }
  
  const selector = ReactDOM.createRoot(document.getElementById("root"));
  selector.render(<Block />)


// Добавление фотошграфий
import logo from "./images/logo.png"
<img src={logo} />


// Свойства (изминения и добавления) + конструктор для свойста
class Block extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // Задаем значения в виде перменных
      h3: "Введите ваш ник:",
      holder: "Pupkin",
      word: "Нажми на поле ввода!",
    }
      // Добавляем функцию в конструтор, для динамеской обработки
    this.click = this.click.bind(this)
  }
  render() {
    return (<div class="block">
      <Header />
      <h3>{this.state.h3}</h3>
      <input placeholder={this.state.holder} onClick={this.click}></input>
      <p>{this.state.word}</p>
      <img src={logo} />
    </div>)
}
  click = () => {
    // Определяем новое состояние после действия пользователя
    this.setState({word: "Спасибо за клик!"})
  }
}


// Получение данных от пользователя
class Block extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      h3: "Введите ваш ник:",
      holder: "Pupkin",
      word: "Нажми на поле ввода!",
      // Устанавливае пустое значения для переменной
      input_user: ""
    }

    this.click = this.click.bind(this)
  }
  render() {
    return (<div class="block">
      <Header />
      <h3>{this.state.h3}</h3>
      <input placeholder={this.state.holder} 
      onClick={this.click} 
      // Создаем функцию внутри тега input 
      onChange={change => this.setState({input_user: change.target.value})}
      // Выводим в теге "p"" полученое значение из input-поля 
      <p>{this.state.input_user}</p>
      <p>{this.state.word}</p>
      <img src={logo} />
     </div>)
}
  click = () => {
    this.setState({word: "Спасибо за клик!"})
  }
}


// Передача свойст
// В папке компонента
function SubHeader(props) {
  return (<div>
      <h1>Привет народ, это subHeader</h1>
      <p>{props.message}</p>
  </div>
  )
}
SubHeader.defaultProps = {
  message: "Hello World"
}
// В папке сборщике компонентов
class Header extends React.Component {
  render() {
    return (
      <header>
        <h2>Logo</h2>
        <SubHeader message="Привет Мир!"/>
      </header>
    )
  }
}


// Хук состояния
// подключаем useState к файлу
import React, { useState } from 'react';
function SubHeader(props) {
  // создаем константу с хранилищем хук состония с значением 0(ноль)
  const [click, clicked] = useState(0)
  return (<div>
      // Выводим значение с помощью "{click}""
      <p>{props.message} {click}</p>
       // Создае анонимную функцию, которая делаем +1 после клика
      <input onClick={() => clicked(click + 1)}
      />
  </div>
  )
}


// Использование хуков в классе
class Block extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      h3: "Введите ваше имя:",
      holder: "Pupkin",
      word: "Нажмите на поле для ввода!",
      input_user: ""
    }
    this.click = this.click.bind(this)
  }

  // Создае ХУК и делаем мини-условие для него
  componentDidUpdate() {
    if (this.state.h3 != "Введите вае имя:") {
      console.log("Нету текста")
    }
  }}


// Вывод значений из массива
class Users extends React.Component {
  // Создаем массив с КЛЮЧАМИ 
  users = [
      {
          id: 1,
          name: "Daniel",
          age: 18,
          country: "Republic of Moldova"
      },
      {
          id: 2,
          name: "Vladimir",
          age: 67,
          country: "Russia"
      }
  ]
  render() {
      return (<div>
        // Создаем функцию, где за счет метода map(el) делаем переборку элементов массива
           {this.users.map((el) => (
              <div key={el.id}>
                // Вывод элементов массива
                  <h1>{el.name}</h1>
                  <p>{el.age}</p>
                  <p>{el.country}</p>
              </div>
           ))}
      </div>
      )
  }
}

// Вывод текста из скрытого блока
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // Даем закрытом окну значение false
      clickForm: false,
    }
  }
    render() {
      return (<header>
        <div className="form">
          <IoMenuOutline className="open-form" onClick={() => {
            // Если пользователь кликне, то за счет "!" даем значение true
              this.setState({ clickForm: !this.state.clickForm })}}/>
        </div>
        <div className="logo">
          <LiaCheeseSolid className="logo-cheese"/>
          <p>CheeseShop</p>
        </div>
        {this.state.clickForm && 
        // Выводим тект в случае значение "true"
        <form className="opened-form">
           <a href="#">О нас</a>
           <a href="#">Товар</a>
           <a href="#Reviews">Отызвы</a>
       </form>}
      </header>)     
    }
  }


// Всплывающие окно (полный код)
import ContactMe from './contactMe';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // Устанавливаем изначальное состояние ЗАКРЫТОГО окна в виде false
            isOpen: false,
        }
    }

    // В функции: Устанавливаем состояние через setSatate на true;
    // С помощью параметра prevState передаем текущиее состояние
    openWin = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    render() {
        return (
            <header>
                <div className='header-background'></div>

                <div className='header-navbar'>
                    <form>
                        <a href="#aboutme">About me</a>
                        <a href="#hardskills">Hard Skills</a>
                        <a href="#projects">Projects</a>
                    </form>

                    <h2>DanielDev</h2>
                </div>
                <div className='header-me'>
                    <img src={headerMe} alt="Daniel's portrait" className='logo-me' />

                    <FaReact className='react-logo' />
                    <img src={html} className='html-logo' />
                    <img src={css} className='css-logo' />
                    <IoLogoJavascript className='javaScript-logo' />
                    <img src={jquery} className='jquery-logo' />
                </div>

                <div className='header-text'>
                    <img src={hand} alt="Hand waving" />
                    <h4>Hello</h4>
                    <h2>I'm Daniel Mihai</h2>
                    <h3>Frontend developer.</h3>
                    <span>I don't do better than others, I do differently</span>
                </div>

                <div className='header-button'>
                    <img src={backpack} alt="Backpack" />
                    <button type='button' onClick={this.openWin}>Сontact with me</button>
                </div>

                <img src={decoration} className='decoration' />
                
               // {this.state.isOpen && <ContactMe onClose={this.openWin} />}
            </header>
        )
    }
}

export default Header;

function ContactMe({ onClose }) {
  // Устанавлиаем значение false при открытом окне
  const [isClose, setIsClosed] = useState(false);

  // Создаем функцию при которой, при клике передается значение true и вызывается метод onClose из Header
  const closeWin = () => {
      setIsClosed(true);
      onClose(); // Метод из Header
  };

  return (
      // Устанавливаем имя класса "contactMe" 
      // И в случае если "isClose = true" - то создаем класс "closed"
      <div className={`contactMe ${isClose ? 'closed' : ""}`}> 
          <IoClose onClick={closeWin} className="close-icon"/>
          <h2>Contact with Me:</h2>

      <div className="container">
          <div className="contactMe-email">
              <h3>E-mail:</h3>
              <MdEmail className="icon"/>
              <span>danikmihai23@mail.ru</span>
          </div>

          <div className="contactMe-inst">
              <h3>Instagram:</h3>
              <FaInstagram className="icon"/>
              <span>@messssimo</span>
          </div>

          <div className="contactMe-telegram">
              <h3>Telegram:</h3>
              <FaTelegram className="icon"/>
              <span>@messssimo</span>
          </div>
       </div>
      </div>
  )
}

export default ContactMe;


