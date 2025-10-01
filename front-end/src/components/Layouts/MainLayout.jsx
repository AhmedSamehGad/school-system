import Nav from "../Parts/Nav"
import Footer from "../Parts/Footer";;
import "../../tailwind.css"

export default function MainLayout({children}){
    return (
        <>
            <Nav />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}