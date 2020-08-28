import React from 'react'
import './style.css';
import ClearBurger from './ClearBurger'
import BurgerStack from './BurgerStack'


function BurgerPane(props){
    return(
        <div className='burgPaneDiv'>
            <BurgerStack stack={props.stack} clearIng={props.clearIng}/>
            <ClearBurger clear={props.clear} />
        </div>
       
    )
}
export default BurgerPane