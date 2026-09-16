import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import NavMobile from "./components/NavMobile"
import Footer from "./components/Footer"

export default function App() {
    return (
        <BrowserRouter>
            <NavMobile />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
