import React, { useEffect, useState } from 'react'
// Debouncing is a technique used to delay the processing of user input until after a certain period of inactivity. This is commonly used in search fields to reduce the number of API calls or expensive operations triggered as the user types.


export const Debounce = () => {
    const [inputValue, setInputValue] = useState('');



    // This function captures the user input from the text field and updates the inputValue state with the latest value.
    const handleFieldChange = (e) => {
        setInputValue(e.target.value);
    };

    // this useEffect hook will trigger an API call after a 1-second delay when the inputValue state changes. If the user continues typing within the 1-second delay, the timer will be reset, preventing the API call from being triggered. This helps reduce the number of unnecessary API calls and improves performance.

    useEffect(() => {
        const handler = setTimeout(() => {
            if (inputValue) {
                console.log("API Call with search term:", inputValue);
            }
        }, 1000);

        // Cleanup to reset the timer if input changes before the delay
        return () => clearTimeout(handler);
    }, [inputValue]);

    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => handleFieldChange(e)} />
        </div>
    )
}
