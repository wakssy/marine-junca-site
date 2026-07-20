import { useState, useRef, useEffect } from "react"

const TEAL = "#4EC8C8"

export default function AccordionCard({ etape, module, titre, description }: {
    etape: string
    module: string
    titre: string
    description: string
}) {
    const [open, setOpen] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (contentRef.current) {
            setHeight(contentRef.current.scrollHeight)
        }
    }, [description])

    return (
        <>
            <style>{`
                .accordion-card {
                    background: white;
                    border-radius: 10px;
                    border: 1px solid rgba(33,33,33,0.1);
                    overflow: hidden;
                    width: 100%;
                    font-family: 'Funnel Display', sans-serif;
                }
                .accordion-header {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    padding: 20px;
                    cursor: pointer;
                    user-select: none;
                    gap: 16px;
                }
                .accordion-title {
                    font-size: 20px;
                    font-weight: 600;
                    color: rgb(33,33,33);
                    letter-spacing: -0.03em;
                    line-height: 100%;
                }
                @media (max-width: 680px) {
                    .accordion-title {
                        font-size: 16px;
                    }
                    .accordion-header {
                        padding: 16px;
                    }
                }
            `}</style>
            <div className="accordion-card">
                <div className="accordion-header" onClick={() => setOpen(o => !o)}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                        <div style={{ display: "flex", flexDirection: "row", gap: "6px", alignItems: "center" }}>
                            <span style={{ fontSize: "14px", color: TEAL, fontWeight: 600 }}>{etape}</span>
                            <span style={{ fontSize: "14px", color: "rgba(33,33,33,0.3)" }}>·</span>
                            <span style={{ fontSize: "14px", color: "rgba(33,33,33,0.5)" }}>{module}</span>
                        </div>
                        <span className="accordion-title">{titre}</span>
                    </div>
                    <div style={{
                        width: "36px", height: "36px", minWidth: "36px",
                        backgroundColor: open ? TEAL : "rgb(33,33,33)",
                        borderRadius: "8px", display: "flex", alignItems: "center",
                        justifyContent: "center", position: "relative",
                        transition: "background-color 0.25s ease",
                    }}>
                        <div style={{ width: "14px", height: "2px", backgroundColor: "white", borderRadius: "10px", position: "absolute" }} />
                        <div style={{ width: "2px", height: "14px", backgroundColor: "white", borderRadius: "10px", position: "absolute", transform: open ? "scaleY(0)" : "scaleY(1)", transition: "transform 0.25s ease" }} />
                    </div>
                </div>
                <div style={{ height: open ? `${height}px` : "0px", overflow: "hidden", transition: "height 0.35s cubic-bezier(0.4, 0, 0.2, 1)" }}>
                    <div ref={contentRef} style={{ padding: "0 20px 20px 20px" }}>
                        <div style={{ height: "1px", backgroundColor: "rgba(33,33,33,0.08)", marginBottom: "16px" }} />
                        <p style={{ fontSize: "16px", color: "rgb(85,85,85)", lineHeight: "160%", margin: 0, fontWeight: 400 }}>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
