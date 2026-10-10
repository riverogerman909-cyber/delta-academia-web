import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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
  markdown: { rehypePlugins: [envolverTablas] },
});
