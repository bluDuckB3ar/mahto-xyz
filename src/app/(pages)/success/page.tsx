"use client";
import { useState, useEffect } from 'react';

const CountdownRedirect = ({ seconds }: { seconds: number }) => {
    const [count, setCount] = useState(seconds);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev: number) => prev - 1);
        }, 1000);

        if (count === 0) {
            window.location.href = '/about';
        }

        return () => clearInterval(timer);
    }, [count]);

    return <p>Redirecting in {count} seconds...</p>;
};

export default function PageLayout() {
    return (
        <div className="bg-background w-full h-full py-4">
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <div className="text-center space-y-4">
                    <h1 className="text-3xl font-bold text-green-500">Message Sent Successfully!</h1>
                    <p className="text-lg">Thank you for your message. We'll get back to you soon.</p>
                    <CountdownRedirect seconds={5} />
                </div>
            </div>
        </div>
    );
}
