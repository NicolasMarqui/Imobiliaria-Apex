import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './Comprar.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Filtros from '../Filtros/Filtros';

import AlugarCasa from '../AlugarCasa/AlugarCasa';

class Comprar extends Component {

    constructor(props){
        super(props);

        this.state = {
            casas : [],
            porPreco: '',
            temCoisa: false,
        }
    }

    componentDidMount = () =>{
        axios.get(`http://localhost:5000/api/casas/venda/${this.props.match.params.tipo}`)
          .then(res => this.setState({casas: res.data}))

          this.props.history.push(`/casas/novo/venda`);

        
      }

      saveData = arr => {
          this.setState({ casas: arr , temCoisa: true})
      }

      clear = () => {
        axios.get(`http://localhost:5000/api/casas/tipos/venda`)
        .then(res => this.setState({ casas: res.data }))
        .catch(err => console.log(err))
          this.props.history.push(`/casas/novo/venda`);
      }

  render() {
    return (
      <React.Fragment>
        <div className="alugarWrapper">
            <Nav color="white" />
            <Filtros tipo="venda" getData={this.saveData}/>
            <div className="titleAndOther">
                <div className="filtro">
                    <button style={this.state.temCoisa  ? {'display':'inline-block'} : {'display': 'none'}} 
                    onClick={this.clear}
                    ><i className="fas fa-times"></i> Limpar Filtros</button>
                </div>
                <div className="valorResultado">
                    <h3>{this.state.casas.length} casas encontrada(s)</h3>
                </div>
            </div>
            <div className="resultsFlex">
                
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
