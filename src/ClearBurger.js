import React from 'react'
import './style.css';

function ClearBurger(props){
    return(
        <div>
            <button onClick={(e)=>props.clear(e)}>Clear</button>
        </div>
    )
}

export default ClearBurger