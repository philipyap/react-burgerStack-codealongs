import React from 'react'
import './style.css';
import Ingredient from './Ingredient'

function BurgerStack(props){
    return(
        <div>
            {/* RENDER ALL ADDED INGREDIENTS */}
            {props.stack.map((ing, index)=>{
                if(index === 0) {
                    return(
                    <div>
                        <button onClick={props.clearIng}>Remove</button>
                         <Ingredient key={`in-${index}`} name={ing.name} color={ing.color} />
                    </div>
                    )

                }
                return<Ingredient key={`in-${index}`} name={ing.name} color={ing.color} />
            })}
        </div>
    )
}
export default BurgerStack