

import {create} from "zustand";


type Store = {
    image: number|null
    setImage: (id:number) => void,
    tabsActive:string,
    setActiveTab:(id:string)=>void
    setProductNotFound:(d:boolean)=>void
    setInStock:(d:boolean)=>void
    setCombinationId:(did:number)=>void
    setVariety:(data:any)=>void
    setChangeAttributes:(data:any)=>void
    setShoppingCart:(data:any)=>void
    shoppingCart:any
    productNotFound:boolean,
    changeAttributes:any
    variety:any
    combinationId:number
    inStock:boolean
    changes:Array<any>
    setChanges:(data:any)=>void
}


export const productStore=create<Store>((set,getState) => ({
    image: null,
    tabsActive:'',
    shoppingCart: null,
    changes:[],
    productNotFound:false,
    variety:[],
    combinationId:null,
    changeAttributes:{},
    inStock:true,
    setChanges: (d) => {
        set({changes:d })
    },
    setCombinationId: (combinationId) => {
        set({combinationId })
    },
    setProductNotFound: (d) => {
        set({productNotFound:d })
    },
    setShoppingCart: (data) => {
        set({shoppingCart:data })
    },
    setImage: (id) => {
        set({image: id})
    },
    setInStock: (inStock) => {
        set({inStock})
    },
    setActiveTab: (id) => {
        set({tabsActive: id})
    },
    setVariety: (data) => {
        set({variety: data,changes:data})
    },
    setChangeAttributes: (data) => {
        set({changeAttributes: data})
    },
}))

