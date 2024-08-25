"use client";
import React, { useState, useEffect } from 'react';

const Egg: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, 20000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <div style={{ minHeight: '100vh', position: 'fixed' }}>
                    <footer style={{ position: 'fixed' }}>
                        <p className="typing-animation">Not a quak house but a quak home...</p>
                        <span className="blinking-caret"></span>
                        
                    </footer>
                </div>
            )}
        </>
    );
};

export default Egg;
