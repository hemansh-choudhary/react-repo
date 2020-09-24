import React from 'react';
import Button from '../../UI/Button/Button';
import Burger from '../../Burger/Burger';

import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Better than Burger King!!!</h1>
      <div style={{width:'100%', margin:'auto'}}>
        <Burger ingredient={props.ingredients} />
        <Button btnType="Danger" clicked={props.checkCancelButton}>CANCEL</Button>
        <Button btnType="Success" clicked={props.checkContinueButton}>CONTINUE</Button>
      </div>
      
    </div>
  );
}

export default checkoutSummary;