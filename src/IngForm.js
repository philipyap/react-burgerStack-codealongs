import React from 'react'
import './style.css'

function IngForm(props){
    return(
        <div className='formName'>
            <form>
                <label>Ingredient Name</label>
                <input type="text" name="ingName" id="ingName"></input>
                <label>Ingredient Color</label>
                <input type="text" name="ingColor" id="ingColor"></input>
                <button onClick={(e)=> {props.addIng(e)}}>add Ingredient</button>
            </form>

        </div>
    )
}
export default IngForm