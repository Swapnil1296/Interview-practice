import React, { useState, useEffect } from 'react';

const BallFollowMouse = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // Update position based on mouse movement
    const handleMouseMove = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    // Add mouse move event listener on mount and remove on unmount
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div>
            <div
                style={{
                    position: 'absolute',
                    left: `${position.x - 25}px`,  // Offset to center the ball on mouse
                    top: `${position.y - 25}px`,   // Offset to center the ball on mouse
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'red',
                    transition: 'left 0.1s, top 0.1s',  // Smooth transition for ball movement
                }}
            ></div>
        </div>
    );
};

export default BallFollowMouse;
