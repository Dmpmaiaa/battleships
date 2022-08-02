import React from "react";
import Square from "./Square";
import { nanoid } from "nanoid";

const Board = (props) => {

    let grid = []
    for (let row = 0 ; row < props.rows; row++) {
        let rows = []
        for (let col = 0 ; col < props.columns; col++) {
            rows.push(
                        <Square 
                            key={nanoid()}
                            row={col+1}
                            col={row+1}
                            className={`square row-${col+1}`}
                            position={row * props.columns + col + 1}
                        />)
        }
        
        grid.push(
                    <div 
                        key={nanoid()} 
                        className={`column column-${row+1}`}>
                        {rows}
                    </div>)
       
    }


  

    return (
        <div className="board">{grid}</div>
    )
}

export default Board