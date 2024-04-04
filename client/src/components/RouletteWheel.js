import './RouletteWheel.css';
import React, { useEffect, useState } from 'react';

function RouletteWheel() {

    const [wheel, setWheel] = useState(1);

    useEffect(() => {
        const cell = document.getElementById(wheel);
        console.log(cell);
    }, [wheel]);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <div className='wheel-container'>
            <div>
                {wheel}
            </div>
            <div>
                <button className='clicker' onClick={() => setWheel(getRandomInt(38))}>CLICK!</button> 
            </div>
        </div>
    );
  }
  
  export default RouletteWheel;
  