import { useId, useState } from "react"

// Une étape du déroulé. Le contenu s'ouvre en animant grid-template-rows (0fr → 1fr) :
// pas besoin de mesurer la hauteur en JavaScript.
export default function AccordionCard({ etape, titre, description, defaultOpen = false }: {
    etape: string
    titre: string
    description: string
    defaultOpen?: boolean
}) {
    const [open, setOpen] = useState(defaultOpen)
    const id = useId()

    return (
        <div className={`acc${open ? " is-open" : ""}`}>
            <button type="button" className="acc-head" onClick={() => setOpen(o => !o)} aria-expanded={open} aria-controls={id}>
                <span className="acc-num" aria-hidden="true">{etape.replace(/\D/g, "")}</span>
                <span className="acc-titles">
                    <span className="sr-only">{etape}, </span>
                    <span className="acc-title">{titre}</span>
                </span>
                <span className="acc-toggle" aria-hidden="true" />
            </button>
            <div className="acc-body" id={id}>
                <div className="acc-body-inner">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
