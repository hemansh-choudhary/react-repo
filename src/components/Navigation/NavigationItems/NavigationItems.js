import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/' active>Main Page</NavigationItem>
    <NavigationItem link='/'>Tools</NavigationItem>
  </ul>
);

export default navigationItems;