import Image from "next/image";
import {FaSquareFacebook} from "react-icons/fa6";
import {IoLogoYoutube} from "react-icons/io5";
import {RiInstagramFill} from "react-icons/ri";
import Link from "next/link";


export default function Footer() {
    return (


        <footer className="footer p-4 md:p-6 bg-neutral text-neutral-content flex items-center justify-between">
            <Image src="/images/1.webp" alt="logo" width="100" height="100"/>
            <nav className="grid grid-flow-col gap-4">
                <Link href={`https://www.instagram.com/masterbbq.erbil?igsh=Njg1ZGJwMnZpMm04`}>
                    <RiInstagramFill size="35"/>
                </Link>
                <Link href={`https://www.facebook.com/profile.php?id=100092882138492&mibextid=ZbWKwL`}>
                    <FaSquareFacebook size="35"/>
                </Link>
                <Link href={`https://www.youtube.com/watch?v=uSpOe6SqZTs&t=11s`}>
                    <IoLogoYoutube size="35"/>
                </Link>
            </nav>
        </footer>


    );
}
