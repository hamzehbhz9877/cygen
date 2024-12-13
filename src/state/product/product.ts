

import {create} from "zustand";


type Store = {
    image: number|null
    setImage: (id:number) => void,
    tabsActive:string,
    setActiveTab:(id:string)=>void
}

export const productStore=create<Store>((set) => ({
    image: null,
    tabsActive:'',
    setImage: (id) => {
        set({image: id})
    },
    setActiveTab: (id) => {
        set({tabsActive: id})
    },
}))

