import {IBM_Plex_Sans_Arabic} from "next/font/google";
import {Noto_Naskh_Arabic} from "next/font/google";
import {Cairo} from "next/font/google"
import "./globals.css";
import Layout from "@/app/_components/layout/Layout";
import Head from "next/head";

const tajawal = IBM_Plex_Sans_Arabic({weight: ["200", "300", "400", "500", "700"], subsets: ["arabic"]});
const notoNaskhArabic = Noto_Naskh_Arabic({subsets: ["arabic"]});
const cairo = Cairo({weight: ["300", "400", "500", "700"], subsets: ["arabic"]});


export const metadata = {
    title: "master BBQ",
    description: "",
};


const Rootlayout = ({children}) => {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description}/>
            </Head>
            <html lang="en">
            <body className={tajawal.className}>
            <Layout>
                {children}
            </Layout>
            </body>
            </html>
        </>
    );
};
export default Rootlayout;
