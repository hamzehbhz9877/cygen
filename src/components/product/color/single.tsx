import React from 'react';


type Props = {
    color: any
}
const Color = ({color}: Props) => {
    return (
        <div className="archive-swatch" style={{backgroundColor: color.ColorSquaresRgb}}>
            <span className="tooltiptext">{color.ValueRaw}</span>
        </div>
    );
};

export default Color;