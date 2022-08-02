import React from "react";
import { nanoid } from "nanoid";

const Square = (props) => {

    function squareClick (position) {
       
    }

    return (
        <div 
            key={nanoid()}
            className={props.className}
            position={props.position} >
           
            </div>
    )
}

export default Square
