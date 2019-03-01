import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './Alugar.css';
import axios from 'axios';
// import queryString from 'query-string';
import { withRouter } from 'react-router-dom';

import AlugarCasa from '../AlugarCasa/AlugarCasa';

class Alugar extends Component {

    constructor(props){
        super(props);

        this.state = {
            casas : [],
            porPreco: '',
            minMax: false,
            temCoisa: false,
            numQuarto: false,
        }
    }

    filterQuarto = quantidade => {
        this.setState({ numQuarto: true });

        if(quantidade === 2){
            axios.get(`http://localhost:5000/api/casas/alugar/filtroQuarto?quantidade=2`)
                .then(res => this.setState({ casas: res.data }))
            this.props.history.push('/casas/alugar/?quantidade=2');
        }else if(quantidade === 3){ 
            axios.get(`http://localhost:5000/api/casas/alugar/filtroQuarto?quantidade=3`)
                .then(res => this.setState({ casas: res.data }))
            this.props.history.push('/casas/alugar/?quantidade=3');
        }else if(quantidade === 4){
            axios.get(`http://localhost:5000/api/casas/alugar/filtroQuarto?quantidade=4`)
                .then(res => this.setState({ casas: res.data }))
            this.props.history.push('/casas/alugar/?quantidade=4');

            this.props.history.push('/casas/alugar/?min=2500');
        }else if(quantidade === 5){
            axios.get(`http://localhost:5000/api/casas/alugar/filtroQuarto?quantidade=5`)
                .then(res => this.setState({ casas: res.data }))
            this.props.history.push('/casas/alugar/?quantidade=5');
        }

    }

    filterPrice = e => {
        this.setState({ minMax: true , temCoisa: true});

        if(e === 600){
            axios.get(`http://localhost:5000/api/casas/alugar/filtroPreco?min=600&max=1000`)
                .then(res => this.setState({ casas: res.data }))
            this.props.history.push('/casas/alugar/?min=600&max=1000');
        }else if(e === 1000){ 
            this.setState({ minMax: true });
            axios.get(`http://localhost:5000/api/casas/alugar/filtroPreco?min=1000&max=2500`)
                .then(res => this.setState({ casas: res.data }))

            this.props.history.push('/casas/alugar/?min=1000&max=2500');
        }else if(e === 2500){
            this.setState({ minMax: true });
            axios.get(`http://localhost:5000/api/casas/alugar/filtroPreco?min=2500`)
                .then(res => this.setState({ casas: res.data }))

            this.props.history.push('/casas/alugar/?min=2500');
        }
    }

    componentDidMount = () =>{
        axios.get(`http://localhost:5000/api/casas/tipos/${this.props.match.params.tipo}`)
          .then(res => this.setState({casas: res.data}))
        // console.log(this.props.location.search += '&quartos=4');
      }

      filterItems = e => {
        this.setState({ porPreco: e.target.value });

        axios.get(`http://localhost:5000/api/casas/alugar/sortprice?sort=${e.target.value}`)
            .then(res => this.setState({ casas: res.data }))
            .catch(err => console.log(err))

            this.props.history.push(`/casas/alugar?sort=${e.target.value}`)
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
            <div className="titleAndOther">
                <div className="filtro">
                    <h2>Filtros</h2>
                    <br/>
                    <button style={this.state.temCoisa || this.state.numQuarto ? {'display':'inline-block'} : {'display': 'none'}} 
                    onClick={this.clean}
                    ><i className="fas fa-times"></i> Limpar Filtros</button>
                </div>
                <div className="valorResultado">
                    <h3>{this.state.casas.length} casas encontrada(s)</h3>
                </div>
                <div className="filterPreco">
                    <select value={this.state.porPreco} onChange={this.filterItems} >
                        <option value="maior">Ordenar Por</option>
                        <option value="maior">Maior Preço</option>
                        <option value="menor">Menor Preço</option>
                    </select>
                </div>
            </div>
            <div className="resultsFlex">
                <div className="sideNav">
                    <div className="caixa">
                        <div className="precoEntre centerFiltro">
                            <code>Preço entre: </code>
                            <br/>
                            <button style={this.state.minMax ? {'borderBottom': '2px solid green'} : {'borderBottom': '2px solid red'}} onClick={() => this.filterPrice(600)}>R$600 e R$1000</button>
                            <button style={this.state.minMax ? {'borderBottom': '2px solid green'} : {'borderBottom': '2px solid red'}} onClick={() => this.filterPrice(1000)}>R$1000 e R$2500</button>
                            <button style={this.state.minMax ? {'borderBottom': '2px solid green'} : {'borderBottom': '2px solid red'}} onClick={() => this.filterPrice(2500)}>Acima de R$2500</button>
                        </div>
                    </div>
                    <div className="caixa preco">
                        <div className="numQuarto centerFiltro">
                            <code>Número de Quartos</code>
                            <br/>
                            <button style={this.state.numQuarto ? {'borderBottom': '2px solid green'} : {'borderBottom': '2px solid red'}} onClick={() => this.filterQuarto(2)}>2 Quartos</button><br/>
                            <button style={this.state.numQuarto ? {'borderBottom': '2px solid green'} : {'borderBottom': '2px solid red'}} onClick={() => this.filterQuarto(3)}>3 Quartos</button><br/>
                            <button style={this.state.numQuarto ? {'borderBottom': '2px solid green'} : {'borderBottom': '2px solid red'}} onClick={() => this.filterQuarto(4)}>4 Quartos</button><br/>
                            <button style={this.state.numQuarto ? {'borderBottom': '2px solid green'} : {'borderBottom': '2px solid red'}} onClick={() => this.filterQuarto(5)}>4+ Quartos</button>
                        </div>
                    </div>
                    <div className="caixa preco">
                        <div className="centerFiltro">
                            <code>Número de Banheiros</code>
                        </div>
                    </div>
                    <div className="caixa preco">
                        <div className="centerFiltro">
                            <code>Número de m2</code>
                        </div>
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

export default withRouter(Alugar)
