'use client'

import React, {Ref, useEffect} from 'react';

const UseAnimatedNavigation = (menuRef,borLineRef) => {

    useEffect(() => {
        const list = menuRef.current?.querySelectorAll('li')
        list.forEach(d => {
            d.addEventListener('mouseenter', () => {
                borLineRef.current.style.right = menuRef.current?.offsetWidth - d.offsetLeft - d.offsetWidth + "px"
                borLineRef.current.style.width = d.offsetWidth + "px"
                borLineRef.current.style.visibility = 'visible'
                borLineRef.current.style.opacity = 1
            })
            d.addEventListener('mouseleave', () => {
                borLineRef.current.style.right = 0 + "px"
                borLineRef.current.style.width = d.offsetWidth + "px"
                borLineRef.current.style.visibility = 'hidden'
                borLineRef.current.style.opacity = 0
            })
        })

    }, [])
};

export default UseAnimatedNavigation;