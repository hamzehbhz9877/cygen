'use client'

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
import {useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {GetDynamicLinkPositionsQuery, GetDynamicLinks} from "@/services/DynamicLink";
import {GetSiteSettingsQuery} from "@/services/Common";


const Footer = () => {

    const {data} = useSuspenseQuery(GetDynamicLinkPositionsQuery)
    const {data:settings} = useSuspenseQuery(GetSiteSettingsQuery)


    return (
        <footer className="footer-s">
            <div className="main-footer">

                <div className="container">
                    <div className="info-boxer">
                        <Logo/>

                        <ScrollToTop/>
                        <TellBox/>
                        <div className="clear"></div>
                    </div>
                    {
                        data.find(d=>d.key===20)?.data.map(d => {
                                return (
                                    <Menu key={d.Id} {...d} childs={settings.FooterTopics.filter(d=>d.IncludeInFooterColumn1)}/>
                                )
                        })
                    }
                    {
                        data.find(d=>d.key===21)?.data.map(d => {
                                return (
                                    <Menu key={d.Id} {...d} childs={settings.FooterTopics.filter(d=>d.IncludeInFooterColumn2)}/>
                                )
                        })
                    }
                    {
                        data.find(d=>d.key===22)?.data.map(d => {
                                return (
                                    <Menu key={d.Id} {...d} childs={settings.FooterTopics.filter(d=>d.IncludeInFooterColumn3)}/>
                                )
                        })
                    }

                    {
                        data.find(d=>d.key===20)?.data.map(d => {
                            return (
                                <MenuMobile key={d.Id} {...d} childs={settings.FooterTopics.filter(d=>d.IncludeInFooterColumn1)}/>
                            )
                        })
                    }
                    {
                        data.find(d=>d.key===21)?.data.map(d => {
                            return (
                                <MenuMobile key={d.Id} {...d} childs={settings.FooterTopics.filter(d=>d.IncludeInFooterColumn2)}/>
                            )
                        })
                    }
                    {
                        data.find(d=>d.key===22)?.data.map(d => {
                            return (
                                <MenuMobile key={d.Id} {...d} childs={settings.FooterTopics.filter(d=>d.IncludeInFooterColumn3)}/>
                            )
                        })
                    }

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