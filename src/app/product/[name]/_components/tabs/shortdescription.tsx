import React from 'react';
import parse from "html-react-parser";

const ShortInfo = ({data}:any) => {
    return (
        <div className="content-product single">
            <h2 className="title">معرفی</h2>
            <span className="title-desktop">{data.Name}</span>
            {data.ShortDescription ? parse(data.ShortDescription) : ""}
        </div>
    );
};

export default ShortInfo;