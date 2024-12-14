'use client'
import React from 'react';
import {ModalBody, ModalHeader} from "@/components/modal";

import "./index.scss"
import {IoCloseOutline} from "react-icons/io5";
import {FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp} from "react-icons/fa";
import Link from "next/link";
import {RiFileCopyFill} from "react-icons/ri";
import {usePathname, useRouter} from "next/navigation";
import {copyToClipboard} from "@/helpers/client";

const Share = ({close}: any) => {

    const pathname=usePathname();

    const [hasCopy, setHasCopy] = React.useState(false);

    return (
        <div className="remodal">
            <ModalHeader>
                <div className="remodal-header">
                    <div className="remodal-title">اشتراک‌گذاری</div>
                    <IoCloseOutline color="#4d4d4d" role={"button"} size={26} onClick={close}/>
                </div>
            </ModalHeader>
            <ModalBody>
                <div>
                    <span className="text-share_modal">با استفاده از روش‌های زیر می‌توانید این صفحه را با دوستان خود به اشتراک بگذارید. </span>

                    <div className="border-top border-bottom py-3">

                        <div className="socials_btns btn-primary copy-url-btn" onClick={() => {
                            setHasCopy(true)
                            copyToClipboard(`https://cygenv.vercel.app`+pathname)
                            setTimeout(() => setHasCopy(false), 1000)
                        }}>
                            <RiFileCopyFill color={"#878787"} className={"me-2"}/>
                                {hasCopy ? 'کپی شد' : 'کپی لینک'}
                        </div>
                        <ul className="items-center">
                            <li className="telegram_socal"><Link target="_blank"
                                                                 href={`https://telegram.me/share/url?url=https://cygenv.vercel.app${pathname}`}
                                                                 className="inline-flex">
                                <div>
                                    <FaTelegram color={'#3fade4'} size={28}/>
                                </div>
                            <span>تلگرام</span>
                            </Link>
                            </li>
                            <li className="whatsapp_socal"><Link target="_blank"
                                                                 href={`https://api.whatsapp.com/send/?phone&text=https://cygenv.vercel.app${pathname}`}
                                                                 className="inline-flex">
                                <div>
                                    <FaWhatsapp color={"#25d366"} size={28}/>
                                </div>
                            <span>واتساپ</span>
                            </Link>
                            </li>
                            <li className="twitter_socal"><Link target="_blank"
                                                                href={`https://twitter.com/intent/tweet?url=https://cygenv.vercel.app${pathname}`}
                                                                className="inline-flex">
                                <div>
                                    <FaTwitter color={'#00acee'}  size={28}/>
                                </div>
                            <span>تویتر</span>
                            </Link>
                            </li>
                            <li className="instagram_socal"><Link target="_blank"
                                                                href={`https://www.instagram.com/?url=https://cygenv.vercel.app${pathname}`}
                                                                className="inline-flex">
                                <div>
                                    <FaInstagram color={'#FD1D1D'} size={28}/>
                                </div>
                            <span>اینستاگرام</span>
                            </Link>
                            </li>
                        </ul>


                    </div>

                </div>
            </ModalBody>
        </div>

    );
};

export default Share;