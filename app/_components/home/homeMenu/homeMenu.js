"use client"
import Link from "next/link";
import Image from "next/image"
import categoriesData from "/app/_api/menu.json";


function Homemenu() {
    const categories = categoriesData.menu;

    return (
        <div className="swiper-container-main">
            <div className="carousel carousel-end max-w-full w-full min-w-md p-4 space-x-4 rounded-box " style={{ direction: 'rtl', overflowX: 'auto' }}>
                {categories.map((category, index) => (
                    <div key={index} className="carousel-item relative hover:scale-[1.05] pl-4">
                        <Link href={`/menu/${category.link}`}>
                            <img
                                src={`${category.category_photo}`}
                                alt="photo"
                                className="rounded-box carousel-image"
                            />
                            <h1 className="text-center text-xl mt-5">{category.category_name}</h1>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Homemenu;