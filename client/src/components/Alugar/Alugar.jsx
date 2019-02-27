import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './Alugar.css';
import axios from 'axios';

import AlugarCasa from '../AlugarCasa/AlugarCasa';

export default class Alugar extends Component {

    constructor(props){
        super(props);

        this.state = {
            casas : [],
        }
    }

    componentDidMount = () =>{
        axios.get(`http://localhost:5000/api/casas/tipos/${this.props.match.params.tipo}`)
          .then(res => this.setState({casas: res.data}))

          console.log(this.props.match)
      }

  render() {
    return (
      <React.Fragment>
        <div className="alugarWrapper">
            <Nav color="white" />
            <div className="titleAndOther">
                <div className="filtro">
                    <h2>Filtros</h2>
                </div>
                <div className="valorResultado">
                    <h1>{this.state.casas.length} casas encontrada(s)</h1>
                </div>
                <div className="filterPreco">
                    <select name="" id="">
                        <option>Preco</option>
                    </select>
                </div>
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
                   {
                       this.state.casas.map(value => (
                           <AlugarCasa 
                           valorAluguel={value.valorDoAluguel}
                            mainImage={value.imagensDaCasa[0]}
                            key={value._id}
                            id={value._id}/>
                       ))
                   }
                </div>
            </div>
        </div>
      </React.Fragment>
    )
  }
}
