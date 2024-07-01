import React from "react";
import Photo1 from "/Users/danielmihai/Documents/code/web-cyberpunk/src/images/Rectangle 597.jpg";
import Photo2 from "/Users/danielmihai/Documents/code/web-cyberpunk/src/images/Rectangle 598.jpg";
import Photo3 from "/Users/danielmihai/Documents/code/web-cyberpunk/src/images/Rectangle 599.jpg";
import Blur from "/Users/danielmihai/Documents/code/web-cyberpunk/src/images/22 1-2.png";

class SubHeader extends React.Component {
    render() {
        return (
            <div className="subHeader">
                <h1>Найт-Сити изменит тебя навсегда!</h1>

                <div className="containerspan">
                    <span>Cyberpunk 2077 — приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках устройства, позволяющего обрести бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.</span>
                </div>

                <aside>
                    <img src={Photo3}/>
                </aside>

                <div className="containerPhoto">
                    <img src={Photo1}/>
                    <img src={Photo2}/>
                </div>

                <div className="blur">
                    <img src={Blur} />
                </div>
            </div>
        )
    }
}

export default SubHeader