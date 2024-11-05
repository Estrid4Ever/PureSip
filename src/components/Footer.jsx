import React from 'react';
import logo from '../assets/images/image.png';  // Importera bilden korrekt
import { Link } from 'react-router-dom';

export default function Footer() {

    function scrollToElement(className) {

        setTimeout(()=> {
            const mainCard = document.getElementsByClassName(className)[0];
    
            if (mainCard) {
                const y = mainCard.getBoundingClientRect().top + window.scrollY;
                window.scroll({
                    top: y,
                    behavior: 'smooth'
                });
            }

        }, 300)


    };

    return (
        <footer className="footer">
            <div className="subscription">
                <h3>Bli prenumerant hos PureSip!</h3>
                <p>Få drinkrecept och exklusiva erbjudanden direkt till din mail.</p>
                <form className="subscription-form">
                    <input type="email" placeholder="E-postadress" />
                    <input type="tel" placeholder="+46 Mobilnummer" />
                    <button type="submit">Börja prenumerera</button>
                </form>
                <p>Genom att anmäla dig godkänner du PureSip:s <Link onClick={scrollToElement("terms-container")} to={"/terms"}>allmänna villkor</Link> 
                och <Link onClick={scrollToElement("privacy-container")} to={"/privacy"}>integritetspolicy</Link>.</p>
            </div>
            <div className="footer-info">
                <div className="company-info">
                    <img src={logo} alt="PureSip logo" className="logo" />
                    <p>PureSip</p>
                    <p>Trekantsvägen 1, 117 43 Stockholm</p>
                    <p><a href="mailto:info@iths.se">info@iths.se</a></p>
                </div>
                <div className="footer-links">
                    <Link onClick={scrollToElement("about-container")} to={"/about"} >Om PureSip</Link>
                    <Link onClick={scrollToElement("terms-container")} to={"/terms"} >Allmänna villkor</Link>
                    <Link onClick={scrollToElement("privacy-container")} to={"/privacy"} >Personuppgiftspolicy</Link>
                </div>
                <div className="social-media">
                    <a href="https://www.facebook.com/ITHogskolan" target="_blank" rel="noopener noreferrer" className="fab fa-facebook"></a>
                    <a href="https://www.instagram.com/ithogskolan/" target="_blank" rel="noopener noreferrer" className="fab fa-instagram"></a>
                </div>
            </div>
        </footer>
    );
}

