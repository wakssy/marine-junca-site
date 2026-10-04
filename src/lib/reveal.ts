import { useEffect } from "react"

// Fait apparaître en douceur les éléments [data-reveal] quand ils entrent dans l'écran.
// Un seul IntersectionObserver pour toute la page ; chaque élément n'est animé qu'une fois.
export function useReveal(key: string) {
    useEffect(() => {
        const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)"))
        if (!("IntersectionObserver" in window)) {
            els.forEach(el => el.classList.add("is-in"))
            return
        }
        const io = new IntersectionObserver(entries => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue
                entry.target.classList.add("is-in")
                io.unobserve(entry.target)
            }
        }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 })
        els.forEach(el => io.observe(el))
        return () => io.disconnect()
    }, [key])
}
