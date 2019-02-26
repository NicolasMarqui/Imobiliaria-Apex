import React from 'react';
import './Nav.css';
import menu from '../../assets/menu.png';
import { Link } from 'react-router-dom';

export default function Nav(props) {

  const { color } = props;

  return (
    <div className="navWrapper" style={{'backgroundColor': `${color}`}}>
      <div className="logoText">
        <Link to="/"><h1 style={{'color': 'black'}}>Apex<span>.</span></h1></Link>
        <hr/>
      </div>
      <div className="navMenu">
        <img src={menu} alt="menu" height="40x" width="auto" />
      </div>
      <div className="navItems">
        <ul>
            <li><a href="_">Home</a></li>
            <li><a href="_">Alugar</a></li>
            <li><a href="_">Vender</a></li>
            <li><a href="_">Comprar</a></li>
            <li><a href="_" className="redBg">Contato</a></li>
        </ul>
      </div>
    </div>
  )
}
