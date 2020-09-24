import React, { Component }from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGREDIENTS_PRICE ={
  salad:10,
  cheese:20,
  chicken:20,
  bacon:25
}
class BurgerBuilder extends Component {
  state = {
    ingredients : {
      salad: 0,
      bacon: 0,
      cheese: 0,
      chicken: 0
    },
    totalPrice: 10,
    isPurchasable: true,
    purchasing: false,
    ordering: false
  }

  checkIfPurchasable = (ingredient) => {
    let sum = Object.keys(ingredient).map((ingred)=>{
      return ingredient[ingred];
    }).reduce((sum,el)=>{return sum + el},0);

    this.setState({ isPurchasable: sum<=0 });
  }
  addIngredientHandler = (type)=>{
    let prevCount = this.state.ingredients[type];
    const newCount = prevCount + 1;
    const prevTotPrice = this.state.totalPrice;
    const newIngredients = {...this.state.ingredients};
    newIngredients[type] = newCount;
    const newTotPrice = prevTotPrice + INGREDIENTS_PRICE[type];
    this.setState({ingredients : newIngredients,
      totalPrice: newTotPrice});
    this.checkIfPurchasable(newIngredients);
  }
  removeIngredientHandler = (type)=>{
    let prevCount = this.state.ingredients[type];
    if(prevCount >= 1){
      const newCount = prevCount - 1;
      const prevTotPrice = this.state.totalPrice;
      const newIngredients = {...this.state.ingredients};
      newIngredients[type] = newCount;
      const newTotPrice = prevTotPrice - INGREDIENTS_PRICE[type];
      this.setState({ingredients : newIngredients,
        totalPrice: newTotPrice});
      this.checkIfPurchasable(newIngredients);
    }
  }

  orderSummaryHandler = () => {
    this.setState({ purchasing: true });
  }

  cancelOrderHandler = () => {
    this.setState({ purchasing: false });
  }

  purchasedContinue = () => {
    //alert('Ordered Successfully');
    // this.setState({ordering : true})
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customers: {
    //     name: 'Hemansh',
    //     address: {
    //       street: 'abc City',
    //       country: 'India',
    //       pincode: '122313'
    //     }
    //   },
    //   method: 'fastest'
    // }
    // Axios.post('/orders.json',order)
    //   .then((Response) => {console.log(Response);
    //     this.setState({ordering : false});})
    //   .catch((error)=>{console.log(error);
    //     this.setState({ordering : false});});
    const queryParams = [];
    for(let i in this.state.ingredients){
      queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]));
    }
    const queryString = queryParams.join('&');
    this.props.history.push({pathname:'/checkout',search: '?'+queryString});
  }

  componentDidMount(){
    console.log(this.props);
  }
  render(){
    const checkIngredients = {...this.state.ingredients};
    const disabledIngredients = {salad: false,
      bacon: false,
      cheese: false,
      chicken: false}
    for(let ingred in checkIngredients){
      if(checkIngredients[ingred] <= 0){
        disabledIngredients[ingred]=true;
      }
    }

    let orderSum = <OrderSummary 
    ingredients={this.state.ingredients}
    purchasedCancelled={this.cancelOrderHandler}
    purchasedContinued={this.purchasedContinue}
    price={this.state.totalPrice} 
    />
    if(this.state.ordering){
      orderSum = <Spinner />
    }
   
    return (
      <Aux>
        
        <Modal show={this.state.purchasing} cancelPurchase={this.cancelOrderHandler}>
          {orderSum}
        </Modal>

        <Burger ingredient={this.state.ingredients} />       
        
        <BurgerControls 
          addIngredient={this.addIngredientHandler} 
          removeIngredient={this.removeIngredientHandler}
          price={this.state.totalPrice} 
          passDisabled={disabledIngredients}
          purchasable={this.state.isPurchasable} 
          ordered={this.orderSummaryHandler} />        
      </Aux>
    )
  }
}

export default BurgerBuilder;