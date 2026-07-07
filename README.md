# Delta Academia — Sitio web

Sitio de Delta Academia, acompañamiento paralelo a la facultad para estudiantes de FCEA (UdelaR).
Construido con [Astro](https://astro.build).

## Requisitos
- Node.js 18+ (instalado vía nvm en esta máquina). En una terminal nueva: `. "$HOME/.nvm/nvm.sh"`

## Comandos

| Comando | Qué hace |
|---|---|
| `npm install` | Instala las dependencias |
| `npm run dev` | Levanta el sitio en `http://localhost:4321` para desarrollo |
| `npm run build` | Genera el sitio estático en `dist/` |
| `npm run preview` | Previsualiza el build de producción |

## Estructura

```
src/
├── data/materias.js        ← editá acá las materias (agregar/quitar es fácil)
├── layouts/Base.astro      ← plantilla base (SEO, fuentes, header/footer)
├── components/             ← Header y Footer
├── styles/global.css       ← colores de marca y sistema de diseño
└── pages/                  ← una página por archivo
public/                     ← logo, favicon (archivos estáticos)
```

## Cómo agregar una materia nueva
Abrí `src/data/materias.js` y copiá un bloque existente, cambiando los datos.
La página de la materia se genera sola.

## Marca
Azul `#1D3A6E` · Ámbar `#F59E0B` · Playfair Display + DM Sans.
