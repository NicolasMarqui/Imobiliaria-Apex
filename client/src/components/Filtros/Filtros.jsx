import React from 'react';
import './Filtros.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Filtros extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            valor: '',
            quartos: 2,
            banheiro: 2,
            vagas: 1,
        }
    }

    selectValues = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    imprimi = () => {
        if(this.state.valor === ''){
            alert('É necessário entrar com um valor de Aluguel')
        }else{
            axios.get(`http://localhost:5000/api/casas/casas?tipo=${this.props.tipo}&quartos=${this.state.quartos}&banheiros=${this.state.banheiro}&valor=${this.state.valor}&vagas=${this.state.vagas}`)
                .then(res => this.props.getData(res.data))
            this.props.history.push(`${this.props.tipo}?quartos=${this.state.quartos}&banheiros=${this.state.banheiro}&valor=${this.state.valor}&vagas=${this.state.vagas}`);
        }
    }

    render(){
        return(
            <React.Fragment>
                <div className="filterWrap">
                    <div className="innerWrapper">
                        <div className="topWrapper">
                            <select>
                                <option value={this.props.tipo}>{this.props.tipo}</option>
                            </select>
                            <input type="text" placeholder="Digite um valor de Aluguel" name="valor" onChange={this.selectValues}/>
                            <select disabled><option value="">Indaiatuba / SP</option></select>
                        </div>
                        <div className="bottomWrapper">
                            <select name="quartos" onChange={this.selectValues}>
                                <option value="" disabled>N° de Quartos</option>
                                <option value="2">2 Quartos</option>
                                <option value="3">3 Quartos</option>
                                <option value="4">4 Quartos</option>
                                <option value="5">Acima de 4 Quartos</option>
                            </select>
                            <select name="banheiro" onChange={this.selectValues}>
                                <option value="" disabled >N° de Banheiros</option>
                                <option value="2">2 Banheiros</option>
                                <option value="3">3 Banheiros</option>
                                <option value="4">4 Banheiros</option>
                                <option value="5">Acima de 4 Banheiros</option>
                            </select>
                            <select name="vagas" onChange={this.selectValues}>
                                <option value="" disabled>N° de Vagas na Garagem</option>
                                <option value="1">1 Vaga</option>
                                <option value="2">2 Vagas</option>
                                <option value="4">4 Vagas</option>
                                <option value="5">Acima de 4 Vagas</option>
                            </select>
                        </div>
                    </div>
                    <button onClick={this.imprimi}>Pesquisar</button>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(Filtros);