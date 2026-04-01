# 3D Portfolio

Interactive **isometric room** portfolio built in React: explore the scene and **click objects** to jump into sections about work and background. Models lean on a **single-color** look (periwinkle / blue-gray) with a calm, editorial feel.

[![Live site](https://img.shields.io/badge/site-trevsm.github.io%2F3D--Portfolio-111?style=for-the-badge)](https://trevsm.github.io/3D-Portfolio/)

## Preview

<p align="center">
  <img width="100%" alt="Isometric 3D room portfolio — desk, laptop, chair, and intro copy" src="https://github.com/user-attachments/assets/5f37672f-3a63-411e-9ad2-7c7a40d1739f" />
</p>

## Features

- **3D scene in the browser** — Room, furniture, and props rendered with **React Three Fiber** (Three.js).
- **Motion** — Transitions and interaction feel handled with **react-spring**.
- **Asset pipeline** — Environment and objects modeled in **Blender**, brought into the React/R3F app.
- **GitHub Pages** — Static deployment at the link above.

## Tech stack

| Layer | Tools |
|--------|--------|
| UI | [React](https://react.dev/) |
| 3D | [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) (Three.js) |
| Animation | [react-spring](https://www.react-spring.dev/) |
| 3D content | [Blender](https://www.blender.org/) |
| Hosting | [GitHub Pages](https://pages.github.com/) (`/3D-Portfolio`) |

## Local development

```bash
git clone https://github.com/trevsm/3D-Portfolio.git
cd 3D-Portfolio
npm install
npm run dev
```

If your dev script is different (e.g. `npm start`), use whatever is in `package.json`.

## Build

```bash
npm run build
```

Follow your usual **GitHub Pages** flow for this repo (e.g. deploy from `gh-pages` or GitHub Actions) so `https://trevsm.github.io/3D-Portfolio/` stays in sync.

## License

Add your license file and a one-line note here (e.g. MIT) if you publish the repo publicly.
