import type { PointerEvent } from "react"

// Halo lumineux qui suit le pointeur sur les cartes (inspiré du SpotlightCard de ReactBits).
// À poser sur le conteneur : un seul gestionnaire pour toutes les cartes [data-spotlight].
export function onSpotlightMove(e: PointerEvent<HTMLElement>) {
    if (e.pointerType !== "mouse") return
    const card = (e.target as HTMLElement).closest<HTMLElement>("[data-spotlight]")
    if (!card) return
    const r = card.getBoundingClientRect()
    card.style.setProperty("--mx", `${e.clientX - r.left}px`)
    card.style.setProperty("--my", `${e.clientY - r.top}px`)
}
