import { useState } from "react"
import emailjs from "@emailjs/browser"
import { Mail, Phone, MapPin, Clock, CheckCircle2, AlertCircle } from "lucide-react"
import MapEmbed from "./MapEmbed"
import { BUSINESS } from "../seo/site"
import { Mark, CloudDivider, delay } from "./ui"

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
        const data = Object.fromEntries(new FormData(form)) as Record<string, string>
        // Le modèle EmailJS n'affiche que {{name}}, {{email}} et {{message}} : les infos de qualification
        // sont donc regroupées en tête du message pour apparaître sans modifier le modèle.
        const message = [
            `Classe / situation : ${data.classe || "non précisé"}`,
            `Commune : ${data.commune || "non précisé"}`,
            `Téléphone : ${data.phone || "non précisé"}`,
            `Format souhaité : ${data.format || "non précisé"}`,
            "",
            data.message,
        ].join("\n")
        setStatus("sending")
        try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { ...data, message }, { publicKey: EMAILJS_PUBLIC_KEY })
            setStatus("success")
            form.reset()
            // Page de remerciement dédiée : permet de compter les demandes envoyées dans les statistiques de visite
            window.location.assign("/merci")
        } catch {
            setStatus("error")
        }
    }

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: `
                .contact-wrapper {
                    width: 100%;
                    font-family: 'Funnel Display', sans-serif;
                    background: white;
                    font-family: var(--font-text);
                }

                .contact-hero {
                    position: relative; overflow: hidden;
                    padding: clamp(150px, 15vw, 196px) var(--gutter) clamp(120px, 12vw, 170px);
                    text-align: center;
                    background: var(--gradient);
                }
                .contact-hero-inner { position: relative; }
                .contact-hero h1 {
                    font-size: clamp(40px, 6vw, 80px);
                    font-weight: 600;
                    letter-spacing: -0.04em;
                    line-height: 1;
                    color: var(--ink);
                    margin: 0;
                }
                .contact-hero p { color: rgba(19,41,46,0.82); font-size: clamp(17px, 1.6vw, 20px); margin: 20px auto 0; max-width: 620px; line-height: 1.55; }

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
                    color: var(--teal-ink);
                    font-family: var(--font-hand);
                }
                .contact-title {
                    font-family: var(--font-display);
                    font-size: clamp(28px, 3vw, 38px);
                    font-weight: 600;
                    color: var(--ink);
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
                    background: var(--paper);
                    box-shadow: inset 0 0 0 1px var(--line);
                    border-radius: 20px;
                    padding: 18px 20px;
                    transition: transform 0.5s var(--ease-spring), box-shadow 0.4s var(--ease-out), background-color 0.3s;
                }
                .contact-card:hover {
                    transform: translateY(-2px);
                    background: white;
                    box-shadow: inset 0 0 0 1px var(--line), var(--shadow-sm);
                }
                .contact-card-icon {
                    width: 42px; height: 42px; min-width: 42px;
                    border-radius: 12px;
                    display: flex; align-items: center; justify-content: center;
                    background: linear-gradient(135deg, ${GREEN}44, ${TEAL}33);
                    color: var(--ink);
                }
                .contact-card-label {
                    font-size: 12px;
                    font-weight: 500;
                    color: var(--ink-3);
                    margin: 0 0 4px 0;
                }
                .contact-text {
                    font-size: 15px;
                    color: var(--ink);
                    line-height: 150%;
                    margin: 0;
                    text-decoration: none;
                    display: block;
                }
                .contact-text:hover { color: var(--teal-ink); }

                /* Section formulaire */
                .form-section {
                    padding: 70px 40px 130px 40px;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .form-header { max-width: 600px; margin: 0 auto 50px auto; text-align: center; }
                .form-title {
                    font-family: var(--font-display);
                    font-size: clamp(30px, 3.6vw, 46px);
                    font-weight: 600;
                    color: var(--ink);
                    letter-spacing: -0.03em;
                    line-height: 120%;
                    margin: 12px 0 0 0;
                }
                .form-grid {
                    background: white;
                    border-radius: 32px;
                    box-shadow: inset 0 0 0 1px var(--line), var(--shadow-lg);
                    padding: clamp(24px, 4vw, 50px);
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
                    color: var(--ink);
                }
                .form-field input, .form-field textarea, .form-field select {
                    width: 100%;
                    padding: 15px 16px;
                    border-radius: 14px;
                    border: 1px solid var(--line-strong);
                    background: var(--paper);
                    font-size: 16px;
                    font-family: var(--font-text);
                    color: var(--ink);
                    box-sizing: border-box;
                    outline: none;
                    transition: border-color 0.2s ease, background 0.2s ease;
                }
                .form-field .optional { color: var(--ink-3); font-weight: 400; }
                .form-field input:focus, .form-field textarea:focus, .form-field select:focus {
                    border-color: var(--teal-ink);
                    background: white;
                    box-shadow: 0 0 0 4px rgba(78,200,200,0.18);
                }
                .form-field textarea { resize: vertical; min-height: 120px; }
                .form-submit {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    min-height: 54px;
                    padding: 0 30px;
                    background: var(--ink);
                    color: white;
                    border: none;
                    border-radius: 999px;
                    font-size: 15.5px;
                    font-weight: 600;
                    cursor: pointer;
                    font-family: var(--font-display);
                    box-shadow: 0 14px 30px -12px rgba(19,41,46,0.55);
                    transition: transform 0.5s var(--ease-spring), background-color 0.3s;
                    width: fit-content;
                }
                .form-submit:hover { background: #0B1D21; transform: translateY(-2px); }
                .form-submit:active { transform: scale(0.97); }
                .form-submit:disabled { opacity: 0.6; cursor: progress; transform: none; }

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
            ` }} />

            <div className="contact-wrapper">

                {/* Hero */}
                <div className="contact-hero">
                    <div className="ph-glow" aria-hidden="true" />
                    <div className="contact-hero-inner">
                        <h1 className="hero-in">Prendre <Mark>rendez-vous</Mark></h1>
                        <p className="hero-in" style={delay(120)}>Le premier rendez-vous est gratuit et sans engagement. Appelez-moi ou laissez un message, je vous réponds au plus vite.</p>
                    </div>
                </div>
                <CloudDivider />

                {/* Section carte + infos */}
                <div className="contact-top">
                    <div className="contact-map">
                        <MapEmbed />
                    </div>

                    <div className="contact-info">
                        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                            <span className="contact-eyebrow">Contact</span>
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
                                    <a href={BUSINESS.phoneHref} className="contact-text" style={{ fontWeight: 600, fontSize: 17 }}>{BUSINESS.phoneDisplay}</a>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="contact-card-icon"><MapPin size={20} /></div>
                                <div>
                                    <p className="contact-card-label">Zone d'intervention</p>
                                    <p className="contact-text">À domicile dans un rayon de 45 km autour de Rivière-Saas-et-Gourby (40180), près de Dax</p>
                                    <p className="contact-text" style={{ color: "var(--ink-3)", marginTop: 4 }}>Partout en visio au-delà</p>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="contact-card-icon"><Clock size={20} /></div>
                                <div>
                                    <p className="contact-card-label">Disponibilités</p>
                                    <p className="contact-text">Lundi – Vendredi : 9h – 19h</p>
                                    <p className="contact-text">Samedi : 9h - 12h</p>
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
                            <label htmlFor="f-name">Votre prénom et nom</label>
                            <input id="f-name" type="text" name="name" autoComplete="name" placeholder="Marie Dupont" required />
                        </div>
                        <div className="form-field">
                            <label htmlFor="f-email">Votre adresse email</label>
                            <input id="f-email" type="email" name="email" autoComplete="email" placeholder="marie@email.com" required />
                        </div>
                        <div className="form-field">
                            <label htmlFor="f-phone">Téléphone <span className="optional">(facultatif)</span></label>
                            <input id="f-phone" type="tel" name="phone" autoComplete="tel" placeholder="06 12 34 56 78" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="f-commune">Votre commune</label>
                            <input id="f-commune" type="text" name="commune" autoComplete="address-level2" placeholder="Dax" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="f-classe">Classe de votre enfant</label>
                            <select id="f-classe" name="classe" defaultValue="" required>
                                <option value="" disabled>Choisir…</option>
                                <option>4e</option>
                                <option>3e</option>
                                <option>Seconde</option>
                                <option>Première</option>
                                <option>Terminale</option>
                                <option>Étudiant(e) / après le bac</option>
                                <option>Autre</option>
                            </select>
                        </div>
                        <div className="form-field">
                            <label htmlFor="f-format">Format souhaité</label>
                            <select id="f-format" name="format" defaultValue="Pas de préférence">
                                <option>Pas de préférence</option>
                                <option>À domicile</option>
                                <option>En visio</option>
                            </select>
                        </div>
                        <div className="form-field full">
                            <label htmlFor="f-message">Parlez-moi de la situation de votre enfant</label>
                            <textarea id="f-message" name="message" placeholder="Mon enfant est en terminale et hésite entre..." required />
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
