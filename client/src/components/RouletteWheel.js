import './RouletteWheel.css';
import React, { useState } from 'react';

function RouletteWheel() {

    const [wheel, setWheel] = useState(0);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <div className='wheel-container'>
            <div>
                {wheel}
            </div>
            <div>
                <button onClick={() => setWheel(getRandomInt(100))}>CLICK!</button>
            </div>
        </div>
    );
  }
  
  export default RouletteWheel;
  