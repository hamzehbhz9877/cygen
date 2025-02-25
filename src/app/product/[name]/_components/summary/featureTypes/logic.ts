import React, {useEffect} from 'react';
import {productStore} from "@/state/product/product";

const Logic = (data) => {
    const [select, setSelect] = React.useState(data.IsRequired ? data.Values[0].Id : "");
    const {setImage, changeAttributes, changes} = productStore(d => d);

    useEffect(() => {
        const preSelected = data.Values.find(d => d.IsPreSelected)
        if (data.IsRequired && preSelected) {
            setSelect(preSelected.Id);
            if (data.AttributeControlType === 40)
                setImage(preSelected.PictureId);
        }
    }, []);

    useEffect(() => {
        if (!changeAttributes?.disabledattributemappingids?.some(d => d === data.Id)) {
            const find = changes?.find(d => d.Id === data.Id)
            if (find)
                setSelect(find?.ValueIds[0])
        }
    }, [changes]);


    useEffect(() => {
        if (changeAttributes?.disabledattributemappingids?.some(d => d === data.Id)) {
            const preSelected = data.Values.find(d => d.IsPreSelected)
            if (data.IsRequired && preSelected) {
                setSelect(preSelected.Name);
            } else {
                setSelect(0);
            }
        }
    }, [changeAttributes])

    return {select, setSelect};
};

export default Logic;