// Génère un fichier HTML complet par page (contenu + balises SEO) à partir du bundle serveur.
// Les robots qui n'exécutent pas JavaScript (Bing, ChatGPT, aperçus de liens) voient ainsi la vraie page.
import fs from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"

const dist = path.resolve("dist")
const ssrDir = path.resolve("dist-ssr")
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8")
const { render, routes, NOT_FOUND, buildHead } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href)

function write(route, file) {
    const html = template
        .replace("<!--seo-head-->", buildHead(route))
        .replace('<div id="root"></div>', `<div id="root">${render(route.path)}</div>`)
    const out = path.join(dist, file)
    fs.mkdirSync(path.dirname(out), { recursive: true })
    fs.writeFileSync(out, html)
    console.log("  ✓", route.path, "→", file)
}

for (const route of routes) write(route, route.path === "/" ? "index.html" : `${route.path.slice(1)}.html`)
write(NOT_FOUND, "404.html")

const today = new Date().toISOString().slice(0, 10)
const urls = routes.filter(r => !r.noindex).map(r =>
    `  <url>\n    <loc>https://marine-junca-orientation.fr${r.path === "/" ? "/" : r.path}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`
).join("\n")
fs.writeFileSync(path.join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
console.log("  ✓ sitemap.xml")

fs.rmSync(ssrDir, { recursive: true, force: true })
