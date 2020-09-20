import React from 'react';
import classes from './Menu.css';
import menuImage from '../../../assests/Images/menu-img.png';

const menu = ( props ) => {
  return(
    <div onClick={props.click}>
      <img src={menuImage} style={{height:'20%',width:'20%'}}/>
    </div>
  );
}

export default menu;