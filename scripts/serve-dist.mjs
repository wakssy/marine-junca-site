// Petit serveur local qui imite Vercel (cleanUrls + 404.html) pour tester la version pré-rendue
import http from "node:http"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../dist")
const port = Number(process.env.PORT) || 4173
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".jpg": "image/jpeg", ".ico": "image/x-icon", ".mp4": "video/mp4", ".xml": "application/xml", ".txt": "text/plain" }

http.createServer((req, res) => {
    const url = decodeURIComponent(req.url.split("?")[0])
    const candidates = url === "/" ? ["index.html"] : [url.slice(1), `${url.slice(1)}.html`]
    const file = candidates.map(c => path.join(root, c)).find(f => f.startsWith(root) && fs.existsSync(f) && fs.statSync(f).isFile())
    if (!file) {
        res.writeHead(404, { "Content-Type": types[".html"] })
        return fs.createReadStream(path.join(root, "404.html")).pipe(res)
    }
    res.writeHead(200, { "Content-Type": types[path.extname(file)] ?? "application/octet-stream" })
    fs.createReadStream(file).pipe(res)
}).listen(port, () => console.log(`http://localhost:${port}`))
