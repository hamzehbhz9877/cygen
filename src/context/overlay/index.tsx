'use client'

import React, {createContext, FC, ReactNode, useState} from "react";


type Overlay = {
    toggleOverlay: (isOpened:boolean) => void,
    classname: (data:string) => void,
    isOpen:boolean
}

export const OverlayProvider = createContext({} as Overlay);

type Props = {
    children: ReactNode
}

const OverlayContext= ({children}:Props) => {

    const [isOpen,setIsOpen]=useState(false)
    const [classname,setClassName]=useState("")

    return (
        <OverlayProvider.Provider
            value={{
                toggleOverlay: (isOpened)=>setIsOpen(isOpened),
                isOpen,
                classname:(data)=>setClassName(data)
            }}
        >
            {children}
           <div className={`overlay ${isOpen?"open":""} ${classname}`}></div>
        </OverlayProvider.Provider>
    );
};

export default OverlayContext;