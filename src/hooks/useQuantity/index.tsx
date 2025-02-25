import  {useEffect, useState} from 'react';
import {productStore} from "@/state/product/product";

const UseQuantity = (mutate,productId,defaultValue) => {
    const [value, setValue] = useState(1)
    const {variety} = productStore(d => d)


    const handleRemoveFromCart=()=>{
        const formData = new FormData();
        variety.forEach(e => {
            formData.append('product_attribute_' + e.Id, JSON.stringify(e.ValueIds[0]));
        })
        formData.append(`removeFromCart`, JSON.stringify(defaultValue.Id))
        mutate({id: productId, data: formData})
    }

    useEffect(() => {
        if (defaultValue?.Quantity)
            setValue(defaultValue.Quantity)
    }, [defaultValue]);

    const handleChangeQuantity = (value) => {
        if (value > 0 && Number(value))
            setValue(value)
    }

    const changeValue = (value) => {
        const formData = new FormData();
        variety.forEach(e => {
            formData.append('product_attribute_' + e.Id, JSON.stringify(e.ValueIds[0]));
        })
        formData.append(`itemQuantity-${defaultValue.Id}`, JSON.stringify(value))
        mutate({id: productId, data: formData})
    }

    const handlePlus = () => {
        changeValue(value + 1)
    }

    const handleMinus = () => {
        changeValue(value > 1 ? value - 1 : value)
    }
    return {handleMinus,handlePlus,changeValue,handleChangeQuantity,handleRemoveFromCart,value}
};

export default UseQuantity;