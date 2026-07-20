const TEAL = "#4EC8C8"
const GREEN = "#90D4A0"

export default function MapEmbed({
    address = "300 impasse de Pudepe, Rivière-Saas-et-Gourby, 40180",
    coords = "43.699528,-1.188472",
    zoom = 16,
}: {
    address?: string
    coords?: string
    zoom?: number
}) {
    // Le géocodage par adresse texte pointait vers de mauvais résultats — on utilise
    // les coordonnées GPS exactes (fournies par la cliente) pour la carte.
    const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(coords)}&z=${zoom}&output=embed`
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(coords)}`

    return (
        <>
            <style>{`
                .map-container {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    border-radius: 20px;
                    overflow: hidden;
                    border: 1px solid rgba(33,33,33,0.08);
                    box-shadow: 0 20px 50px rgba(33,33,33,0.12);
                    font-family: 'Funnel Display', sans-serif;
                }
                .map-container iframe {
                    filter: grayscale(25%) contrast(1.02) saturate(0.9);
                }
                .map-fade {
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 90px;
                    background: linear-gradient(to bottom, rgba(33,33,33,0.22), transparent);
                    pointer-events: none;
                }
                .map-badge {
                    position: absolute;
                    left: 16px; right: 16px; bottom: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 14px;
                    background: rgba(255,255,255,0.92);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border-radius: 14px;
                    padding: 14px 16px;
                    box-shadow: 0 8px 26px rgba(33,33,33,0.16);
                }
                .map-badge-left {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    min-width: 0;
                }
                .map-pin {
                    width: 40px; height: 40px; min-width: 40px;
                    border-radius: 11px;
                    background: linear-gradient(135deg, ${TEAL}, ${GREEN});
                    display: flex; align-items: center; justify-content: center;
                }
                .map-badge-text { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
                .map-badge-title { font-size: 14px; font-weight: 600; color: rgb(33,33,33); line-height: 100%; }
                .map-badge-address {
                    font-size: 12px; color: rgba(33,33,33,0.55); line-height: 130%;
                    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
                }
                .map-directions {
                    display: flex; align-items: center; gap: 6px;
                    padding: 10px 16px;
                    background: rgb(33,33,33); color: white;
                    border-radius: 9px;
                    font-size: 13px; font-weight: 600;
                    text-decoration: none; white-space: nowrap; flex-shrink: 0;
                    transition: opacity 0.2s ease;
                }
                .map-directions:hover { opacity: 0.85; }

                @media (max-width: 680px) {
                    .map-badge { flex-direction: column; align-items: stretch; }
                    .map-directions { justify-content: center; }
                }
            `}</style>
            <div className="map-container">
                <iframe
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: "block", minHeight: "inherit" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="map-fade" />
                <div className="map-badge">
                    <div className="map-badge-left">
                        <div className="map-pin">
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                                <path d="M8 0C4.13 0 1 3.13 1 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5C6.62 9.5 5.5 8.38 5.5 7S6.62 4.5 8 4.5 10.5 5.62 10.5 7 9.38 9.5 8 9.5z" fill="white" />
                            </svg>
                        </div>
                        <div className="map-badge-text">
                            <span className="map-badge-title">Marine Junca</span>
                            <span className="map-badge-address">{address}</span>
                        </div>
                    </div>
                    <a className="map-directions" href={directionsUrl} target="_blank" rel="noopener noreferrer">
                        Itinéraire →
                    </a>
                </div>
            </div>
        </>
    )
}
