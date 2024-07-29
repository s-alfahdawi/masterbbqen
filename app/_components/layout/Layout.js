
import Header from "@/app/_components/layout/Header/Header";
import Footer from "@/app/_components/layout/footer/Footer";


export default function Layout({ children }) {
    return (
        <div className=" mx-auto">

            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}