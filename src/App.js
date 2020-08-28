import React, {useState} from 'react';
import './style.css';
import BurgerPane from './BurgerPane';
import IngredientList from './IngredientList'
import IngForm from './IngForm'
// TODO import Component

let ingredientSeed = [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
];

function App(props){
  //ToDo useState
  let [ingredients, setIngredients]=useState(ingredientSeed)
  let [stack, setStack]=useState([])

  //ToDo declare some functions
  function stackBurger(e){
    let ingToAdd = ingredients.filter(ing=> ing.name === e.target.innerText)
    setStack([ingToAdd[0], ...stack])
  }

  function clear(){
    setStack([]);
  }

  function addIng(e) {
    e.preventDefault()
    let ingName = document.querySelector('#ingName').value
    let ingColor= document.querySelector('#ingColor').value
    let ing= {name: ingName, color: ingColor}
    setIngredients([ing, ...ingredients])
  }

  function clearIng(){
    let tempStack = stack
    tempStack.shift()
    setStack([...tempStack])
  }

  return (
    <div classNmae='appDiv'>
      {/* List Component */}
      <IngForm addIng={addIng} />
      <IngredientList ingredients={ingredients} stackBurger={stackBurger}/>
      <BurgerPane stack={stack} clear={clear} clearIng={clearIng}/>
    </div>
  )
}
export default App;
