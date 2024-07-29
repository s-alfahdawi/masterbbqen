"use client"

import meatData from "@/app/_api/rawmeat.json";
import {useState} from "react";

const Menu = () => {
    const meat = meatData.meat;
    const [selectedImage, setSelectedImage] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = (image) => {
        setSelectedImage(image);
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
        setIsOpen(false);
    };
    return (
        <div className="mt-10">
            <div className="hero-content  w-full ml-auto mr-auto text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-white font-bold">گۆشتی خاو</h1>
                </div>
            </div>
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-center pt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-x-40 gap-x-30 md:gap-x-20 gap-y-10">
                        {meat.map((rawmeat) => (
                            <div key={rawmeat.id} className="card bg-base-100 shadow-xl max-w-md mx-auto">
                                <figure className="px-10 pt-10 cursor-pointer"

                                        onClick={() => handleOpenModal(rawmeat.photo)}>

                                    <img src={rawmeat.photo} alt={rawmeat.name} className="rounded-xl card-img" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title title-rtl">{rawmeat.name}</h2>
                                    <p className="description">{rawmeat.description}</p>
                                    <div className="card-actions">
                                        <button disabled className="btn btn-primary">{rawmeat.price}</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {isOpen && (
                <div
                    className="fixed top-0 right-0 bottom-0 md-modal left-0 flex sm:w-30 md:w-30 z-50 justify-center items-center bg-black bg-opacity-40"
                    onClick={handleCloseModal}>
                    <div className="max-w-md p-4 bg-base-100  rounded-lg" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt="Selected" className="w-full h-auto"/>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Menu;
