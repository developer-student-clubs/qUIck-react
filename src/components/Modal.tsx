import React from 'react';

export interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

export const Modal: React.FunctionComponent<IModalProps> = (props) => {
    const { isOpen, onClose, title, children } = props;

    const modalStyles: React.CSSProperties = {
        display: isOpen ? 'block' : 'none',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000,
        backgroundColor: '#fff',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        color: 'black'
    };

    const overlayStyles: React.CSSProperties = {
        display: isOpen ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999
    };

    return (
        <div>
            {/* Overlay */}
            <div style={overlayStyles} onClick={onClose}></div>

            {/* Modal */}
            <div style={modalStyles}>
                <div>{title && <h2>{title}</h2>}</div>
                <div>{children}</div>
                <button onClick={onClose}>close</button>
            </div>
        </div>
    );
};
