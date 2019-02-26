import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import AlugarCasa from '../AlugarCasa/AlugarCasa';

import './Search.css'

export default class Search extends Component {

    constructor(props){
        super(props);

        this.state = {
            search: [],
        }
    }

    componentDidMount = () => {
        axios.get(`http://localhost:5000/api/casas/search/${this.props.match.params.name}`)
            .then(res => this.setState({ search: res.data }))
            .catch(err => console.log(err))
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
                            id={house._id}/>
                        ))
                    }
                </div>
            </div>
          </div>
      </React.Fragment>
    )
  }
}
