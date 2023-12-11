import React from 'react';
import backimg from '../assets/images/background-pattern-desktop.svg'

function Header() {
    return (
        <header>
        <div className='background-image'>
            <img src={backimg} alt='background-image' width={1600} />
        </div>
            
        </header>
    )
}

export default Header;