import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './Info.css';

import axios from 'axios';

export default class Info extends Component {

    constructor(props){
        super(props);

        this.state = {
            currentInfo: [],
        }
    }

    componentDidMount = () => {
        axios.get(`http://localhost:5000/api/casas/info/${this.props.match.params.id}`)
            .then(res => this.setState({ currentInfo: res.data }))
            .catch(err => console.log(err))
    }

  render() {
    return (
      <React.Fragment>
        <div className="mainWrapper">
            <Nav color="white" />
            {
                this.state.currentInfo.map(cr => (
                    <div className="secondWrapper">
                        <div className="images" style={{'backgroundImage': `url(${cr.imagensDaCasa[0]})`, 'backgroundPosition': 'center', 'backGroundRepeat': 'no-repeat', 'backgroundSize': 'cover'}}>
                        </div>
                        <div className="info">
                          <div className="centerInfo">
                            
                          </div>
                        </div>
                    </div>
                ))
            }
        </div>
      </React.Fragment>
    )
  }
}
