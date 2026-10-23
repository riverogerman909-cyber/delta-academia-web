import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';

// Envuelve cada tabla del markdown en un contenedor con scroll horizontal,
// para que las tablas anchas no desborden la página en el celular.
function envolverTablas() {
  const visitar = (nodo) => {
    if (!nodo.children) return;
    nodo.children = nodo.children.map((hijo) => {
      if (hijo.type === 'element' && hijo.tagName === 'table') {
        return { type: 'element', tagName: 'div', properties: { className: ['tabla-scroll'] }, children: [hijo] };
      }
      visitar(hijo);
      return hijo;
    });
  };
  return (arbol) => visitar(arbol);
}

// 'site' es el dominio canónico: se usa para el sitemap, los canonical y el SEO.
export default defineConfig({
  site: 'https://deltaacademiagr.com',
  integrations: [sitemap()],
  // Astro 7 cambió el default a 'jsx', que borra los espacios entre texto y etiquetas
  // ("estudiantes de<strong>FCEA"); se mantiene la compresión de siempre.
  compressHTML: true,
  markdown: { processor: unified({ rehypePlugins: [envolverTablas] }) },
  // Vite 8 minifica el CSS con Lightning CSS, que reescribe `@media (max-width: 640px)` como
  // `@media (width <= 640px)`: Safari anterior a 16.4 (iPhone con iOS 15) no lo entiende y
  // pierde el diseño para celular. 128 = Features.MediaRangeSyntax: se mantiene la forma clásica.
  vite: { css: { lightningcss: { include: 128 } } },
});
