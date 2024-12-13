import React from 'react';
import parse from "html-react-parser";

const Topics = ({Body, Title}: Topic) => {
    return (
            <div className="topics">
                <h2 className="topics__title">
                    {Title}
                </h2>
                <div className="topics__body">
                    {parse(Body)}
                </div>
            </div>
    );
};

export default Topics;