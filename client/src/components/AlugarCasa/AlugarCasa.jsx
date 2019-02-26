import React, { Component } from 'react';
import './AlugarCasa.css';

import House from '../../assets/bg1.jpeg';

export default class AlugarCasa extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="showWrapper">
            <div className="img" style={{'backgroundImage': `url(${House})`, 'backgroundSize': 'cover', 'backgroundPosition': 'center'}}>
            </div>
            <div className="houseInfo">
                <div className="houseStatus">
                
                </div>
                <div className="housePricing">
                    <div className="price">
                        <p>R$250.00/Mês</p>
                    </div>
                    <div className="buyOrSee">
                        <button>Alugar</button>
                        <button>Mais Informaçoes</button>
                    </div>
                </div>
            </div>
        </div>
      </React.Fragment>
    )
  }
}
