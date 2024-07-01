import React from "react";
import Logo from "/Users/danielmihai/Documents/code/web-cyberpunk/src/images/Cyberpunk_2077_logo 1.svg";
import Youtube from "/Users/danielmihai/Documents/code/web-cyberpunk/src/images/youtube logo.svg";
import Twitch from "/Users/danielmihai/Documents/code/web-cyberpunk/src/images/twitch logo.svg";
import Instagram from "/Users/danielmihai/Documents/code/web-cyberpunk/src/images/instagram-square logo.svg";
import Twiter from "/Users/danielmihai/Documents/code/web-cyberpunk/src/images/twitter-square logo.svg";
import Vk from "/Users/danielmihai/Documents/code/web-cyberpunk/src/images/vk logo.svg";
import Facebook from "/Users/danielmihai/Documents/code/web-cyberpunk/src/images/facebook.svg";
import More from "/Users/danielmihai/Documents/code/web-cyberpunk/src/images/Доступно на всех платформах.png";

function Header() {
    return (
        <header>
            <div className="header-icons">
                <img src={Youtube} />
                 <img src={Vk} />
                 <img src={Facebook} />
                 <img src={Twiter} />
                 <img src={Twitch} />
                 <img src={Instagram} />
            </div>

            <div className="header-nav">
                <div className="header-logo">
                    <img src={Logo} />
                </div>
            </div>

            <div className="field">
                <img src={More} />

                <button>Узнать больше</button>
            </div>
        </header>
    )
}
  
export default Header