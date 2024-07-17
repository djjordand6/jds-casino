import BoardCell from './BoardCell';
import './RouletteBoard.css';
import React, { useEffect, useState } from 'react';

function RouletteBoard() {

    const [cells, setCells] = useState([]);

    useEffect(() => {
        generateCells();
    }, []);

    const generateCells = () => {
        const genCells = [];

        for (let i = -1; i < 36; i++) {
            genCells.push(<BoardCell key={i} number={i}/>);
        }

        setCells(genCells);
    }

    return (
        <div className='board-container'>
        { cells }
        </div>
    );
  }
  
  export default RouletteBoard;
  