import React from 'react';

import './styles.css';

import { HomeOutlined, BankFilled, HeartOutlined, PhoneOutlined, UserOutlined, FacebookFilled, InstagramFilled, TwitterCircleFilled} from '@ant-design/icons';

const Footer = () => {
  return (

    <div className="ContainerFooter">

            <div className="TextFooter">
                <p> Somos líderes em preços baixos e estamos pronto para recebê-los e mostrar o melhor catálogo de ofertas do mercado. </p>
            </div>
            
            <div className="SocialMidiaFooter">
                <div className="ItemMidia">
                    <FacebookFilled />
                    <span>Facebook</span>
                </div>
                <div className="ItemMidia">
                    <InstagramFilled />
                    <span>Instagram</span>
                </div>
                <div className="ItemMidia">
                    <TwitterCircleFilled />
                    <span>Twitter</span>
                </div>

                <div className="ItemMidia">
                    <BankFilled />
                    <span>Picpay</span>
                </div>

            </div>
            
            <div className="Menu">
                <div className="ItemMenu">
                    <HomeOutlined />
                    <span>Início</span>
                </div>
                <div className="ItemMenu">
                    <HeartOutlined />
                    <span>Ofertas</span>
                </div>
                <div className="ItemMenu">
                    <UserOutlined />
                    <span>Administração</span>
                </div>
                <div className="ItemMenu">
                    <PhoneOutlined />
                    <span>Contato</span>
                </div>
            </div>

       
        
    </div>
     
  );
}

export default Footer;