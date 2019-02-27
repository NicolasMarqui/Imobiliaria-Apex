import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import AlugarCasa from '../AlugarCasa/AlugarCasa';
import queryString from 'query-string';

import './Search.css'

export default class Search extends Component {

    constructor(props){
        super(props);

        this.state = {
            search: [],
        }
    }

    componentDidMount = () => {

        console.log('this.props.location.search = ' + this.props.location.search)
        const values = queryString.parse(this.props.location.search);

        axios.get(`http://localhost:5000/api/casas/search/${this.props.match.params.name}?tipo=${values.tipo}`)
            .then(res => this.setState({ search: res.data }))
            .catch(err => console.log(err))

            console.log(queryString.parse(this.props.location.search))
    }

  render() {
    return (
      <React.Fragment>
          <Nav color="white"/>
          <div className="wrapper">
            <div className="mainResults">
                <div className="sideDiv">
                
                </div>
                <div className="mainDiv">
                    {
                        this.state.search.length === 0 ? <h1>Nenhuma casa encontrada</h1>
                        : this.state.search.map(house => (
                            <AlugarCasa 
                            valorAluguel={house.valorDoAluguel}
                            mainImage={house.imagensDaCasa[0]}
                            key={house._id}
                            id={house._id}
                            tipo={house.tipo}/>
                        ))
                    }
                </div>
            </div>
          </div>
      </React.Fragment>
    )
  }
}
