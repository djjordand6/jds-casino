import './RouletteWheel.css';
import React, { useEffect, useState } from 'react';

function RouletteWheel() {

    const [wheel, setWheel] = useState(1);

    useEffect(() => {
        const cell = document.getElementById(wheel);
        console.log(cell);
        //cell.style.color = "red";
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
                <button className='clicker' onClick={() => setWheel(getRandomInt(36))}>Spin!</button> 
            </div>
        </div>
    );
  }
  
  export default RouletteWheel;
  