'use client'

import React, {createContext, ReactNode, useEffect, useRef, useState} from "react";
import {useSuspenseQuery} from "@tanstack/react-query";
import {GetPopupQuery, PopupQuery} from "@/services/Popup";
import Image from "next/image";
import useClickOutside from "@/hooks/useOutsideClick";
import Cookie from "universal-cookie";
import Lightbox from "@/context/popup/lightbox";

import "./index.scss"
import SlideIn from "@/context/popup/slidein";
import {GetAllActivePluginsQuery} from "@/services/Plugin";

export const Popup = createContext({} as any);

type Props = {
    children: ReactNode
}


const GeneralPopup = ({children}: Props) => {


    const {data: getpopup} = useSuspenseQuery(GetPopupQuery)
    const {data:widget}=useSuspenseQuery(GetAllActivePluginsQuery)

    return (
        <Popup.Provider
            value={{}}
        >
            {children}
            {widget.includes('Widgets.Popup')?
         <>
             <Lightbox data={getpopup[1]}/>
             {/*<SlideIn data={getpopup[0]}/>*/}
         </>:""}
        </Popup.Provider>
    );
};

export default GeneralPopup;