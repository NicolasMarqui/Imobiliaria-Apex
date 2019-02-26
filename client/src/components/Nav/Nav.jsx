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
            <Link to="/" style={{'color': 'black'}}><li>Home</li></Link>
            <Link to="/alugar" style={{'color': 'black'}}><li>Alugar</li></Link>
            <Link to="/" style={{'color': 'black'}}><li>Comprar</li></Link>
            <li><a href="_" className="redBg">Contato</a></li>
        </ul>
      </div>
    </div>
  )
}
