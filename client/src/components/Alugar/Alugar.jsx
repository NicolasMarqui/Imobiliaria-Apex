import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './Alugar.css';
import axios from 'axios';
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
            isDone: false,
            scrollLeft: 'hidden'
        }
    }

    authenticate(){
      return new Promise(resolve => setTimeout(resolve, 2000))
    }

    // Paginator = (items, page, per_page) => {
    //   let pages = page || 1;
    //   let per_pages = per_page || 4;
    //   let offset = (pages - 1) * per_pages;

    //   let paginatedItems = items.slice(offset).slice(0, per_pages);
    //   let totalPages = Math.ceil(items.length / per_pages);

    //   return{
    //     total_pages: totalPages,
    //     data: paginatedItems
    //   }
    // }

    componentDidMount = () =>{
        // axios.get(`http://localhost:5000/api/casas/tipos/${this.props.match.params.tipo}`)
        //   .then(res => 
        //     {this.setState({all: res.data, casas: this.Paginator(res.data,1 , 4), isDone: true}) 
        //     console.log(this.state.casas.data)
        //   })

          axios.get(`/api/casas/tipos/${this.props.match.params.tipo}`)
          .then(res => 
            {this.setState({casas: res.data, isDone: true}) 
          })

          this.props.history.push(`/casas/alugar`)

          this.authenticate().then(() => {
            const ele = document.getElementById('ipl-progress-indicator')
            if(ele){
              // fade out
              ele.classList.add('available')
              setTimeout(() => {
                // remove from DOM
                ele.outerHTML = ''
              }, 2000)
            }
          })
      }


      getFilters = arr => {
          this.setState({ casas: arr, temCoisa: true })
      }

      clean = () => {
        axios.get(`/api/casas/tipos/alugar`)
        .then(res => this.setState({ casas: res.data }))
        .catch(err => console.log(err))

        this.setState({ temCoisa: false , numQuarto: false})

        this.props.history.push(`/casas/alugar`)
      }

      // changePage = e => {
      //   e.persist();
      //   if(this.state.casas.total_pages < e.target.id){
      //     this.setState({ isDisabled: true })
      //   }else{
      //     axios.get(`http://localhost:5000/api/casas/tipos/${this.props.match.params.tipo}`)
      //     .then(res => this.setState({casas: this.Paginator(res.data, parseInt(e.target.id) ), isDone: true, isDisabled: false}))

      //     this.props.history.push(`/casas/alugar?page=${e.target.id}`)
      //   }
      // }

      // returnOne = () => {
      //   this.setState({ isDisabled: false });
      //   axios.get(`http://localhost:5000/api/casas/tipos/${this.props.match.params.tipo}`)
      //     .then(res => this.setState({casas: this.Paginator(res.data, 1), isDone: true, isDisabled: false}))

      //     this.props.history.push(`/casas/alugar?page=1`)
      // }

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
                       this.state.isDone && this.state.casas.length === 0  ? <h1 style={{margin: 'auto'}}>Nenhuma casa Encontrada</h1>
                       :

                      //  this.state.isDisabled ? 

                      //  <div style={{margin: 'auto'}}>
                      //    <h1>Nenhuma casa encontrada</h1>
                      //    <button onClick={this.returnOne}>Página 1</button>
                      //  </div>

                      //  :

                       this.state.isDone ? 

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
                         isGrid={this.state.isGrid}
                         scrollLeft={this.state.scrollLeft}/>
                    ))

                    :

                    <h1 style={{margin: 'auto'}}>Carregando...</h1>
                   }
                </div>
            </div>
        </div>
        {/* <div className="pagination">
          <div className="centerPagination">
              <button id="1" onClick={(e) => this.changePage(e)}>1</button>
              <button id="2" onClick={(e) => this.changePage(e)}>2</button>
              <button id="3" onClick={(e) => this.changePage(e)}>3</button>
          </div>
        </div> */}
        <Footer show={this.state.scrollLeft}/>
      </React.Fragment>
    )
  }
}

export default withRouter(Alugar)
