import React from 'react';
import './Nav.css';
import menu from '../../assets/menu.png'

export default function Nav(props) {

  const { color } = props;

  return (
    <div className="navWrapper" style={{'backgroundColor': `${color}`}}>
      <div className="logoText">
        <h1>Apex<span>.</span></h1>
        <hr/>
      </div>
      <div className="navMenu">
        <img src={menu} alt="menu" height="40x" width="auto" />
      </div>
      <div className="navItems">
        <ul>
            <li><a href="_">Home</a></li>
            <li><a href="_">Home</a></li>
            <li><a href="_">Home</a></li>
            <li><a href="_" className="redBg">Home</a></li>
        </ul>
      </div>
    </div>
  )
}
