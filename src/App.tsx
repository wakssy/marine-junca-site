import { Routes, Route, useLocation } from "react-router-dom"
import { Analytics } from "@vercel/analytics/react"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Bilan from "./pages/Bilan"
import Parcoursup from "./pages/Parcoursup"
import ApresLa3e from "./pages/ApresLa3e"
import LyceeSpecialites from "./pages/LyceeSpecialites"
import Reorientation from "./pages/Reorientation"
import Tarifs from "./pages/Tarifs"
import SoutienScolaire from "./pages/SoutienScolaire"
import QuiSuisJe from "./pages/QuiSuisJe"
import Merci from "./pages/Merci"
import NotFound from "./pages/NotFound"
import NavMobile from "./components/NavMobile"
import Footer from "./components/Footer"
import SEOHead from "./components/SEOHead"
import { MobileCallBar } from "./components/ui"
import { useReveal } from "./lib/reveal"

// Le routeur (BrowserRouter côté navigateur, StaticRouter au pré-rendu) est fourni par le point d'entrée
export default function App() {
    const { pathname } = useLocation()
    useReveal(pathname)

    return (
        <>
            <SEOHead />
            <a href="#contenu" className="skip-link">Aller au contenu</a>
            <NavMobile />
            <main id="contenu" tabIndex={-1}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/bilan-orientation-scolaire" element={<Bilan />} />
                    <Route path="/accompagnement-parcoursup" element={<Parcoursup />} />
                    <Route path="/orientation-apres-la-3e" element={<ApresLa3e />} />
                    <Route path="/orientation-lycee-specialites" element={<LyceeSpecialites />} />
                    <Route path="/reorientation-post-bac" element={<Reorientation />} />
                    <Route path="/soutien-scolaire" element={<SoutienScolaire />} />
                    <Route path="/tarifs" element={<Tarifs />} />
                    <Route path="/qui-suis-je" element={<QuiSuisJe />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/merci" element={<Merci />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
            <MobileCallBar />
            <Analytics />
        </>
    )
}
