import React from "react";
import { IoColorPaletteSharp } from "react-icons/io5";
import { GrMagic } from "react-icons/gr";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import Monitor from "/Users/danielmihai/Documents/code/web-cyberpunk/src/images/c06611743 1.png";
import Logo from "/Users/danielmihai/Documents/code/web-cyberpunk/src/images/Cyberpunk_2077_logo 1.svg";

class About extends React.Component {
    render() {
        return (
            <div className="about">   
                <div className="info">
                    <div className="text">
                        <h1>Полное погружение вместе с HP</h1>
                        <span>Погрузись в современные экшен-игры с реалистичным изображением с помощью монитора с диагональю 23,8 дюйма, созданном для отображения максимально насыщенных цветов. Успевай реагировать на любые события с временем отклика 1 мс и частотой в 144 Гц!</span>
                    </div>

                    <div className="container-right"> 
                        <div className="block">
                            <IoColorPaletteSharp />
                            <span>Яркие насыщенные цвета</span>
                        </div>

                        <div className="block">
                            <GrMagic />
                            <span>Кристальная четкость изображения</span>
                        </div>

                        <div className="block">
                            <RiCheckboxMultipleBlankFill />
                            <span>Быстрые движения и плавный геймплей</span>
                        </div>
                    </div>

                    <button type="submit">Подробнее</button>
                </div>

                <div className="container">
                        <img src={Monitor} className="monitor"/>

                        <div className="logo">
                            <img src={Logo} />
                        </div>
                    </div>
            </div>
        )
    }
}

export default About