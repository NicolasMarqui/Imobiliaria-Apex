import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './Info.css';
import axios from 'axios';

export default class Info extends Component {

    constructor(props){
        super(props);

        this.state = {
            currentInfo: [],
            isDone: false,
        }
    }

    componentDidMount = () => {
        axios.get(`http://localhost:5000/api/casas/info/${this.props.match.params.id}`)
            .then(res => this.setState({ currentInfo: res.data, isDone: true }))
            .catch(err => console.log(err))
    }

  render() {
    return (
      <React.Fragment>
        <div className="mainWrapper">
            <Nav color="white" />
            {
                this.state.currentInfo.map(cr => (
                    <div className="secondWrapper" key={cr._id}>
                        <div className="images" style={{'backgroundImage': `url(${cr.imagensDaCasa[0]})`, 'backgroundPosition': 'center', 'backGroundRepeat': 'no-repeat', 'backgroundSize': 'cover'}}>
                        </div>
                        <div className="info">
                          <div className="centerInfo">
                            <div className="mainDiv" key={cr._id}>
                              <div className="ender">
                                <h2>{cr.endereco.charAt(0).toUpperCase() + cr.endereco.slice(1)}</h2><br/>
                                <h5>Indaiatuba/sp</h5>
                              </div>
                              <div className="outrasInfo">
                                <div className="leftSide">
                                  <h3 style={{'display': 'inline-block', 'padding': '2%'}}>{cr.numeroDeQuartos}</h3><i className="fas fa-bed"></i><br></br>
                                  <h3>Quartos</h3>
                                  <br></br>
                                  <h3 style={{'display': 'inline-block', 'padding': '2%'}}>{cr.numeroDeBanheiros}</h3><i className="fas fa-bath"></i><br></br>
                                  <h3>Banheiros</h3>
                                </div>
                                <div className="rightSide">
                                  <h3 style={{'display': 'inline-block', 'padding': '2%'}}>{cr.vagasNaGaragem}</h3><i className="fas fa-warehouse"></i><br></br>
                                  <h3>Vagas</h3>
                                  <br></br>
                                  <h3 style={{'display': 'inline-block', 'padding': '2%'}}>{cr.areaDoTerreno}</h3><i className="fas fa-square"></i><br></br>
                                  <h3>/m²</h3>
                                </div>
                              </div>
                              <div className="arrowDown">
                                <i className="fas fa-arrow-down fa-2x"></i>
                              </div>
                            </div> 
                          </div>
                        </div>
                    </div>
                ))
            }
            <div className="showInfoPrice">
              {
                this.state.isDone ? 

                this.state.currentInfo.map(price => (
                  <React.Fragment key={price._id}>
                    <div className="dummyText itemInfo">
                      <h1>Uma bela<br></br>casa</h1>
                    </div>
                    <div className="infoCasa itemInfo">
                      <p>{price.descricao}</p>
                    </div>
                    <div className="precoCasa itemInfo">
                      <h5>Valor de</h5><br/>
                      <p>R$: {price.tipo === 'alugar' ? `${price.valorDoAluguel},00/mês` : `${price.valorDoAluguel},00` }</p>
                    </div>
                  </React.Fragment>
                ))

                :

                ''
              }
            </div>
        </div>
      </React.Fragment>
    )
  }
}
