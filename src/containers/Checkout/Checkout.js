import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
class Checkout extends Component {
  state ={
    ingredients: {
      salad: 1,
      chicken: 1,
      bacon: 1,
      cheese: 1
    }
  }

  componentDidMount(){
    const query = new URLSearchParams(this.props.location.search);
    const newIngredients = {};
    for(let param of query.entries()){
      newIngredients[param[0]] = +param[1];
    }
    console.log(newIngredients);
    this.setState({ingredients : newIngredients});
  }
  checkCancelButtonHandler=()=>{
    this.props.history.goBack();
  }

  checkCancelContinueHandler = () => {
    this.props.history.replace('/checkout/contact-details');
  }
  render(){

    return(
      <CheckoutSummary ingredients={this.state.ingredients}
      checkCancelButton={this.checkCancelButtonHandler}
      checkContinueButton={this.checkCancelContinueHandler} />
    );
  }
}

export default Checkout;