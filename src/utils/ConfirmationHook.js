import React, { useState, useCallback } from 'react';
import ConfirmationModal from './ConfirmationModal';

const useConfirmation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [onConfirm, setOnConfirm] = useState(() => { });

    const showConfirmation = useCallback((msg, onConfirmCallback) => {
        setMessage(msg);
        setIsVisible(true);
        setOnConfirm(() => onConfirmCallback);
    }, []);

    const hideConfirmation = () => {
        setIsVisible(false);
        setOnConfirm(() => { });
    };

    const handleConfirm = () => {
        onConfirm();
        hideConfirmation();
    };

    const ConfirmationDialog = () => {
        return (
            isVisible && (
                <ConfirmationModal>
                    <div className='grid justify-center items-center p-4'>
                        <p className='text-2xl m-4'>{message}</p>
                        <div className='flex gap-4 justify-center'>
                            <button className='bg-green-600 rounded-lg py-2 px-4' onClick={handleConfirm}>Yes</button>
                            <button className='bg-red-700 rounded-lg py-2 px-4' onClick={hideConfirmation}>No</button>
                        </div>
                    </div>
                </ConfirmationModal >
            )
        );
    };

    return {
        showConfirmation,
        ConfirmationDialog,
    };
};

export default useConfirmation;
