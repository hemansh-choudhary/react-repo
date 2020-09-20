import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Chicken', type: 'chicken'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'}
];
const buildControls = (props) =>  (
  <div className={classes.BuildControls}>
    <p>Total Price: Rs <strong>{props.price}</strong></p>
    {controls.map((control,ind)=>{
      return <BuildControl label={control.label} 
        key={control.label}
        added={() => props.addIngredient(control.type)}
        removed={() => props.removeIngredient(control.type)} 
        disable= {props.passDisabled[control.type]} />
    })}
    <button className={classes.OrderButton} 
    disabled={props.purchasable}
    onClick={props.ordered}>ORDER NOW</button>
  </div>
);

export default buildControls;