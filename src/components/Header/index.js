import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import Logo from '../../assets/logo.png';
import { MenuOutlined } from '@ant-design/icons';

const Header = () => {

    function handleToggle() {
        if(window.toggleActiveMenu) {
            window.toggleActiveMenu();
        }
    }

    return (
        <div className="container">
          <div className="headerWrapper">
                <header>
                    
                    <Link to="/"><img src={Logo} alt="logo"/></Link>

                    <div className="itemHeader">
                        <Link to="/offers" >Ofertas</Link>
                        <Link to="/admin">Administração</Link>
                    </div>
                    <button onClick={handleToggle}><MenuOutlined /></button>
                </header>
            </div>
        </div>
  );
}

export default Header;