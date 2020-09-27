import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';
class Checkout extends Component {
  state ={
    ingredients: {
      salad: 1,
      chicken: 1,
      bacon: 1,
      cheese: 1
    },
    price:0
  }

  componentDidMount(){
    console.log(this.props);
    const query = new URLSearchParams(this.props.location.search);
    const newIngredients = {};
    for(let param of query.entries()){
      if(param[0]=="price"){
        this.setState({price:param[1]});
      }
      else{
        newIngredients[param[0]] = +param[1];
      }
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
      <React.Fragment>
        <CheckoutSummary ingredients={this.state.ingredients}
        checkCancelButton={this.checkCancelButtonHandler}
        checkContinueButton={this.checkCancelContinueHandler} />
        <Route path={this.props.match.path+"/contact-details"} 
          render={(props)=>(<ContactData ingredients={this.state.ingredients} price={this.state.price}{...props}/>)} />
      </React.Fragment>
    );
  }
}

export default Checkout;