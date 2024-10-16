'use client'

import React, {createContext, FC, ReactNode} from "react";
import {Modal} from "@/components/modal";
import useModal from "@/hooks/useModal";


type Modal = {
    openModal: (data: React.ReactNode, options?:any) => void,
    closeModal:()=>void
}

export const ModalProvider = createContext({} as Modal);

type Props = {
    children: ReactNode
}

const ModalContext= ({children}:Props) => {
    const {isModalOpen, handleClose, handleOpen, modalData, options} = useModal();

    return (
        <ModalProvider.Provider
            value={{
                openModal: handleOpen,
                closeModal: handleClose
            }}
        >
            {children}
            <Modal
                options={options}
                showModal={isModalOpen}
                close={handleClose}
                children={modalData}
            />
        </ModalProvider.Provider>
    );
};

export default ModalContext;