import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = ( props ) => {
  const ingredsSummary = Object.keys(props.ingredients).map((ingred)=>{
  return (<li key={ingred} >
            <span style={{textTransform:'capitalize'}}>{ingred}</span>: {props.ingredients[ingred]}
          </li>);
  });
  return(
    <Aux>
      <h3>Order Summary</h3>
      <p>Below are the ingredients for your Burger!!</p>
      <ul>
        {ingredsSummary}
      </ul>
      <h5><strong>Total Price :</strong> {props.price}</h5>
      <p>Do you Want to Continue ?</p>
      <Button btnType='Danger' clicked={props.purchasedCancelled}>CANCEL</Button>
      <Button btnType='Success' clicked={props.purchasedContinued}>CONTINUE</Button>
    </Aux>
  );
}

export default orderSummary;