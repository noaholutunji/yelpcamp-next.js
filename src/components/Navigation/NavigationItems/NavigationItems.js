// import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
// import { BrowserRouter, Link } from 'react-router-dom';

import NavigationItem from './NavigationItem/NavigationItem';

const logout = () => {
  localStorage.setItem('token', '');
  localStorage.clear();
  Router.push('/login');
};

const navigationItems = props => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        {/* <BrowserRouter> */}
        <Link href="/">
          <a className="navbar-brand">YelpCamp</a>
        </Link>
        {/* </BrowserRouter> */}
      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <NavigationItem link="/campgrounds">Campgrounds</NavigationItem>
          <NavigationItem link="/login">Login</NavigationItem>
          <NavigationItem link="/register">Sign Up</NavigationItem>
          <li style={{marginTop: '15px', cursor: 'pointer' }} onClick={logout}>Logout</li>
        </ul>
      </div>
    </div>
  </nav>
);

export default navigationItems;
