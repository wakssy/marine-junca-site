import { useEffect, type RefObject } from "react"

// Un conteneur qui défile horizontalement (carrousel mobile) doit pouvoir recevoir le focus
// pour qu'on le fasse défiler au clavier. Il ne devient focalisable que lorsqu'il déborde vraiment.
export function useFocusableScroller(ref: RefObject<HTMLElement>, label: string) {
    useEffect(() => {
        const el = ref.current
        if (!el || !("ResizeObserver" in window)) return
        const update = () => {
            if (el.scrollWidth > el.clientWidth + 1) {
                el.tabIndex = 0
                el.setAttribute("role", "region")
                el.setAttribute("aria-label", label)
            } else {
                el.removeAttribute("tabindex")
                el.removeAttribute("role")
                el.removeAttribute("aria-label")
            }
        }
        const ro = new ResizeObserver(update)
        ro.observe(el)
        update()
        return () => ro.disconnect()
    }, [ref, label])
}
