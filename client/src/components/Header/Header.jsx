import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './Header.css';


export default class Header extends Component {
  render() {
    return (
      <div className="headerWrap">
        <Nav color="transparent"/>
        <div className="overlay"></div>
        <div className="centerText">
            <h1>Procure<br />sua nova <br />casa</h1>
            <br/>
            <input type="text" placeholder="Ex. Indaiatuba"/>
            <select name="Venda" id="" value="">
                <option value="">Venda</option>
                <option value="">Alugue</option>
                <option value="">Compra</option>
            </select>
            <button>Procure</button><br/>
            <p>E.g Indaiatuba, São Paulo, Bairro das Esperanças</p>
        </div>
      </div>
    )
  }
}
