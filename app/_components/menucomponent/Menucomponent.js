"use client"
import React, {useState, useEffect} from 'react';
import Link from 'next/link';


const Menu = ({categories}) => {


    return (
        <div className="mt-10">
            <div className="hero-content  w-full ml-auto mr-auto text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-white font-bold">menu</h1>
                </div>
            </div>
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-center pt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 md:gap-y-10 gap-y-10">
                        {categories.map((category) => (
                            <div key={category.id} className="card bg-base-100 shadow-xl max-w-md mx-auto">
                                <Link href={`/menu/${category.link}`}>
                                    <figure className="px-10 pt-10">
                                        <img
                                            src={`${category.category_photo}`}
                                            alt={category.category_name}
                                            className="rounded-xl card-img object-cover "
                                        />

                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{category.category_name}</h2>

                                    </div>
                                </Link>

                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Menu;


