import React from 'react';


type Props = {
    color: string
}
const Color = ({color}: Props) => {
    return (
        <div className="prk-archive-swatch prk-swatch-with-bg">
            <span className="tooltiptext">{color}</span></div>
    );
};

export default Color;