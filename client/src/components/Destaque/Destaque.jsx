import React from 'react';
import './Destaque.css';
import { Link } from 'react-router-dom';

 const Default = props => {

    const {id,  mainImage, tipo, valorAluguel , numeroQuartos, numeroBanheiro, vagasGaragem, prontaParaMudar , show} = props;

  return (
    <React.Fragment>
        <div className={`wdestWrapper ${show}`}>
            <div className="newImg" style={{'backgroundImage': `url(${mainImage})`, 'backgroundSize': 'cover', 'backgroundPosition': 'center'}}></div>

            <div className="info">
                <div className="titleInfo">
                    <h2>Disponivel para <code style={{'borderBottom': '2px solid red'}}>{tipo}</code></h2>
                    <h2>Valor: R$ {tipo === 'alugar' ? `${valorAluguel},00/mês` : `${valorAluguel},00`}</h2>
                </div>
                <div className="arrow">
                <i className="fas fa-arrow-right fa-2x arrow-right"></i>
                </div>
                <div className="infoQuartos">
                <div className="item attr1"><h5>{numeroQuartos} quartos</h5><i className="fas fa-bed "></i></div>
                <div className="item atrr2"><h5>{vagasGaragem} vagas</h5><i className="fas fa-warehouse "></i></div>
                <div className="item atrr3"><h5>{numeroBanheiro} banheiros</h5><i className="fas fa-bath"></i></div>
                <div className="item atrr4"><h5>{prontaParaMudar ? "Obra Finalizada" : "Obra em Construção"}</h5>
                {prontaParaMudar ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}</div>
                </div>
                <div className="buttons">
                    <Link to={`/info/${id}`}><button>Descubra mais</button></Link>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}


export default Default;
                
                