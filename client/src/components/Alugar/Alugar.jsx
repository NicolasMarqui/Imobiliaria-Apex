import React, { Component, Fragment } from 'react';
import Nav from '../Nav/Nav';
import './Alugar.css';

import AlugarCasa from '../AlugarCasa/AlugarCasa';

export default class Alugar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="alugarWrapper">
            <Nav color="white" />
            <div className="titleAndOther">
                alooo
            </div>
            <div className="resultsFlex">
                <div className="sideNav">
                    <div className="caixa preco">
                        <h2>ALOO</h2>
                    </div>
                    <div className="caixa preco">
                        <h2>ALOO</h2>
                    </div>
                    <div className="caixa preco">
                        <h2>ALOO</h2>
                    </div>
                    <div className="caixa preco">
                        <h2>ALOO</h2>
                    </div>
                </div>
                <div className="mainResults">
                   <AlugarCasa />
                   <AlugarCasa />
                   <AlugarCasa />
                   <AlugarCasa />
                   <AlugarCasa />
                </div>
            </div>
        </div>
      </React.Fragment>
    )
  }
}
