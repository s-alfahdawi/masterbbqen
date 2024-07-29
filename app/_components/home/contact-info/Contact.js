"use client"

import Image from "next/image";
import location from "/public/svgs/Linear/Map & Location/Map Point Favourite.svg";
import phone from "/public/svgs/Linear/Call/Call Chat Rounded.svg";
import time from "/public/svgs/Linear/Time/Clock Circle.svg";

export default function Contact() {
    return (
        <footer
            className="footer contact bg-base-100 mb-10 mt-10 text-right  lg:w-[70%] md:w-[90%] sm:w-[90%] p-8 md:p-10 text-lg text-white/70  flex flex-wrap md:flex-nowrap  justify-between">
            <nav className="w-full hover:text-white/100 md:w-auto mb-4 md:mb-0 md:mr-4  flex flex-col items-center">

                <Image src={time} alt={location} width={30} height={30}/>
                <p style={{maxWidth: '200px'}}>from 12:00pm to 12:00am</p>
            </nav>
            <nav
                className="w-full hover:text-white/100 md:w-auto mb-4 md:mb-0 md:mr-4 text-right flex flex-col items-center">
                <Image src={phone} alt={phone} width={30} height={30}/>
                <p className="">+964 750 507 22 44</p>
                <p className="">+964 772 707 22 44</p>
                <p className="">+964 750 507 22 66</p>
                <p className="">info@masterbbq.com</p>
            </nav>
            <nav className="w-full hover:text-white/100 md:w-auto flex flex-col items-center">
                <Image src={location} alt={time} width={30} height={30}/>
                <p style={{maxWidth: '200px'}} className="ltr:text-right">
                    100 st
                    <br/>
                    Toyota Dealership Road
                    <br/>
                    MRF 5
                    <br/>
                    Sakura park
                </p>
            </nav>
            <aside className="w-full md:w-72 mb-6 md:mb-0 md:mr-6">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3219.8413438747493!2d43.96203677572103!3d36.194740201595344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400723096f7c3b6f%3A0x5a4565d3cbea089e!2sMaster%20BBQ%20Erbill!5e0!3m2!1sen!2siq!4v1712672778248!5m2!1sen!2siq"
                    width="100%" height="250" className="md:h-[190px]" style={{borderRadius: '0',}} allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </aside>
        </footer>
    );
}
