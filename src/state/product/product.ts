

import {create} from "zustand";


type Store = {
    image: number|null
    setImage: (id:number) => void,
    tabsActive:string,
    setActiveTab:(id:string)=>void
    setProductNotFound:(d:boolean)=>void
    productNotFound:boolean
}

export const productStore=create<Store>((set) => ({
    image: null,
    tabsActive:'',
    productNotFound:false,
    setProductNotFound: (d) => {
        set({productNotFound:d })
    },
    setImage: (id) => {
        set({image: id})
    },
    setActiveTab: (id) => {
        set({tabsActive: id})
    },
}))

