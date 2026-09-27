// Novedades del carrusel de la portada. Para sumar una, agregá un objeto (el orden es el de la lista).
// tipo 'clase': clase abierta por venir. `inicio` y `fin` con hora de Uruguay (-03:00): pasada la hora
// de fin, la tarjeta y el aviso del hero pasan solos a "Ya se dio".
// tipo 'grabacion': clase ya dada. `video` admite { youtube: 'ID' } o { drive: 'ID' } (el archivo de
// Drive tiene que estar compartido como "cualquier persona con el enlace"). Sin video, la tarjeta
// lleva al grupo general de WhatsApp, donde quedan las grabaciones.

export const GRUPO_WHATSAPP = 'https://chat.whatsapp.com/CQq2ztEqtA9Jv3HL4AnpcV';

export const novedades = [
  {
    tipo: 'clase',
    id: 'clases-abiertas-calculo-2026-10-03',
    titulo: 'Clases abiertas de Cálculo',
    aviso: 'clases abiertas y gratuitas de Cálculo',
    inicio: '2026-10-03T15:00:00-03:00',
    fin: '2026-10-03T20:30:00-03:00',
    docente: 'Lic. Belén Retamosa',
    descripcion: 'Ejercicios tipo revisión resueltos paso a paso, por Zoom. Gratis y abiertas: no hace falta ser alumno de Delta. El link lo pasamos por el grupo general de WhatsApp.',
    sesiones: [
      { hora: '15:00', materia: 'Cálculo 1A', slug: 'calculo-1a' },
      { hora: '17:00', materia: 'Cálculo 1B', slug: 'calculo-1b' },
      { hora: '19:00', materia: 'Cálculo 1', slug: 'calculo-1' },
    ],
  },
  {
    tipo: 'grabacion',
    id: 'grabacion-cg1-2026-09-26',
    materia: 'Contabilidad General 1',
    slug: 'contabilidad-general-i',
    fecha: '2026-09-26',
    hora: '19:00',
    docente: 'Cr. Ec. Germán Rivero',
    descripcion: 'Clase abierta con ejercicios tipo revisión resueltos paso a paso.',
    video: null,
  },
  {
    tipo: 'grabacion',
    id: 'grabacion-cc-2026-09-26',
    materia: 'Conceptos Contables',
    slug: 'conceptos-contables',
    fecha: '2026-09-26',
    hora: '16:00',
    docente: 'Cr. Ec. Germán Rivero',
    descripcion: 'Clase abierta con ejercicios tipo revisión resueltos paso a paso.',
    video: null,
  },
  {
    tipo: 'grabacion',
    id: 'grabacion-llss-2026-09-26',
    materia: 'Legislación Laboral y Seguridad Social',
    slug: 'legislacion-laboral-seguridad-social',
    fecha: '2026-09-26',
    hora: '14:00',
    docente: 'Cra. Camila Gil',
    descripcion: 'Clase abierta con ejercicios tipo revisión resueltos paso a paso.',
    video: null,
  },
];
