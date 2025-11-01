import React from 'react';
import './Background.css'; 
import spiderBorder from '../assets/border.svg';
import candy1 from '../assets/candy1.svg';
import candy2 from '../assets/candy2.svg';
import candy3 from '../assets/candy3.svg';
import candy4 from '../assets/candy4.svg';
import candy5 from '../assets/candy5.svg';
import candy6 from '../assets/candy6.svg';
import corn from '../assets/corn.svg';
import faces from '../assets/faces.svg';
import ghost from '../assets/ghost.svg';
import ghost2 from '../assets/ghost2.svg';
import house from '../assets/house.svg';
import pumpkins from '../assets/pumpkins.svg';
import spider1 from '../assets/spider1.svg';
import spider2 from '../assets/spider2.svg';
import witch from '../assets/witch.svg';


const Background = () => {
    return (
        <div className="background-container">
            <img src={spiderBorder} alt="Spider Border" className="top-border" />
            <div className="candies">
                <img src={candy1} alt="Candy 1" className="one" />
                <img src={candy2} alt="Candy 2" className="two" />
                <img src={candy3} alt="Candy 3" className="three" />
                <img src={candy4} alt="Candy 4" className="four" />
                <img src={candy5} alt="Candy 5" className="five" />
                <img src={candy6} alt="Candy 6" className="six" />
                <img src={candy1} alt="Candy 1" className="seven" />
                <img src={candy2} alt="Candy 2" className="eight" />
                <img src={candy3} alt="Candy 3" className="nine" />
                <img src={candy4} alt="Candy 4" className="ten" />
                <img src={candy5} alt="Candy 5" className="eleven" />
                <img src={candy6} alt="Candy 6" className="twelve" />
            </div>
            <div className="background-elements">
                <img src={corn} alt="Corn" className="bg-item corn" />
                <img src={faces} alt="Faces" className="bg-item faces" />
                <img src={ghost} alt="Ghost" className="bg-item ghost1" />
                <img src={ghost2} alt="Ghost 2" className="bg-item ghost2" />
                <img src={house} alt="Haunted House" className="bg-item house" />
                <img src={pumpkins} alt="Pumpkins" className="bg-item pumpkins" />
                <img src={spider1} alt="Spider 1" className="bg-item spider1" />
                <img src={spider2} alt="Spider 2" className="bg-item spider2" />
                <img src={witch} alt="Witch" className="bg-item witch" />
            </div>
        </div>
    );
};

export default Background;