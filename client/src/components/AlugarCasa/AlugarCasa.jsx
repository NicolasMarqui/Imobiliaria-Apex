import React from 'react';
import './AlugarCasa.css';
import { Link } from 'react-router-dom';

const AlugarCasa = props => {

    const {id, tipo, mainImage, endereco, valorAluguel, areaTerreno, numeroQuartos, numeroBanheiro, vagasGaragem, numero , isGrid, scrollLeft} = props;

    return (
      <React.Fragment>
        <div className={isGrid ? `showWrapperGrid ${scrollLeft}` : `showWrapper ${scrollLeft}`}>
            <div className="img" style={{'backgroundImage': `url(${mainImage})`, 'backgroundSize': 'cover', 'backgroundPosition': 'center'}}>
            </div>
            <div className={isGrid ? "houseInfoGrid" : "houseInfo"}>
                <div className="houseStatus">
                  <div className="showEnder">
                    <h3>Localizacão: <br/>{endereco}, n°{numero || ''}</h3>
                  </div>
                  <div className="showIcons">
                  <div className="leftSide">
                      <h3 style={{'display': 'inline-block', 'padding': '2%'}}>{numeroQuartos}</h3><i className="fas fa-bed"></i><br></br>
                      <h3>Quartos</h3>
                      <br></br>
                      <h3 style={{'display': 'inline-block', 'padding': '2%'}}>{numeroBanheiro}</h3><i className="fas fa-bath"></i><br></br>
                      <h3>Banheiros</h3>
                    </div>
                    <div className="rightSide">
                      <h3 style={{'display': 'inline-block', 'padding': '2%'}}>{vagasGaragem}</h3><i className="fas fa-warehouse"></i><br></br>
                      <h3>Vagas</h3>
                      <br></br>
                      <h3 style={{'display': 'inline-block', 'padding': '2%'}}>{areaTerreno}</h3><i className="fas fa-square"></i><br></br>
                      <h3>/m²</h3>
                    </div>
                  </div>
                </div>
                <div className="housePricing">
                    <div className={isGrid ? "priceGrid" : "price"}>
                        <p>R$ {tipo === 'alugar' ? `${valorAluguel},00 /mês` : `${valorAluguel},00`}</p>
                    </div>
                    <div className={isGrid ? "buyOrSeeGrid" : "buyOrSee"}>
                        <button><Link to={`/info/${id}`} style={{'color': 'white', 'textDecoration': 'none'}}>Mais Informaçoes</Link></button>
                        <button disabled={true} >{tipo === 'alugar' ? 'Alugar' : 'Comprar'}</button>
                    </div>
                </div>
            </div>
        </div>
      </React.Fragment>
    )
}


export default AlugarCasa;