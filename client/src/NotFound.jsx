import React from 'react';
import Nav from './components/Nav/Nav'

class NotFound extends React.Component {

    authenticate(){
        return new Promise(resolve => setTimeout(resolve, 1000))
      }

      componentDidMount = () =>{
          this.authenticate().then(() => {
            const ele = document.getElementById('ipl-progress-indicator')
            if(ele){
              // fade out
              ele.classList.add('available')
              setTimeout(() => {
                // remove from DOM
                ele.outerHTML = ''
              }, 1000)
            }
          })
      }

    render(){
        return(
            <React.Fragment>
                <Nav color="white" />
                <div className="notWrapper">
                    <div className="centerText404">
                        <h1>404</h1>
                        <p>Ops...parece que a página não existe</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default NotFound;