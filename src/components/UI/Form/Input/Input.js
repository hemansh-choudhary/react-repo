import React, { Component } from 'react';
import classes from './Input.css';

const Input = (props) => {
  let InputElement = null;
  switch(props.elementType){
    case('input'):
      InputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value} onChange={props.changed}/>
      break;
    case('textarea'):
      InputElement = <textarea className={classes.InputElement} {...props.elementConfig} value={props.value} onChange={props.changed}/>
      break;
    case('select'):
      InputElement = (
          <select className={classes.InputElement} value={props.value} onChange={props.changed} >
            {props.elementConfig.options.map((option)=>(              
              <option key={option.value} value={option.value}>
                {option.displayValue}
              </option>
            ))}
          </select>
      );
      break;
    default:
      InputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value} onChange={props.changed} />
  }
  return(
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {InputElement}
    </div>
  );
}

export default Input;