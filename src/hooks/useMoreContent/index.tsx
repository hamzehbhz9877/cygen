import React, {useState} from 'react';

const UseMoreContent = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleShowMore = () => setIsOpen(!isOpen)

    return {isOpen,handleShowMore}
};

export default UseMoreContent;