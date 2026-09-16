import { Mail } from "lucide-react"

const SOCIAL_LINKS = {
    linkedin: "https://fr.linkedin.com/in/marine-junca-b53580147",
    facebook: "https://fr-fr.facebook.com/marine.junca",
    instagram: "https://www.instagram.com/marinejunca/",
    email: "mailto:marine.junca@gmail.com",
}

function FacebookIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.3l.5-3H13v-2c0-.6.4-1 1-1z" />
        </svg>
    )
}

function InstagramIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
        </svg>
    )
}

export default function Footer() {
    return (
        <>
            <style>{`
                .footer-section {
                    position: relative;
                    width: 100%;
                    background: linear-gradient(135deg, #90D4A0 0%, #C5E8A0 45%, #4EC8C8 100%);
                    font-family: 'Funnel Display', sans-serif;
                    padding: 100px 30px 0 30px;
                    box-sizing: border-box;
                    text-align: center;
                }
                .footer-intro { position: relative; display: block; width: 150px; margin: 0 auto; }
                .footer-label-wrap {
                    position: absolute; top: -46px; left: -50px;
                    display: flex; align-items: flex-start; gap: 4px;
                }
                .footer-label {
                    font-family: 'Gloria Hallelujah', cursive;
                    font-size: 14px; color: white; white-space: nowrap; margin-top: 2px;
                }
                .footer-photo-wrap { position: relative; width: 150px; height: 150px; margin: 0 auto 24px auto; }
                .footer-photo {
                    width: 150px; height: 150px; border-radius: 50%; object-fit: cover;
                    border: 3px solid rgba(255,255,255,0.5);
                    display: block;
                }
                .footer-badge {
                    position: absolute; bottom: 6px; width: 34px; height: 34px; border-radius: 10px;
                    display: flex; align-items: center; justify-content: center;
                    text-decoration: none; box-shadow: 0 4px 12px rgba(33,33,33,0.2);
                }
                .footer-badge-mail { left: -10px; background: white; color: rgb(33,33,33); }
                .footer-badge-linkedin { right: -10px; background: rgb(33,33,33); color: white; font-weight: 700; font-size: 13px; }
                .footer-tag {
                    display: inline-block; border: 1px solid rgba(255,255,255,0.5); color: white;
                    font-size: 13px; font-weight: 500; padding: 6px 16px; border-radius: 100px; margin-bottom: 24px;
                }
                .footer-title {
                    color: white; font-size: 40px; font-weight: 600; letter-spacing: -0.03em;
                    line-height: 1.25; max-width: 640px; margin: 0 auto 32px auto;
                }
                .footer-cta {
                    display: inline-flex; align-items: center; padding: 15px 32px; background: white;
                    color: rgb(33,33,33); border-radius: 10px; text-decoration: none; font-weight: 600;
                    box-shadow: 0 10px 30px rgba(33,33,33,0.15);
                }
                .footer-bottom {
                    display: flex; align-items: center; justify-content: space-between; gap: 16px;
                    flex-wrap: wrap; max-width: 1200px; margin: 70px auto 0 auto; padding-bottom: 16px;
                    text-align: left;
                }
                .footer-copyright { font-size: 13px; color: rgba(255,255,255,0.8); }
                .footer-socials { display: flex; gap: 10px; }
                .footer-social-btn {
                    width: 34px; height: 34px; border-radius: 50%; background: white; color: rgb(33,33,33);
                    display: flex; align-items: center; justify-content: center; text-decoration: none;
                    transition: opacity 0.2s ease;
                }
                .footer-social-btn:hover { opacity: 0.8; }
                .footer-cloud-wrap {
                    position: relative; z-index: 1; width: 100vw; left: 50%; transform: translateX(-50%);
                    margin-top: 8px; height: clamp(50px, 7vw, 130px); overflow: hidden;
                }
                .footer-cloud-wrap img { width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; }

                @media (max-width: 600px) {
                    .footer-section { padding-top: 70px; }
                    .footer-title { font-size: 28px; }
                    .footer-bottom { flex-direction: column; align-items: flex-start; margin-top: 50px; }
                }
            `}</style>

            <footer className="footer-section">
                <div className="footer-intro">
                    <div className="footer-label-wrap">
                        <span className="footer-label">Conseillère</span>
                        <svg width="60" height="46" viewBox="0 0 60 46" fill="none">
                            <path d="M4 4C16 4 34 8 42 26" stroke="white" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                            <path d="M33 26L44 30L42 18" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                    </div>

                    <div className="footer-photo-wrap">
                        <img src="/images/headshot.png" alt="Marine Junca" className="footer-photo" width={1254} height={1254} loading="lazy" />
                        <a href={SOCIAL_LINKS.email} className="footer-badge footer-badge-mail" aria-label="Envoyer un email à Marine Junca">
                            <Mail size={16} />
                        </a>
                        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="footer-badge footer-badge-linkedin" aria-label="Profil LinkedIn de Marine Junca">
                            in
                        </a>
                    </div>
                </div>

                <span className="footer-tag">Marine Junca</span>

                <h2 className="footer-title">Conseillère en orientation scolaire et professionnelle</h2>

                <a href="/contact" className="footer-cta">Me Contacter</a>

                <div className="footer-bottom">
                    <span className="footer-copyright">© 2026 Marine Junca. Tous droits réservés.</span>
                    <div className="footer-socials">
                        <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Page Facebook de Marine Junca">
                            <FacebookIcon />
                        </a>
                        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Profil Instagram de Marine Junca">
                            <InstagramIcon />
                        </a>
                    </div>
                </div>

                <div className="footer-cloud-wrap">
                    <img src="/images/cloud-divider.png" alt="" width={6400} height={1026} loading="lazy" />
                </div>
            </footer>
        </>
    )
}
