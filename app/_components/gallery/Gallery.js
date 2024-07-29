"use client"


import React, { useState, useEffect } from 'react';

const PhotoGallery = ({ photos }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const openModal = (imageUrl) => {
        setModalOpen(true);
        setModalImage(imageUrl);
    };

    // Handle modal close on outside click and ESC key press
    const handleClose = (event) => {
        if (event.target.classList.contains('modal') || event.key === 'Escape') {
            setModalOpen(false);
        }
    };

    useEffect(() => {
        const handleEscapePress = (event) => handleClose(event);
        const clickOutsideListener = document.addEventListener('click', handleClose);
        document.addEventListener('keydown', handleEscapePress);

        return () => {
            document.removeEventListener('click', handleClose);
            document.removeEventListener('keydown', handleEscapePress);
        }; // Cleanup
    }, [modalOpen]);

    return (
        <div className="container mx-auto mt-10 mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {photos.map((photo) => (
                    <div key={photo.id} className="gallery-item rounded-lg overflow-hidden" onClick={() => openModal(photo.link)}>
                        <img src={photo.link} alt="Photo" className="w-full h-48 object-cover hover:opacity-75 transition duration-300" />
                    </div>
                ))}
            </div>
            <Modal open={modalOpen}>
                <img src={modalImage} alt="Modal Photo" className="h-full w-full object-contain" />
            </Modal>
        </div>
    );
};

const Modal = ({ open, children }) => {
    return (
        <div
            className={`modal fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-75 transition-opacity duration-300 ${
                open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
            <div className="modal-box max-w-2xl mx-auto bg-gray-950 p-4 rounded shadow-lg sm:mx-0 sm:rounded-none sm:shadow-none">
                {children}
            </div>
        </div>
    );
};

export default PhotoGallery;

