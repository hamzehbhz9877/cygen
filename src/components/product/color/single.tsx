import React from 'react';


type Props = {
    color: string
}
const Color = ({color}: Props) => {
    return (
        <div className="archive-swatch">
            <span className="tooltiptext">{color}</span></div>
    );
};

export default Color;