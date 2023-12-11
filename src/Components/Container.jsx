import React from 'react';
import Main from './Main'
import questions from './data';
import { FaStar } from "react-icons/fa";

function Container() {
    return (
        <div className='container'>
        <h1><FaStar size={25} color='rgb(184, 16, 250)'/>{' '}FAQs</h1>
        <Main {...questions[0]}/>
        <Main {...questions[1]}/>
        <Main {...questions[2]}/>
        <Main {...questions[3]}/>
        </div>
    )
}

export default Container;