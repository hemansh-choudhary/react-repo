import React, {Component}from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Form/Input/Input';
class ContactData extends Component {
  state={
    orderForm:{
      name: {
        elementType: 'input',
        elementConfig:{
          type:'text',
          placeholder:'Your Name'
        },
        value:''
      },
      email: {
        elementType: 'input',
        elementConfig:{
          type:'text',
          placeholder:'Your Email Address'
        },
        value:''
      },
      street: {
        elementType: 'input',
        elementConfig:{
          type:'text',
          placeholder:'Your Locality'
        },
        value:''
      },
      postalCode: {
        elementType: 'input',
        elementConfig:{
          type:'text',
          placeholder:'Zip Code'
        },
        value:''
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig:{
          options:[
            {value:'',displayValue:'Select'},
            {value:'express',displayValue:'Express'},
            {value:'normal',displayValue:'Normal'}
          ]
        },
        value:''
      }
    },
    price:0
  }

  orderHandler= (event) =>{
      //alert('Ordered Successfully');
      // alert(this.props.price);
    event.preventDefault();
    this.setState({ordering : true})
    const formData = [];
    for(let formElementIdentifier in this.state.orderForm){
      formData[formElementIdentifier]=this.state.orderForm[formElementIdentifier].value;
    }
    console.log(formData);
    const order = {
      ingredients: this.props.ingredients,
      price: this.state.totalPrice,
      orderInfo: formData
    }
    Axios.post('/orders.json',order)
      .then((Response) => {console.log(Response);
        this.setState({ordering : false});})
      .catch((error)=>{console.log(error);
        this.setState({ordering : false});});
  }

  inputChangeHandler(event,identifier){
    const updateOrderForm = {
      ...this.state.orderForm
    }
    const updateOrderFormElement = {
      ...updateOrderForm[identifier]
    };

    updateOrderFormElement.value = event.target.value;
    updateOrderForm[identifier] = updateOrderFormElement;
    this.setState({orderForm:updateOrderForm});
  }

  render(){
    let formElementArray = [];
    for(let key in this.state.orderForm){
      formElementArray.push({
        id:key,
        config:this.state.orderForm[key]
      })
    }
    let form = (
    <form>
      {formElementArray.map((singleElement)=>(
        <Input key={singleElement.id} 
          elementType={singleElement.config.elementType} 
          elementConfig={singleElement.config.elementConfig} 
          value={singleElement.config.value} 
          changed={(event)=>this.inputChangeHandler(event,singleElement.id)} />
      ))}
      <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>     
    </form>
    );
    if(this.state.ordering){
      <Spinner />
    }
    return (
    <div className={classes.ContactData}>
      <h4>Enter you details!</h4>
      {form}
    </div>
    );
  }
}

export default ContactData;