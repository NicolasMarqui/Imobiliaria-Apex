import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './Comprar.css';
import axios from 'axios';
// import queryString from 'query-string';
import { withRouter } from 'react-router-dom';

import AlugarCasa from '../AlugarCasa/AlugarCasa';

class Comprar extends Component {

    constructor(props){
        super(props);

        this.state = {
            casas : [],
            porPreco: '',
        }
    }

    componentDidMount = () =>{
        axios.get(`http://localhost:5000/api/casas/venda/${this.props.match.params.tipo}`)
          .then(res => this.setState({casas: res.data}))
      }

      filterItems = e => {
        this.setState({ porPreco: e.target.value });

        axios.get(`http://localhost:5000/api/casas/venda/sortprice?sort=${e.target.value}`)
            .then(res => this.setState({ casas: res.data }))
            .catch(err => console.log(err))

            this.props.history.push(`/casas/novo/venda?sort=${e.target.value}`)
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
                    <h3>{this.state.casas.length} casas encontrada(s)</h3>
                </div>
                <div className="filterPreco">
                    <select value={this.state.porPreco} onChange={this.filterItems}>
                        <option value="maior">Ordenar Por</option>
                        <option value="maior">Maior Preço</option>
                        <option value="menor">Menor Preço</option>
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
                            id={value._id}
                            areaTerreno={value.areaDoTerreno}
                            numeroQuartos={value.numeroDeQuartos}
                            numeroBanheiro={value.numeroDeBanheiros}
                            vagasGaragem={value.vagasNaGaragem}
                            endereco={value.endereco}
                            numero={value.numeroDaCasa}
                            tipo={value.tipo}/>
                       ))
                   }
                </div>
            </div>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(Comprar)
