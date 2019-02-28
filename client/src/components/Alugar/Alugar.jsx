import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './Alugar.css';
import axios from 'axios';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';

import AlugarCasa from '../AlugarCasa/AlugarCasa';

class Alugar extends Component {

    constructor(props){
        super(props);

        this.state = {
            casas : [],
            porPreco: '',
        }
    }

    componentDidMount = () =>{
        axios.get(`http://localhost:5000/api/casas/tipos/${this.props.match.params.tipo}`)
          .then(res => this.setState({casas: res.data}))

          console.log(this.props.match)
      }

      filterItems = e => {
          this.props.history.push(`/casas/alugar?sort=${e.target.value}`)
          const value = queryString.parse(this.props.location.search)
          axios.get(`http://localhost:5000/api/casas/sort?sort=${value.sort}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
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
                    <select value={this.state.porPreco} onChange={this.filterItems}>
                        <option >Ordenar Por</option>
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

export default withRouter(Alugar)
