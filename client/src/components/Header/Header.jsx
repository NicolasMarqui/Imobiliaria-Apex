import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './Header.css';
import { withRouter } from 'react-router-dom';

class Header extends Component {

  constructor(props){
    super(props);

    this.state = {
      bairro: '',
      selectedValue: 'alugar',
    }
  }

  handleBairro = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  goToSearch = () => {

    if(this.state.bairro !== ''){
      this.props.history.push(`/search/${this.state.bairro.toLowerCase()}/?tipo=${this.state.selectedValue}`)
    }else{
      return false;
    }
  }

  handleTipo = e => {
    this.setState({ selectedValue: e.target.value })
    console.log(this.state.selectedValue)
  }

  render() {
    return (
      <div className="headerWrap">
        <Nav color="transparent"/>
        <div className="overlay"></div>
        <div className="centerText">
            <h1>Procure<br />sua nova <br />casa</h1>
            <br/>
            <input type="text" placeholder="Digite um bairro..." value={this.state.bairro} onChange={this.handleBairro} name="bairro"/>
            <select name="Venda" value={this.state.selectedValue} onChange={this.handleTipo}>
                <option value="alugar">Aluguel</option>
                <option value="venda">Venda</option>
            </select>
            <button onClick={this.goToSearch}>Procure</button><br/>
            <p>E.g Morada do Sol, Vila Avai..</p>
        </div>
      </div>
    )
  }
}

export default withRouter(Header);