import React from 'react';

import classes from './Toolbar.css';
import Menu from '../Menu/Menu';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import { Link } from 'react-router-dom';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <Menu click={props.clickOpen}/>
    <Logo />
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;