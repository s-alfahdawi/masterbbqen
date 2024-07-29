"use client"
import { useEffect, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import Card from "@/app/_components/home/carousel/Card";
import galleryItems from "/app/_api/photos.json";

const Carousel = () => {
    const photos = galleryItems.general_photos;

    const FAST_DURATION = 10;
    const SLOW_DURATION = 50;

    const [duration, setDuration] = useState(FAST_DURATION);
    const [ref, { width }] = useMeasure();

    const xTranslation = useMotionValue(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    const handleCardClick = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    useEffect(() => {
        let controls;
        const finalPosition = -width / 2;

        if (isModalOpen) {
            controls?.stop();
        } else {
            controls = animate(xTranslation, [0, finalPosition], {
                ease: "linear",
                duration: duration,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
            });
        }

        return () => controls?.stop();
    }, [isModalOpen, xTranslation, duration, width]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target === event.currentTarget) {
                handleCloseModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isModalOpen]);

    return (
        <main className="py-8 mb-9 overflow-clip">
            <motion.div
                className="flex"
                style={{ x: xTranslation }}
                ref={ref}
            >
                {photos.map((item, idx) => (
                    <Card
                        image={item.link}
                        key={item.id}
                        onClick={handleCardClick}
                    />
                ))}
            </motion.div>

            {isModalOpen && (
                <div className="fixed top-0 right-0 bottom-0 left-0 flex z-50 justify-center items-center bg-black  bg-opacity-40" onClick={handleCloseModal}>
                    <motion.div className="max-w-md w-full p-4 bg-base-100 rounded-lg" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt="Selected" className="w-full h-auto" />
                    </motion.div>
                </div>
            )}
        </main>
    );
};

export default Carousel;
