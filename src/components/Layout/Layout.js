import React,{Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state ={
    toggleBackDrop : false
  }

  toggleBackDropHandler = () =>{
    this.setState({toggleBackDrop:false});
  }

  toggleBackDropTrueHandler = () => {
    this.setState({toggleBackDrop:true});
  }
  render(){
    return(
      <Aux>
        <Toolbar clickOpen={this.toggleBackDropTrueHandler} />
        <SideDrawer closed={this.toggleBackDropHandler} open={this.state.toggleBackDrop}/>
          <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;