import React from "react";
import { IoDiscSharp } from "react-icons/io5";
import { RiPagesFill } from "react-icons/ri";
import { IoMdPhotos } from "react-icons/io";
import { FaComputer } from "react-icons/fa6";
import { BsXbox } from "react-icons/bs";
import { IoLogoPlaystation } from "react-icons/io";
import { SiStadia } from "react-icons/si";
import Disk from "/Users/danielmihai/Documents/code/web-cyberpunk/src/images/Untitled-1 1-2.jpg";

class Buy extends React.Component {
    render() {
        return (
            <div className="buy">
                <div className="text-cont">
                    <h1>Купить игру Cyberpunk 2077</h1>

                    <div className="options">
                        <p>В комплект входит:</p>

                        <div className="block">
                            <IoDiscSharp id="img"/>
                            <span>Футляр с игровыми дисками</span>
                        </div>
                        <div className="block">
                            <RiPagesFill id="img"/>
                            <span>Футляр с кодом для загрузки игры и дисками (pc)</span>
                        </div>
                        <div className="block">
                            <IoMdPhotos id="img"/>
                            <span>Справочник с информацией об игровом мире</span>
                        </div>
                    </div>

                    <div className="platforms">
                        <p>Выберите платформу:</p>

                        <div className="icons">
                            <FaComputer id="img-2"/>
                            <BsXbox id="img-2"/>
                            <IoLogoPlaystation id="img-2"/>
                            <SiStadia id="img-2"/>
                        </div>
                    </div>
                </div>

                <div className="collage">
                    <img src={Disk} />
                </div>  

            </div>
        )
    }
}

export default Buy