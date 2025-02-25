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
import {findKey} from "@/helpers/client";


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
                            findKey(20,data)?.map(d => {
                                return (
                                    <Menu key={d.Id} {...d} childs={[...findKey(20,data),...settings.FooterTopics.filter(d=>d.IncludeInFooterColumn1)]}/>
                                )
                            })
                        }
                        {
                           findKey(21,data)?.map(d => {
                                return (
                                    <Menu key={d.Id} {...d} childs={[...findKey(21,data),...settings.FooterTopics.filter(d=>d.IncludeInFooterColumn2)]}/>
                                )
                            })
                        }
                        {
                            findKey(22,data)?.map(d => {
                                return (
                                    <Menu key={d.Id} {...d} childs={[...findKey(22,data),...settings.FooterTopics.filter(d=>d.IncludeInFooterColumn3)]}/>
                                )
                            })
                        }

                        {
                            findKey(20,data)?.map(d => {
                                return (
                                    <MenuMobile key={d.Id} {...d} childs={[...findKey(20,data),...settings.FooterTopics.filter(d=>d.IncludeInFooterColumn1)]}/>
                                )
                            })
                        }
                        {
                           findKey(21,data)?.map(d => {
                                return (
                                    <MenuMobile key={d.Id} {...d} childs={[...findKey(21,data),...settings.FooterTopics.filter(d=>d.IncludeInFooterColumn2)]}/>
                                )
                            })
                        }
                        {
                            findKey(22,data)?.map(d => {
                                return (
                                    <MenuMobile key={d.Id} {...d} childs={[...findKey(22,data),...settings.FooterTopics.filter(d=>d.IncludeInFooterColumn3)]}/>
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