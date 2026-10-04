import { useEffect, useLayoutEffect as useClientLayoutEffect, useRef, useState } from "react"

// useLayoutEffect ne s'exécute pas au pré-rendu serveur : on bascule sur useEffect hors navigateur pour éviter l'avertissement
const useLayoutEffect = typeof window !== "undefined" ? useClientLayoutEffect : useEffect

const OVERLAP = 4 // px de recouvrement au raccord pour éviter tout interstice au rendu

export default function BuildFutureSection() {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const stageRef = useRef<HTMLDivElement>(null)
    const word1Ref = useRef<HTMLSpanElement>(null)
    const word2Ref = useRef<HTMLSpanElement>(null)
    const [progress, setProgress] = useState(0)
    const [splitPercent, setSplitPercent] = useState(50)

    useEffect(() => {
        function onScroll() {
            const el = wrapperRef.current
            if (!el) return
            const rect = el.getBoundingClientRect()
            const total = el.offsetHeight - window.innerHeight
            if (total <= 0) {
                setProgress(1)
                return
            }
            const scrolled = -rect.top
            const p = Math.min(1, Math.max(0, scrolled / total))
            setProgress(p)
        }
        window.addEventListener("scroll", onScroll, { passive: true })
        window.addEventListener("resize", onScroll)
        onScroll()
        return () => {
            window.removeEventListener("scroll", onScroll)
            window.removeEventListener("resize", onScroll)
        }
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
        window.addEventListener("resize", measure)
        return () => window.removeEventListener("resize", measure)
    }, [])

    // panels start fully off-stage (open, video visible) and slide to 0 (closed, covering the video)
    const panelShift = (1 - progress) * 100

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: `
                .bfs-wrapper { position: relative; height: 220vh; background: white; }
                .bfs-sticky { position: sticky; top: 0; height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden; padding: 0 40px; }
                .bfs-stage { position: relative; width: 100%; max-width: 1000px; margin: 0 auto; aspect-ratio: 983 / 560; border-radius: 10px; overflow: hidden; }
                .bfs-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
                .bfs-panel { position: absolute; top: 0; bottom: 0; background: white; display: flex; align-items: center; }
                .bfs-panel-left { left: 0; justify-content: flex-end; }
                .bfs-panel-right { right: 0; justify-content: flex-start; }
                .bfs-text { font-size: clamp(26px, 7vw, 58px); font-weight: 600; letter-spacing: -0.03em; color: rgb(33,33,33); line-height: 1.05; white-space: nowrap; }
                @media (max-width: 900px) {
                    .bfs-wrapper { height: 180vh; }
                }
            ` }} />
            <div className="bfs-wrapper" ref={wrapperRef}>
                <div className="bfs-sticky">
                    <div className="bfs-stage" ref={stageRef}>
                        <video className="bfs-video" src="/videos/construisez-votre-avenir.mp4" autoPlay muted loop playsInline />
                        <div
                            className="bfs-panel bfs-panel-left"
                            style={{ width: `calc(${splitPercent}% + ${OVERLAP}px)`, transform: `translateX(${-panelShift}%)` }}
                        >
                            <span className="bfs-text" ref={word1Ref} style={{ padding: `0 calc(0.18em + ${OVERLAP}px) 0 0.18em` }}>Construisez votre</span>
                        </div>
                        <div
                            className="bfs-panel bfs-panel-right"
                            style={{ width: `calc(${100 - splitPercent}% + ${OVERLAP}px)`, transform: `translateX(${panelShift}%)` }}
                        >
                            <span className="bfs-text" ref={word2Ref} style={{ padding: `0 0.18em 0 calc(0.18em + ${OVERLAP}px)` }}>avenir</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
