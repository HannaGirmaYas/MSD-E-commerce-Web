import React from 'react'
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


const Footer = () => {
    return (
        <footer className="py-3 mt-3 text-white">
            <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-12 text-center">
            <h2 className="footer-heading"><Link to={'/'}>Abyssinia.com</Link></h2>
            <p className="d-flex mx-auto col-sm-6 justify-content-between">
                <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/vendors'}>Vendors</Link>
                <Link to={'/register'}>Sign Up</Link>
                <Link to={'/signin'}>Login</Link>
            
            </p>
            <ul className="ftco-footer-social p-0">
                <InstagramIcon className="m-2" />  
                 <TelegramIcon className="m-2"/>
                 <WhatsAppIcon className="m-2"/>
            </ul>
            </div>
            </div>
            <div className="row mt-2">
            <div className="col-md-12 text-center">
            <p className="copyright">
            Copyright © 2022 All rights reserved 
            </p>
            </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer
