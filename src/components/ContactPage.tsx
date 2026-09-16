import { useState } from "react"
import emailjs from "@emailjs/browser"
import { Mail, Phone, MapPin, Clock, CheckCircle2, AlertCircle } from "lucide-react"
import MapEmbed from "./MapEmbed"

const TEAL = "#4EC8C8"
const GREEN = "#90D4A0"

// Identifiants EmailJS liés au compte de Marine (service Gmail : marine.junca@gmail.com)
const EMAILJS_SERVICE_ID = "service_bg6vt8k"
const EMAILJS_TEMPLATE_ID = "template_ubasmxq"
const EMAILJS_PUBLIC_KEY = "wMQf-y_6D9PB8yp4N"

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = e.currentTarget // capturé avant l'await : React vide currentTarget après la phase synchrone
        setStatus("sending")
        try {
            await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, { publicKey: EMAILJS_PUBLIC_KEY })
            setStatus("success")
            form.reset()
        } catch {
            setStatus("error")
        }
    }

    return (
        <>
            <style>{`
                .contact-wrapper {
                    width: 100%;
                    font-family: 'Funnel Display', sans-serif;
                    background: white;
                }

                .contact-hero {
                    padding: 190px 40px 150px 40px;
                    text-align: center;
                    background: linear-gradient(135deg, #90D4A0 0%, #C5E8A0 45%, #4EC8C8 100%);
                }
                .contact-hero h1 {
                    font-size: 64px;
                    font-weight: 700;
                    letter-spacing: -0.03em;
                    line-height: 1.05;
                    color: white;
                    margin: 0;
                }
                @media (max-width: 900px) {
                    .contact-hero { padding: 120px 30px 60px 30px; }
                    .contact-hero h1 { font-size: 42px; }
                }
                @media (max-width: 600px) {
                    .contact-hero h1 { font-size: 32px; }
                }

                /* Section carte + infos */
                .contact-top {
                    padding: 80px 40px 70px 40px;
                    display: flex;
                    flex-direction: row;
                    gap: 50px;
                    align-items: flex-start;
                    justify-content: space-between;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .contact-map {
                    width: 55%;
                    height: 520px;
                    border-radius: 20px;
                    overflow: hidden;
                    flex-shrink: 0;
                    box-shadow: 0 20px 50px rgba(33,33,33,0.12);
                }
                .contact-map iframe {
                    width: 100%;
                    height: 100%;
                    min-height: 520px;
                    border: none;
                    display: block;
                }
                .contact-info {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 36px;
                }
                .contact-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 14px;
                    color: ${TEAL};
                    font-family: 'Gloria Hallelujah', cursive;
                }
                .contact-title {
                    font-size: 36px;
                    font-weight: 600;
                    color: rgb(33,33,33);
                    letter-spacing: -0.03em;
                    line-height: 125%;
                    margin: 0;
                }
                .contact-cards {
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }
                .contact-card {
                    display: flex;
                    align-items: flex-start;
                    gap: 16px;
                    background: rgb(235,238,243);
                    border: 1px solid rgba(33,33,33,0.06);
                    border-radius: 16px;
                    padding: 18px 20px;
                }
                .contact-card-icon {
                    width: 42px; height: 42px; min-width: 42px;
                    border-radius: 12px;
                    display: flex; align-items: center; justify-content: center;
                    background: linear-gradient(135deg, ${GREEN}44, ${TEAL}33);
                    color: rgb(33,33,33);
                }
                .contact-card-label {
                    font-size: 12px;
                    font-weight: 500;
                    color: rgba(33,33,33,0.5);
                    margin: 0 0 4px 0;
                }
                .contact-text {
                    font-size: 15px;
                    color: rgb(33,33,33);
                    line-height: 150%;
                    margin: 0;
                    text-decoration: none;
                    display: block;
                }
                .contact-text:hover { color: ${TEAL}; }

                /* Section formulaire */
                .form-section {
                    padding: 70px 40px 130px 40px;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .form-header { max-width: 600px; margin: 0 auto 50px auto; text-align: center; }
                .form-title {
                    font-size: 44px;
                    font-weight: 600;
                    color: rgb(33,33,33);
                    letter-spacing: -0.03em;
                    line-height: 120%;
                    margin: 12px 0 0 0;
                }
                .form-grid {
                    background: white;
                    border-radius: 24px;
                    border: 1px solid rgba(33,33,33,0.08);
                    box-shadow: 0 20px 60px rgba(33,33,33,0.08);
                    padding: 50px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 26px;
                    max-width: 760px;
                    margin: 0 auto;
                }
                .form-field {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .form-field.full { grid-column: span 2; }
                .form-field label {
                    font-size: 14px;
                    font-weight: 500;
                    color: rgb(33,33,33);
                }
                .form-field input, .form-field textarea {
                    width: 100%;
                    padding: 14px 16px;
                    border-radius: 10px;
                    border: 1px solid rgba(33,33,33,0.12);
                    background: rgb(250,251,252);
                    font-size: 15px;
                    font-family: 'Funnel Display', sans-serif;
                    color: rgb(33,33,33);
                    box-sizing: border-box;
                    outline: none;
                    transition: border-color 0.2s ease, background 0.2s ease;
                }
                .form-field input:focus, .form-field textarea:focus {
                    border-color: ${TEAL};
                    background: white;
                }
                .form-field textarea { resize: vertical; min-height: 120px; }
                .form-submit {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 14px 30px;
                    background: rgb(33,33,33);
                    color: white;
                    border: none;
                    border-radius: 10px;
                    font-size: 15px;
                    font-weight: 600;
                    cursor: pointer;
                    font-family: 'Funnel Display', sans-serif;
                    transition: transform 0.2s ease, opacity 0.2s ease;
                    width: fit-content;
                }
                .form-submit:hover { opacity: 0.88; transform: translateY(-2px); }

                /* Tablet */
                @media (max-width: 900px) {
                    .contact-top {
                        flex-direction: column;
                        padding: 60px 30px 50px 30px;
                    }
                    .contact-map {
                        width: 100%;
                        height: 350px;
                    }
                    .form-section { padding: 50px 30px 80px 30px; }
                    .form-title { font-size: 32px; }
                    .form-grid { padding: 30px; }
                }

                /* Mobile */
                @media (max-width: 600px) {
                    .contact-top { padding: 50px 20px 40px 20px; gap: 30px; }
                    .contact-map { height: 260px; }
                    .contact-title { font-size: 26px; }
                    .form-section { padding: 40px 20px 60px 20px; }
                    .form-title { font-size: 26px; }
                    .form-grid {
                        grid-template-columns: 1fr;
                        padding: 24px;
                        gap: 20px;
                    }
                    .form-field.full { grid-column: span 1; }
                }
            `}</style>

            <div className="contact-wrapper">

                {/* Hero */}
                <div className="contact-hero">
                    <h1>Entrer en contact</h1>
                </div>

                {/* Section carte + infos */}
                <div className="contact-top">
                    <div className="contact-map">
                        <MapEmbed />
                    </div>

                    <div className="contact-info">
                        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                            <span className="contact-eyebrow">📍 Contact</span>
                            <h2 className="contact-title">Prenons contact pour discuter de votre projet d'orientation</h2>
                        </div>

                        <div className="contact-cards">
                            <div className="contact-card">
                                <div className="contact-card-icon"><Mail size={20} /></div>
                                <div>
                                    <p className="contact-card-label">Email</p>
                                    <a href="mailto:marine.junca@gmail.com" className="contact-text">marine.junca@gmail.com</a>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="contact-card-icon"><Phone size={20} /></div>
                                <div>
                                    <p className="contact-card-label">Téléphone</p>
                                    <a href="tel:+33640452328" className="contact-text">+33 06 40 45 23 28</a>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="contact-card-icon"><MapPin size={20} /></div>
                                <div>
                                    <p className="contact-card-label">Zone d'intervention</p>
                                    <p className="contact-text">Rivière-Saas-et-Gourby (40), Landes — Nouvelle-Aquitaine</p>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="contact-card-icon"><Clock size={20} /></div>
                                <div>
                                    <p className="contact-card-label">Disponibilités</p>
                                    <p className="contact-text">Lundi – Vendredi : 9h – 19h</p>
                                    <p className="contact-text">Samedi : 9h - 12h</p>
                                    <p className="contact-text" style={{ color: "rgba(33,33,33,0.5)", marginTop: 4 }}>Déplacement inclus dans un rayon de 45 km</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section formulaire */}
                <div className="form-section">
                    <div className="form-header">
                        <span className="contact-eyebrow">✉️ Formulaire</span>
                        <h2 className="form-title">Je suis là pour vous aider à construire le bon projet</h2>
                    </div>
                    <form className="form-grid" onSubmit={handleSubmit}>
                        <div className="form-field">
                            <label>Votre prénom et nom</label>
                            <input type="text" name="name" placeholder="Marie Dupont" required />
                        </div>
                        <div className="form-field">
                            <label>Votre adresse email</label>
                            <input type="email" name="email" placeholder="marie@email.com" required />
                        </div>
                        <div className="form-field full">
                            <label>Parlez-moi de la situation de votre enfant et de l'offre qui vous intéresse</label>
                            <textarea name="message" placeholder="Mon enfant est en terminale et hésite entre..." required />
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                            <button type="submit" className="form-submit" disabled={status === "sending"}>
                                {status === "sending" ? "Envoi en cours..." : "Envoyer ma demande →"}
                            </button>
                            {status === "success" && (
                                <span style={{ display: "flex", alignItems: "center", gap: 6, color: "#2d7a4f", fontSize: 14, fontWeight: 500 }}>
                                    <CheckCircle2 size={18} /> Message envoyé, merci !
                                </span>
                            )}
                            {status === "error" && (
                                <span style={{ display: "flex", alignItems: "center", gap: 6, color: "#c0392b", fontSize: 14, fontWeight: 500 }}>
                                    <AlertCircle size={18} /> Erreur d'envoi, réessaie ou écris directement par email.
                                </span>
                            )}
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}
