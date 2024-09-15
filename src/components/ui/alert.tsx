import React from 'react';

interface AlertProps {
    message: string;
    type: 'success' | 'error' | 'warning';
}

const Alert: React.FC<AlertProps> = ({ message, type }) => {
    return (
        <div className={`alert alert-${type}`}>
            {message}
        </div>
    );
};

export default Alert;
export interface AlertDescriptionProps {
    description: string;
}

export const AlertDescription: React.FC<AlertDescriptionProps> = ({ description }) => {
    return (
        <div className="alert-description">
            {description}
        </div>
    );
};