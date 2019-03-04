import React, { Component } from 'react';
import './Body.css';
import axios from 'axios';
import Destaque from '../Destaque/Destaque'
import { OpenStreetMapProvider } from 'leaflet-geosearch';

export default class Body extends Component {

  constructor(props){
    super(props);

    this.state = {
      destaques: [],
      isDone : false,
      filter: [],
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:5000/api/casas/all')
      .then(res => {
        this.setState({ isDone: true , filter: res.data.slice(7 ,10)})
      })

    const provider = new OpenStreetMapProvider();

    provider
      .search({ query: 'Rua das Copaibas 87, Indaiatuba' })
      .then((res) => console.log(res))
  }

  show = () => {
    console.log(this.state.destaques[Math.floor(Math.random() * this.state.destaques.length)])
    console.log(this.state.filter)
  }

  render() {
    return (
      <React.Fragment>
        <div className="bodyWrapper">
          <div className="item info1">
            <i className="fas fa-fist-raised fa-3x"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti a magni ab dicta quidem ea amet, earum voluptate obcaecati ex?</p>
          </div>
          <div className="item info2">
            <i className="fas fa-key fa-3x"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti a magni ab dicta quidem ea amet, earum voluptate obcaecati ex?</p>
          </div>
          <div className="item info3">
            <i className="fas fa-book-open fa-3x"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti a magni ab dicta quidem ea amet, earum voluptate obcaecati ex?</p>
          </div>
        </div>
        <div className="destaques">
          <div className="title">
            <h1>Em Destaque</h1>
          </div>
          <div className="showDestaques">
          {
            this.state.isDone ? this.state.filter.map((all) => (
                <Destaque 
                  mainImage={all.imagensDaCasa[0]}
                  key={all._id}
                  tipo={all.tipo}
                  valorAluguel={all.valorDoAluguel}
                  prontaParaMudar={all.prontaParaMudar}
                  id={all._id}
                  numeroQuartos={all.numeroDeQuartos}
                  vagasGaragem={all.vagasNaGaragem}
                  numeroBanheiro={all.numeroDeBanheiros}
                  number={this.state.destaques.length}/>
            ))
            : ''
          }
          </div>
        </div>
        <div className="alugarApar">
          <div className="imageSide"></div>
          <div className="textSide">
            <div className="alug">
              <h1>Alugar<br />Apartamentos</h1>
            </div>
            <div className="btnAlugar">
              <button onClick={this.show}>Alugar</button>
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
