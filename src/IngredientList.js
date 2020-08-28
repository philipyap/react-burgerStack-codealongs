import React from 'react';
import Ingredient from './Ingredient'
import './style.css';

function IngredientList(props){
    return(
        <div className='ingListDiv'>
            {/* ToDo map over ingredient list and display on ingredient component for each ingredient */}
            {props.ingredients.map((ing, index)=>{
                return <Ingredient key={`in-${index}`} name={ing.name} color={ing.color} stackBurger={props.stackBurger} />
            })}
            <Ingredient />
        </div>
    )
}
export default IngredientList