import React from 'react';
import './Footer.css';

const Footer = (props) => {
    return(
        <React.Fragment>
            <div className={`footerWrapper ${props.scrollLeft}`}>
                <i className="fab fa-facebook-square fa-2x"></i>
                <i className="fab fa-twitter fa-2x"></i>
                <i className="fab fa-instagram fa-2x"></i>
                <p style={{color: '#fff'}}>&copy; Nicolas Marqui</p>
            </div>
        </React.Fragment>
    )
}

export default Footer;