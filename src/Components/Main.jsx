import React from 'react';
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

function Main(props) {

const toggleClass = (e) => {
        e.currentTarget.classList.toggle("show")
      }

    return (
        <div>
            <div className='box' onClick={toggleClass}>
                <div className="block">
                    <button  className='quest'>{props.quest}</button>
                    <FaCirclePlus className='plus' size={25} />
                    <FaCircleMinus className='minus' size={25} />
                </div>
                <p className='answer'>{props.answer}</p>
                <div className='line'></div>
            </div>
            </div>
    );
}

export default Main;