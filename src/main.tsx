import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"
import "./pages.css"
import "./layout.css"
import "./home.css"

const container = document.getElementById("root")!
const app = (
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)

// En production la page arrive déjà rendue (pré-rendu au build) : on l'hydrate.
if (container.hasChildNodes()) ReactDOM.hydrateRoot(container, app)
else ReactDOM.createRoot(container).render(app)
