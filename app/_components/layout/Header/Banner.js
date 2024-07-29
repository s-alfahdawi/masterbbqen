import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import React from "react";
import Link from "next/link";

export default function Banner() {
    let iconStyleAmber = { color: "#E48413", fontSize: "0.9em", margin:"0.5em"};
    let iconStyleWhite = { color: "white", margin:"0.5em", fontSize: "0.9em" };

    return (
        <main>
            <div className="flex flex-col md:flex-row items-center bg-red-900 text-white px-6 py-2 ">

                <div className="md:w-auto flex flex-col md:flex-row items-center mb-4 md:mb-0 md:mr-auto md:ml-0">

                    <div className="flex items-center">
                        <FaPhone style={iconStyleAmber} />
                        <p className="text-sm ml-2 md:ml-0 md:mr-4">+9647727072244</p>

                        <div className="flex items-center">
                            <FaLocationDot style={iconStyleAmber} />
                            <p className="text-sm ml-2 md:ml-0">100 Meter Street, Erbil</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end mt-4 md:mt-0">
                    <Link href={`https://www.facebook.com/profile.php?id=100092882138492&mibextid=ZbWKwL`}>
                        <FaFacebook style={iconStyleWhite} />
                    </Link>
                    <Link href={`https://www.instagram.com/masterbbq.erbil?igsh=Njg1ZGJwMnZpMm04`}>
                        <FaInstagram style={iconStyleWhite} />
                    </Link>


                </div>
            </div>
        </main>
    );
}
