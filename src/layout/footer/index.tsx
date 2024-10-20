
import React from 'react';

import ScrollToTop from "@/layout/footer/scrollToTop";
import Logo from "@/layout/footer/logo";
import TellBox from "@/layout/footer/tellBox";
import Menu from "@/layout/footer/menu";
import MailBox from "@/layout/footer/mailBox";
import App from "@/layout/footer/app";
import About from "@/layout/footer/about";
import Copyright from "@/layout/footer/copyright";


// css
import "./index.scss"
import MenuMobile from "@/layout/footer/menuMobile";


const Footer = () => {
    return (
        <footer className="footer-s ">


            <div className="main-footer">

                <div className="container">
                    <div className="info-boxer">
                        <Logo/>

                        <ScrollToTop/>
                        <TellBox/>
                        <div className="clear"></div>
                    </div>
                    <Menu/>
                    <Menu/>
                    <Menu/>
                    <MenuMobile/>
                    <MenuMobile/>
                    <MenuMobile/>
                    <MailBox/>
                    <div className="clear"></div>
                    <App/>
                    <About/>
                    <div className="clear"></div>
                    <span className="line-foot"></span>
                    <Copyright/>
                </div>

            </div>
        </footer>
    );
};

export default Footer;