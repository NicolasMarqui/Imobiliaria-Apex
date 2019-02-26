import React, { Component } from 'react';
import './AlugarCasa.css';
import axios from 'axios';

import { Link } from 'react-router-dom';

import House from '../../assets/bg1.jpeg';

export default class AlugarCasa extends Component {
  render() {

    const {id,  mainImage, endereco, valorAluguel, areaTerreno, areaConstruida, numeroQuartos, numeroBanheiro, vagasGaragem, prontaParaMudar } = this.props;

    return (
      <React.Fragment>
        <div className="showWrapper">
            <div className="img" style={{'backgroundImage': `url(${mainImage})`, 'backgroundSize': 'cover', 'backgroundPosition': 'center'}}>
            </div>
            <div className="houseInfo">
                <div className="houseStatus">
                
                </div>
                <div className="housePricing">
                    <div className="price">
                        <p>{`R$${valorAluguel},00/mês`}</p>
                    </div>
                    <div className="buyOrSee">
                        <button><Link to={`/info/${id}`}>Mais Informaçoes</Link></button>
                        <button>Alugar</button>
                    </div>
                </div>
            </div>
        </div>
      </React.Fragment>
    )
  }
}
