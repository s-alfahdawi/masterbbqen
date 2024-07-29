
import Link from "next/link";

export default function Hero() {
    return (
        <main className="">
            <div className="hero" style={{backgroundImage: 'url(/images//DSC06405.webp)', minHeight: '450px'}}>
                <div className="hero-overlay bg-black bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <p className="mb-5  lg:text-7xl md:text-7xl sm-font-5xl text-white  font-bold  ">
                            Irresistible taste
                        </p>

                        <div className="flex flex-col mt-5 items-center">
                            <Link href="/menu"
                                  className="bg-primary mt-2 font-semibold  text-white text-lg px-8 menu-button   rounded-full  flex items-center">
                                menu

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
