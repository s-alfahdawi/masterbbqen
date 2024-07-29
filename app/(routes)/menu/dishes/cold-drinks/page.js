"use client";

import { menu } from "@/app/_api/menu.json";
import Image from "next/image";
import { useState } from "react";

export default function ColdDrinks() {
    const coldDrinksCategory = menu.find((category) => category.category_id === "7");

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

    if (coldDrinksCategory) {
        const { subcategories } = coldDrinksCategory;

        return (
            <div>
                <div className="">
                    <div
                        className="hero"
                        style={{
                            backgroundImage: `url(${coldDrinksCategory.category_photo})`,
                            minHeight: "450px",
                        }}
                    >
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl text-white font-bold">
                                    {coldDrinksCategory.category_name}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                {subcategories &&
                    subcategories.map((subcategory) => (
                        <div key={subcategory.id} className="container mx-auto px-4 py-8">
                            <h2 className="text-2xl font-semibold mt-4 mb-2 text-gray-400 text-center">
                                {subcategory.name}
                            </h2>

                            <div className="flex justify-center pt-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-20 md:gap-y-10 gap-y-20">
                                    {subcategory.drinks &&
                                        subcategory.drinks.map((drink) => (
                                            <div key={drink.id} className="card bg-base-100 shadow-xl max-w-md mx-auto">
                                                <div className="grid grid-cols-1 gap-4">
                                                    <div key={drink.id} className="flex flex-col items-center justify-center">
                                                        <figure className="px-10 pt-10">
                                                            <img
                                                                src={drink.photo}
                                                                alt={drink.name}
                                                                className="rounded-xl card-img object-cover cursor-pointer"
                                                                onClick={() => handleOpenModal(drink.photo)} // Pass the actual image URL
                                                            />
                                                        </figure>
                                                        <div className="card-body items-center text-center">
                                                            <h2 className="card-title title-rtl">{drink.name}</h2>
                                                            <div className="card-actions">
                                                                <button disabled className="btn btn-primary">{drink.price}</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    ))}

                {isOpen && (
                    <div
                        className="fixed top-0 right-0 bottom-0 md-modal left-0 flex sm:w-30 md:w-30 z-50 justify-center items-center bg-black bg-opacity-40"
                        onClick={handleCloseModal}
                    >
                        <div className="max-w-md p-4 bg-base-100 rounded-lg" onClick={(e) => e.stopPropagation()}>
                            <img src={selectedImage} alt="Selected" className="w-full h-auto" />
                        </div>
                    </div>
                )}
            </div>
        );
    } else {
        return <h1>Category not found</h1>;
    }
}
