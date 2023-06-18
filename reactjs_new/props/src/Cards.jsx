import React from 'react';
import './index.css';

function Cards(props){
    return (
    <>
    <div className="cards">
        <div className="card">
            <img src={props.imgsrc} alt="mypic" className="card_img"/>
                <div className="card_info">
                    <span className="card_category">{props.category}</span>
                    <h3 className="card_title">{props.title}</h3>
                    <a href={props.link} target="_blank">
                        <button>Watch</button>
                    </a>
                </div>
        </div>
    </div>
    </>
    );
}

export default Cards;

