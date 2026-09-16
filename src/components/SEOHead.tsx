import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getRoute, buildHead } from "../seo/routes"

// Les balises SEO sont écrites dans le HTML au build (scripts/prerender.mjs).
// Ce composant ne fait que les resynchroniser en développement ou si l'URL change côté client.
export default function SEOHead() {
    const { pathname } = useLocation()

    useEffect(() => {
        const route = getRoute(pathname)
        if (document.title === route.title) return
        document.head.querySelectorAll("[data-seo-head], script[data-seo], link[rel='canonical'], meta[name='description'], meta[name='robots'], meta[property^='og:'], meta[name^='twitter:']").forEach(el => el.remove())
        document.querySelectorAll("title").forEach(el => el.remove())
        const tpl = document.createElement("template")
        tpl.innerHTML = buildHead(route)
        tpl.content.childNodes.forEach(node => {
            if (node.nodeName === "SCRIPT") {
                const s = document.createElement("script")
                s.type = "application/ld+json"
                s.setAttribute("data-seo", "")
                s.textContent = node.textContent
                document.head.appendChild(s)
            } else if (node.nodeType === 1) {
                document.head.appendChild(node.cloneNode(true))
            }
        })
    }, [pathname])

    return null
}
