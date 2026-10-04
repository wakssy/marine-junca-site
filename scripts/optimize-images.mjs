// Génère les variantes WebP (plusieurs largeurs) des photos du site, et un logo recadré.
// À relancer après avoir remplacé une photo : node scripts/optimize-images.mjs
import sharp from "sharp"
import path from "node:path"

const dir = path.resolve("public/images")

const jobs = [
    { src: "hero-photo.png", widths: [960, 1690], quality: 78 },
    { src: "curriculum-photo.png", widths: [760, 1400], quality: 78 },
    { src: "headshot.png", widths: [320, 800], quality: 80 },
    { src: "cloud-divider.png", widths: [1600, 3200], quality: 80 },
]

for (const job of jobs) {
    const base = job.src.replace(/\.png$/, "")
    for (const w of job.widths) {
        const out = path.join(dir, `${base}-${w}.webp`)
        const info = await sharp(path.join(dir, job.src)).resize({ width: w, withoutEnlargement: true }).webp({ quality: job.quality, alphaQuality: 90 }).toFile(out)
        console.log("  ✓", path.basename(out), `${Math.round(info.size / 1024)} Ko`)
    }
}

// Le logo d'origine a beaucoup de marge blanche : on la retire pour qu'il reste lisible à 44 px de haut
const trimmed = await sharp(path.join(dir, "logo.png")).trim({ threshold: 12 }).toBuffer()
const square = await sharp(trimmed).resize(240, 240, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } }).png().toBuffer()
await sharp(square).toFile(path.join(dir, "logo-mark.png"))
const info = await sharp(square).webp({ quality: 90 }).toFile(path.join(dir, "logo-mark.webp"))
console.log("  ✓ logo-mark.webp", `${Math.round(info.size / 1024)} Ko`)
