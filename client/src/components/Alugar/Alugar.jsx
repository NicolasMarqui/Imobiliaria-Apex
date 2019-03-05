import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './Alugar.css';
import axios from 'axios';
// import queryString from 'query-string';
import { withRouter } from 'react-router-dom';
import Filtros from '../Filtros/Filtros';
import AlugarCasa from '../AlugarCasa/AlugarCasa';
import Footer from '../Footer/Footer';

class Alugar extends Component {

    constructor(props){
        super(props);

        this.state = {
            casas : [],
            porPreco: '',
            temCoisa: false,
            isGrid: true,
        }
    }

    componentDidMount = () =>{
        axios.get(`http://localhost:5000/api/casas/tipos/${this.props.match.params.tipo}`)
          .then(res => this.setState({casas: res.data}))

          this.props.history.push(`/casas/alugar`)
        // console.log(this.props.location.search += '&quartos=4');
      }


      getFilters = arr => {
          this.setState({ casas: arr, temCoisa: true })
      }

      clean = () => {
        axios.get(`http://localhost:5000/api/casas/tipos/alugar`)
        .then(res => this.setState({ casas: res.data }))
        .catch(err => console.log(err))

        this.setState({ temCoisa: false , numQuarto: false})

        this.props.history.push(`/casas/alugar`)
      }

  render() {
    return (
      <React.Fragment>
        <div className="alugarWrapper">
            <Nav color="white" />
            <Filtros getData={this.getFilters} tipo="alugar"/>
            <div className="titleAndOther">
                <div className="filtro">
                  <button onClick={() => this.setState({ isGrid: !this.state.isGrid })}
                  className="showGrid"
                  ><i className={!this.state.isGrid ? "fas fa-th-large fa-2x" : "fas fa-list fa-2x"}></i></button>
                    <br/>
                    <button style={this.state.temCoisa  ? {'display':'inline-block'} : {'display': 'none'}} 
                    onClick={this.clean}
                    className="clearFiltro"
                    ><i className="fas fa-times"></i> Limpar Filtros</button>
                </div>
                <div className="valorResultado">
                    <h3>{this.state.casas.length} casa(s) encontrada(s)</h3>
                </div>
                
            </div>
            <div className="resultsFlex">
                <div className={this.state.isGrid ? "mainResultsGrid" : "mainResults"}>
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
                         tipo={value.tipo}
                         isGrid={this.state.isGrid}/>
                    ))
                   }
                </div>
            </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default withRouter(Alugar)
