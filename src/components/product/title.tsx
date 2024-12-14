import React from 'react';


type Props={
    title:string
}

const Title = ({title}:Props) => {
    return (
        <div className="index-title-pro archive">
            <h2 className="woocommerce-loop-product_title"><span>{title}</span>
            </h2>
        </div>
    );
};

export default Title;