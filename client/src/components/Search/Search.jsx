import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import AlugarCasa from '../AlugarCasa/AlugarCasa';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

import './Search.css'

export default class Search extends Component {

    constructor(props){
        super(props);

        this.state = {
            search: [],
            isReady: false,
        }
    }

    componentDidMount = () => {
        const values = queryString.parse(this.props.location.search);

        axios.get(`http://localhost:5000/api/casas/search/${this.props.match.params.name}?tipo=${values.tipo}`)
            .then(res => this.setState({ search: res.data , isReady: true}))
            .catch(err => console.log(err))

            console.log(this.state.search)
    }

  render() {

    const values = queryString.parse(this.props.location.search);
    return (
      <React.Fragment>
          <Nav color="white"/>
          <div className="wrapper">
            <div className="mainResults">
                <div className="mainDiv">
                    <p>{this.state.search.length} resultado(s) encontrados para: 
                    <br/>
                    {values.tipo} => {this.props.match.params.name}
                    </p>
                    {
                        this.state.isReady && this.state.search.length === 0 ? <h1>Nenhuma casa encontrada</h1>
                        : this.state.isReady ? this.state.search.map(house => (
                            <AlugarCasa 
                            valorAluguel={house.valorDoAluguel}
                            mainImage={house.imagensDaCasa[0]}
                            key={house._id}
                            id={house._id}
                            areaTerreno={house.areaDoTerreno}
                            numeroQuartos={house.numeroDeQuartos}
                            numeroBanheiro={house.numeroDeBanheiros}
                            vagasGaragem={house.vagasNaGaragem}
                            endereco={house.endereco}
                            numero={house.numeroDaCasa}
                            tipo={house.tipo}/>
                        ))

                        : 

                        <h1>Carregando...</h1>
                    }
                    <p>{this.state.search.length}/ {this.state.search.length}</p>
                    <br/><br/><br/>
                    <Link to="/"><i className="fas fa-arrow-left fa-2x"></i></Link>
                </div>
            </div>
          </div>
          <Footer />
      </React.Fragment>
    )
  }
}
