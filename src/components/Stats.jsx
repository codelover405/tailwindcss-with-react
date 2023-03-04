import React, { useState } from 'react'

const Stats = () => {
    const [className1, setClassName1] = useState('class1');
    const [className2, setClassName2] = useState('class2');

    const handleClick1 = () => {
        if (className1 === 'class1') {
            setClassName1('class1-2');
        } else {
            setClassName1('class1');
        }
    };

    const handleClick2 = () => {
        if (className2 === 'class2') {
            setClassName2('class2-2');
        } else {
            setClassName2('class2');
        }
    };

    return (
        <>
            {/* <div className={`${className1} ${className2} bg-white`}>
                <button onClick={handleClick1}>Toggle Class 1</button>
                <button onClick={handleClick2}>Toggle Class 2</button>
                <p>Some text here</p>
            </div> */}
        </>
    )
}

export default Stats