import { buildQueries } from '@testing-library/react';
import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';

class Header extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    const activeClass ={
      color: 'blue'
    };
      return (
    <nav>
      <NavLink to='/' exact activeStyle={activeClass}>Home</NavLink> |
      <NavLink to='/courses' activeStyle={activeClass}>Courses</NavLink> |
      <NavLink to='/about' activeStyle={activeClass}>About</NavLink>
    </nav>); 
    }
}

export default Header;