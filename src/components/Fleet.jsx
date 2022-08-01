import React from "react";
import { nanoid } from "nanoid";

const Fleet = ({
            config,
            gameState,
            setGameState,
            setShipSelected,
            }
) => {
    
    function selectShip(e) {
        const ship = e.target.parentNode;
        setShipSelected(prevID => ship.id)
    }
    // DISPLAYS SHIPS UNDER THE BOARD 
    function displayFleet() {
        const fleet = []

        for (let ship = 0; ship < config.shipSizes.length; ship++){      //LOOPS THROUGH THE ARRAY IN THE CONFIG OBJECT 
            const shipWidth = config.shipSizes[ship]                     //GETS THE WIDTH OF THE SHIP FROM THE CONFIG OBJECT IN APP.JS
            let shipBlocks = []                 
            for (let block = 0; block < shipWidth; block++){            // LOOPS A SECOND TIME DEPENDING THE NUMBER OF THE ELEMENT OF THE SHIPSIZE ARRAY
                shipBlocks.push(            
                    <div   
                                                                    // APPENDS THE SHIP ITSELF TO THE ARRAY
                        key={nanoid()} 
                        className="ship">
                            <div className='hole'></div>
                    </div>
                    
                )
            }
           
            fleet.push(                                                 // GETS THE FLEET GOING BY PUTTING THE SHIPS CREATED IN THIS ITERATION IN A CONTAINER
                <div 
                    key={nanoid()}  
                    id = {ship + 1}                                    // BY DOING THIS THE NUMBER OF TIMES OF THE SHIPSIZES ARRAY WE GET ALL THE BOATS IN THE FLEET
                    className='shipContainer'
                    onClick={selectShip}>                               
                    {shipBlocks}
                </div>
            )                               
        }
        return <div key={nanoid()} className='fleet'>{fleet}</div>    // RETURNS THE FULL FLEET FOR IT TO BE RENDERED, LETS GO
            
    }
    


    return displayFleet()
}

export default Fleet