import React, { useState, useRef } from 'react';

const UseRefExample = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0); // useRef to store a mutable value that doesn't trigger re-renders
    const inputRef = useRef(null); // useRef to directly access DOM elements

    const handleButtonClick = () => {
        setCount(count + 1);
        countRef.current = countRef.current + 1; // Update mutable value
        console.log('Updated count (ref):', countRef.current);
    };

    const focusInput = () => {
        inputRef.current.focus(); // Focus input element using ref
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>

            <p>State count: {count}</p>
            <p>Ref count (without re-render): {countRef.current}</p>
            <button onClick={handleButtonClick}>Increment Count</button>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <input ref={inputRef} type="text" placeholder="Focus me" />
                <button onClick={focusInput}>Focus Input</button>
            </div>
        </div>
    );
};

export default UseRefExample;
