"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';

function ItemDetails() {
    const router = useRouter();
    const { categoryId, itemId } = router.query || {};

    const [itemDetails, setItemDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItemDetails = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(`/api/menu/${categoryId}/${itemId}`);

                const data = await response.json();

                if (data.error) {
                    setError(data.error);
                } else {
                    setItemDetails(data);
                }
            } catch (error) {
                console.error('Error fetching item details:', error);
                setError('Failed to load item details');
            } finally {
                setIsLoading(false);
            }
        };

        if (categoryId && itemId) {
            fetchItemDetails();
        }
    }, [categoryId, itemId]);

    if (!categoryId || !itemId) {
        return <div className="not-found">Item not found.</div>;
    }

    if (isLoading) {
        return <div className="loading">Loading item details...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    if (!itemDetails) {
        return <div className="not-found">Item not found.</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap justify-center">
                <Image
                    src={itemDetails.photo}
                    alt={itemDetails.name}
                    width={100} height={100}
                    className="w-full md:w-1/2 rounded-lg mb-4"
                />
                <div className="w-full md:w-1/2 px-4">
                    <h1 className="text-2xl font-bold mb-2">{itemDetails.name}</h1>
                    <p className="text-gray-700 mb-4">{itemDetails.description}</p>
                    <p className="text-lg font-bold mb-2">Price: {itemDetails.price}</p>
                    <h2 className="text-lg font-bold mb-2">Dishes:</h2>
                    <ul>
                        {itemDetails.dishes.map(dish => (
                            <li key={dish.id}>
                                <p>Name: {dish.name}</p>
                                <p>Price: {dish.price}</p>
                                <p>Description: {dish.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ItemDetails;
