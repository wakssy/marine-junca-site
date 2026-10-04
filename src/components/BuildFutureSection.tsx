import { useEffect, useLayoutEffect as useClientLayoutEffect, useRef, useState } from "react"

// useLayoutEffect ne s'exécute pas au pré-rendu serveur : on bascule sur useEffect hors navigateur pour éviter l'avertissement
const useLayoutEffect = typeof window !== "undefined" ? useClientLayoutEffect : useEffect

const OVERLAP = 4 // px de recouvrement au raccord pour éviter tout interstice au rendu

export default function BuildFutureSection() {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const stageRef = useRef<HTMLDivElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const word1Ref = useRef<HTMLSpanElement>(null)
    const word2Ref = useRef<HTMLSpanElement>(null)
    const [progress, setProgress] = useState(0)
    const [splitPercent, setSplitPercent] = useState(50)
    const [paused, setPaused] = useState(false)
    const userPaused = useRef(false)

    // Progression du défilement dans la section, calculée au plus une fois par image.
    // Mouvement réduit : pas d'animation liée au défilement, la phrase s'affiche directement.
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setProgress(1)
            return
        }
        let raf = 0
        function update() {
            raf = 0
            const el = wrapperRef.current
            if (!el) return
            const rect = el.getBoundingClientRect()
            const total = el.offsetHeight - window.innerHeight
            if (total <= 0) {
                setProgress(1)
                return
            }
            setProgress(Math.min(1, Math.max(0, -rect.top / total)))
        }
        function onScroll() {
            if (!raf) raf = requestAnimationFrame(update)
        }
        window.addEventListener("scroll", onScroll, { passive: true })
        window.addEventListener("resize", onScroll)
        update()
        return () => {
            window.removeEventListener("scroll", onScroll)
            window.removeEventListener("resize", onScroll)
            cancelAnimationFrame(raf)
        }
    }, [])

    // La vidéo ne tourne que lorsqu'elle est à l'écran
    useEffect(() => {
        const video = videoRef.current
        if (!video) return
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            video.pause()
            userPaused.current = true
            setPaused(true)
            return
        }
        const io = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !userPaused.current) video.play().catch(() => {})
            else video.pause()
        })
        io.observe(video)
        return () => io.disconnect()
    }, [])

    // Mesure la largeur réelle de chaque mot pour que les deux panneaux se rejoignent
    // exactement là où le texte doit se raccorder, et que la phrase entière soit centrée.
    useLayoutEffect(() => {
        function measure() {
            const stage = stageRef.current
            const w1 = word1Ref.current
            const w2 = word2Ref.current
            if (!stage || !w1 || !w2) return
            const stageWidth = stage.getBoundingClientRect().width
            if (!stageWidth) return
            const w1w = w1.getBoundingClientRect().width
            const w2w = w2.getBoundingClientRect().width
            const gap = stageWidth * 0.02
            const total = w1w + gap + w2w
            const left = (stageWidth - total) / 2
            const seam = left + w1w + gap / 2
            setSplitPercent((seam / stageWidth) * 100)
        }
        measure()
        document.fonts?.ready.then(measure)
        window.addEventListener("resize", measure)
        return () => window.removeEventListener("resize", measure)
    }, [])

    // Toute vidéo qui tourne en boucle doit pouvoir être mise en pause (WCAG 2.2.2)
    function togglePlayback() {
        const video = videoRef.current
        if (!video) return
        if (video.paused) {
            userPaused.current = false
            video.play().catch(() => {})
            setPaused(false)
        } else {
            userPaused.current = true
            video.pause()
            setPaused(true)
        }
    }

    // Les panneaux partent hors de la scène (vidéo visible) et se referment sur elle en glissant jusqu'à 0
    const panelShift = (1 - progress) * 100
    // La scène s'arrondit et se resserre légèrement à mesure que le texte se referme
    const stageScale = 1 - progress * 0.04

    return (
        <div className="bfs-wrapper" ref={wrapperRef}>
            <p className="sr-only">Construisez votre avenir</p>
            <div className="bfs-sticky">
                <div className="bfs-stage" ref={stageRef} style={{ transform: `scale(${stageScale})` }}>
                    <video ref={videoRef} className="bfs-video" src="/videos/construisez-votre-avenir.mp4" autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
                    <div className="bfs-veil" style={{ opacity: 1 - progress }} aria-hidden="true" />
                    <div
                        className="bfs-panel bfs-panel-left"
                        aria-hidden="true"
                        style={{ width: `calc(${splitPercent}% + ${OVERLAP}px)`, transform: `translateX(${-panelShift}%)` }}
                    >
                        <span className="bfs-text" ref={word1Ref} style={{ padding: `0 calc(0.18em + ${OVERLAP}px) 0 0.18em` }}>Construisez votre</span>
                    </div>
                    <div
                        className="bfs-panel bfs-panel-right"
                        aria-hidden="true"
                        style={{ width: `calc(${100 - splitPercent}% + ${OVERLAP}px)`, transform: `translateX(${panelShift}%)` }}
                    >
                        <span className="bfs-text" ref={word2Ref} style={{ padding: `0 0.18em 0 calc(0.18em + ${OVERLAP}px)` }}>avenir</span>
                    </div>
                    <button
                        type="button"
                        className="bfs-toggle"
                        onClick={togglePlayback}
                        aria-label={paused ? "Lire la vidéo" : "Mettre la vidéo en pause"}
                        style={{ opacity: Math.max(0, 1 - progress * 1.6), visibility: progress > 0.6 ? "hidden" : "visible" }}
                    >
                        {paused ? (
                            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M4 2.5v9l7.5-4.5z" fill="currentColor" /></svg>
                        ) : (
                            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><rect x="3" y="2.5" width="2.6" height="9" rx="1" fill="currentColor" /><rect x="8.4" y="2.5" width="2.6" height="9" rx="1" fill="currentColor" /></svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}
