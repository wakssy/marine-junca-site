# Marine Junca — Orientation Scolaire (site React/Vite éditable)

Ceci est une **vraie application qui tourne** — pas juste des morceaux de code — assemblée à
partir de tes composants Framer originaux. Tu peux la lancer en local, la modifier, et
demander à Claude de la modifier pour toi.

## Installer et lancer (une seule fois)

1. **Installer Node.js** (si pas déjà fait) : https://nodejs.org → télécharger la version "LTS", installer normalement (Suivant, Suivant...)
2. Ouvrir un terminal dans ce dossier (`marine-junca-site`)
3. Taper :
   ```
   npm install
   npm run dev
   ```
4. Ouvrir le lien affiché dans le terminal (en général http://localhost:5173) dans ton navigateur

À chaque modification de fichier, la page se rafraîchit automatiquement.

## Utiliser Claude pour le modifier

**Recommandé : Claude Code (l'app desktop d'Anthropic)**
1. Installe Claude Code (demande à Claude comment faire si besoin, ou via claude.ai)
2. Ouvre ce dossier (`marine-junca-site`) dans Claude Code
3. Dis-lui simplement ce que tu veux changer, ex : "change la couleur du bouton principal en bleu",
   "ajoute une section vidéo témoignage", "améliore le responsive mobile de la section pricing"
4. Claude modifie les fichiers directement, tu vois le résultat en direct dans ton navigateur
   (garde `npm run dev` lancé dans un terminal à côté)

**Alternative : rester dans ce chat (claude.ai)**
Envoie-moi les fichiers que tu veux modifier (ou dis-moi juste ce que tu veux changer si le
projet est encore dans notre historique), je te renvoie les fichiers mis à jour.

## Structure du projet

```
src/
  main.tsx          → point d'entrée
  App.tsx            → navigation + routes (/ et /contact)
  index.css          → couleurs, polices, styles globaux
  pages/
    Home.tsx          → page d'accueil (assemble toutes les sections)
    Contact.tsx        → page de contact
  components/         → tes composants originaux (nettoyés des dépendances Framer)
    AccordionCard.tsx
    CoachScolaireSection.tsx
    ContactPage.tsx
    GradientBg.tsx
    LocalSEOSections.tsx
    ManifestSection.tsx
    MapEmbed.tsx
    NavMobile.tsx
    PricingCards.tsx
    PricingCards.tsx
    RetroGrid.tsx
    SEOHead.tsx
```

## Notes importantes

- **Le design n'est pas pixel-perfect par rapport au site Framer d'origine.** Les sections
  "maison" (hero, grille de features, témoignages, comparaison, FAQ) ont été recréées en
  HTML/CSS simple à partir du contenu réel du site — la mise en page précise de Framer
  (positions, animations avancées, effets de particules...) n'a pas d'équivalent automatique
  sans l'export payant de Framer. C'est une **bonne base de départ**, pas une copie parfaite.
- Le déploiement en ligne (pour remplacer le site Framer actuel) peut se faire facilement sur
  Vercel ou Netlify une fois que tu es content du résultat — demande-moi quand tu y es.
