import React from 'react';
import './Nav.css';
import menu from '../../assets/menu.png';
import { Link , withRouter} from 'react-router-dom';
import menuClose from '../../assets/colorClose.png';

class Nav extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isOpen: false,
    }
  }
  render(){

    const { color } = this.props;

    return (
      <React.Fragment>
        <div className="navWrapper" style={{'backgroundColor': `${color}`}}>
          <div className="logoText">
            <Link to="/"><h1 style={{'color': 'black'}}>Apex<span>.</span></h1></Link>
            <hr/>
          </div>
          <div className="navMenu">
            <img src={menu} alt="menu" height="40x" width="auto" onClick={() => this.setState({ isOpen: true })}/>
          </div>
          <div className="navItems">
            <ul>
                <Link className="item" to="/" style={{'color': 'black'}}><li>Home</li></Link>
                <Link className="item" to="/casas/alugar" style={{'color': 'black'}}><li>Alugar</li></Link>
                <Link className="item" to="/casas/novo/venda" style={{'color': 'black'}}><li>Comprar</li></Link>
                <li><a href="_" className="redBg">Contato</a></li>
            </ul>
          </div>
      </div>
      <div className="fullNav" style={this.state.isOpen ? {'display': 'flex'} : {'display': 'none'}}>
        <img src={menuClose} alt="close" onClick={() => this.setState({ isOpen: false })}/>
        <div className="centerNav">
           <ul>
                <Link to="/" style={{'color': 'white'}}><li>Home</li></Link>
                <Link to="/casas/alugar" style={{'color': 'white'}}><li>Alugar</li></Link>
                <Link to="/casas/novo/venda" style={{'color': 'white'}}><li onClick={this.changePage}>Comprar</li></Link>
                {/* <li><a href="_" className="redBg">Contato</a></li> */}
            </ul>
        </div>
      </div>
      </React.Fragment>
  
    )
  }
}

export default withRouter(Nav)