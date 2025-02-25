'use client'

import React, {useEffect, useRef, useState} from 'react';
import useOverlay from "@/context/overlay/useOverlay";
import useClickOutside from "@/hooks/useOutsideClick";

const UseSlideInModal = () => {
    const {toggleOverlay, classname} = useOverlay()

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        classname("!z-[100]")
        return () => {
            classname("!z-[1]");
        }
    }, [])

    const moreRef = useRef<any>(null)

    const handleMore = () => {
        setIsOpen(true)
        toggleOverlay(true)
    }

    const close = () => {
        setIsOpen(false)
        toggleOverlay(false)
    }
    useClickOutside(moreRef, () => {
        if (isOpen)
            close()
    })
    return {
        handleMore, isOpen, close,moreRef
    }
};

export default UseSlideInModal;