import './BoardCell.css';
import React from 'react';

function BoardCell(props) {
    return (
        <div className = "board-cell" id={props.number + 1}>
            {props.number + 1}
        </div>
    );
  }
  
  export default BoardCell;
  