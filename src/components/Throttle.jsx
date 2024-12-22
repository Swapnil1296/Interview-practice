import React, { useState, useEffect } from "react";


//  throttling is a technique used to limit the number of times a function is called over a certain period of time. This can be useful when dealing with events that can be triggered many times in a short period, such as scrolling or resizing the window.

const throttle = (func, limit) => {
    let inThrottle;
    return (...args) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

export const ThrottleExample = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const handleMouseMove = () => {
            setCounter((prevCounter) => prevCounter + 1);
        };

        // Create throttled version of handleMouseMove
        const throttledMouseMove = throttle(handleMouseMove, 500);

        // Adding the throttled event listener for mouse move
        window.addEventListener("mousemove", throttledMouseMove);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener("mousemove", throttledMouseMove);
        };
    }, []);

    return (
        <div>
            <h1>Mouse Move Counter: {counter}</h1>
            <p>Move your mouse to increase the counter value.</p>
        </div>
    );
};
