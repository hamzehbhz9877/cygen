import React from 'react';
import parse from "html-react-parser";

const Info = ({data}:any) => {
    return (
        <div className="content-product single">
            {/*<h2 className="title">نقد و بررسی</h2>*/}
            {/*<span className="title-desktop">{data.Name}</span>*/}
            {parse(data.FullDescription)}
        </div>
    );
};

export default Info;