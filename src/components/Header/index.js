import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import Logo from '../../assets/logo.png';

const Header = () => {

   
    return (
        <div className="container">
          <div className="headerWrapper">
                <header>
                    <div className="namePage">
                        <Link to="/">
                            <img src={Logo} alt="logo"/>
                            <h1>Best Motors </h1>
                        </Link>
            
                    </div>

                    <div className="itemHeader">
                        <Link to="/offers" >Ofertas</Link>
                        <Link to="/admin">Administração</Link>
                    </div>
                   
                </header>
            </div>
        </div>
  );
}

export default Header;