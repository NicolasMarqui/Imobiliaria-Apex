import React, { Component , Fragment} from 'react';
import './Body.css';

export default class Body extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="bodyWrapper">
          <div className="item info1">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti a magni ab dicta quidem ea amet, earum voluptate obcaecati ex?</p>
          </div>
          <div className="item info2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti a magni ab dicta quidem ea amet, earum voluptate obcaecati ex?</p>
          </div>
          <div className="item info3">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti a magni ab dicta quidem ea amet, earum voluptate obcaecati ex?</p>
          </div>
        </div>
        <div className="destaques">
          <div className="title">
            <h1>Em Destaque</h1>
          </div>
        </div>
        <div className="alugarApar">
          <div className="imageSide"></div>
          <div className="textSide">
            <div className="alug">
              <h1>Alugar<br />Apartamentos</h1>
            </div>
            <div className="btnAlugar">
              <button>Alugar</button>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="escolhaNois">
          <div className="titleEscolha">
            <h1>Porque<br />escolher nossa empresa?</h1>
          </div>
        </div>
        <div className="contato">
          
        </div>
      </React.Fragment>
    )
  }
}
