import React, { Component } from 'react';
import './Body.css';
import axios from 'axios';
import Destaque from '../Destaque/Destaque'
import { Link } from 'react-router-dom';

export default class Body extends Component {

  constructor(props){
    super(props);

    this.state = {
      destaques: [],
      isDone : false,
      filter: [],
      todasLength: [],
      show: 'hidden',
      scrollTop: 'hidden'
    }
  }

  componentDidMount = () => {
    axios.get('/api/casas/all')
      .then(res => {
        this.setState({ isDone: true , filter: res.data.slice(6,9), todasLength: res.data})
      })

      window.onscroll = () => this.handleScroll();
  }

  show = () => {
    console.log(this.state.destaques[Math.floor(Math.random() * this.state.destaques.length)])
  }

  handleScroll = () => {
    if(document.documentElement.scrollTop > 430){
      this.setState({ show: 'show' , scrollTop: 'fromTop'})
    }else if(document.documentElement.scrollTop > 500){
      this.setState({ scrollTop: 'fromTop' })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="bodyWrapper">
          <div className="item info1">
            <i className="fas fa-fist-raised fa-3x"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti a magni ab dicta quidem ea amet, earum voluptate obcaecati ex?</p>
          </div>
          <div className="item info2">
            <i className="fas fa-key fa-3x"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti a magni ab dicta quidem ea amet, earum voluptate obcaecati ex?</p>
          </div>
          <div className="item info3">
            <i className="fas fa-book-open fa-3x"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti a magni ab dicta quidem ea amet, earum voluptate obcaecati ex?</p>
          </div>
        </div>
        <div className="destaques">
          <div className="title">
            <h1>Em Destaque</h1>
          </div>
          <div className="showDestaques">
          {
            this.state.isDone ? this.state.filter.map((all) => (
                <Destaque 
                  mainImage={all.imagensDaCasa[0]}
                  key={all._id}
                  tipo={all.tipo}
                  valorAluguel={all.valorDoAluguel}
                  prontaParaMudar={all.prontaParaMudar}
                  id={all._id}
                  numeroQuartos={all.numeroDeQuartos}
                  vagasGaragem={all.vagasNaGaragem}
                  numeroBanheiro={all.numeroDeBanheiros}
                  number={this.state.destaques.length}
                  show={this.state.show}/>
            ))
            : <h1 style={{margin: 'auto'}}>Carregando...</h1>
          }
          </div>
        </div>
        <div className="alugarApar">
          <div className={`imageSide ${this.state.scrollTop}`}></div>
          <div className="textSide">
            <div className="alug" >
              <h1>Alugar<br />Apartamentos</h1>
            </div>
            <div className="btnAlugar">
              <button onClick={this.show}><Link to="/apartamentos" style={{color: 'black'}}>Alugar</Link></button>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="contato" id="contato">
          <div className="titleContato">
            <h1>Fale Conosco</h1>
          </div>
          <div className="mainForm">
            <div className="leftSideForm">
              <h1 style={{color: 'white'}}>Quero mandar Email</h1>
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Email"/>
              <textarea name="txt" cols="30" rows="10" placeholder="Sua mensagem" style={{resize:'none'}}></textarea>
              <button >Enviar</button>
            </div>
            <div className="rightSideForm">
              <h1>Quero fazer um orçamento</h1>
              <input type="text" placeholder="Bairro.."/>
              <input type="number" placeholder="N° quartos"/>
              <input type="number" placeholder="N° banheiro"/>
              <input type="number" placeholder="N° vagas na garagem"/>
              <textarea cols="30" rows="10" placeholder="Mensagem Adicional"></textarea>
              <button >Enviar</button>
            </div>
          </div>
        </div>
        <div className="divider"></div>
      </React.Fragment>
    )
  }
}
