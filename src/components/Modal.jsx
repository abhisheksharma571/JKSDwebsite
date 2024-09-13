import React from 'react';

const Modal = ({ isOpen, closeModal, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg w-full max-w-lg p-6 relative">
                <button
                    className="absolute top-2 right-2 text-black font-bold mr-3"
                    onClick={closeModal}
                >
                    X
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
