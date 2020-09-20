import React from 'react';

import classes from './Logo.css';
import logoImage from '../../assests/Images/burger-logo.png';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={logoImage}/>
  </div>
);

export default logo;