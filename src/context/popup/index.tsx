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

export const Popup = createContext({} as any);

type Props = {
    children: ReactNode
}


const GeneralPopup = ({children}: Props) => {


    const {data} = useSuspenseQuery(PopupQuery)
    const {data: getpopup} = useSuspenseQuery(GetPopupQuery)

    return (
        <Popup.Provider
            value={{}}
        >
            {children}
           <Lightbox data={getpopup[1]}/>
           {/*<SlideIn data={getpopup[0]}/>*/}
        </Popup.Provider>
    );
};

export default GeneralPopup;