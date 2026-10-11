// Novedades del carrusel de la portada. Para sumar una, agregá un objeto (el orden es el de la lista).
// tipo 'clase': clase abierta por venir. `inicio` y `fin` con hora de Uruguay (-03:00): pasada la hora
// de fin, la tarjeta y el aviso del hero pasan solos a "Ya se dio". `articulo` ('el' o 'la') va antes
// del docente en la tarjeta ("Con el Cr. Ec. …").
// tipo 'grabacion': clase ya dada. `video` admite { youtube: 'ID' } o { drive: 'ID' } (el archivo de
// Drive tiene que estar compartido como "cualquier persona con el enlace"). Sin video, la tarjeta
// lleva al grupo general de WhatsApp, donde quedan las grabaciones.

export const GRUPO_WHATSAPP = 'https://chat.whatsapp.com/CQq2ztEqtA9Jv3HL4AnpcV';

export const novedades = [
  {
    tipo: 'clase',
    id: 'clases-abiertas-cc-cg1-2026-10-12',
    titulo: 'Clases abiertas de contabilidad',
    aviso: 'clases abiertas y gratuitas de Conceptos Contables y Contabilidad General 1',
    inicio: '2026-10-12T15:00:00-03:00',
    fin: '2026-10-12T18:30:00-03:00',
    articulo: 'el',
    docente: 'Cr. Ec. Germán Rivero',
    descripcion: 'Ejercicios en vivo por Zoom, paso a paso y con el razonamiento detrás de cada respuesta. Gratis y abiertas: no hace falta ser alumno de Delta.',
    sesiones: [
      { hora: '15:00', materia: 'Conceptos Contables', slug: 'conceptos-contables' },
      { hora: '17:00', materia: 'Contabilidad General 1', slug: 'contabilidad-general-i' },
    ],
  },
  {
    tipo: 'grabacion',
    id: 'grabacion-calculo-1-2026-10-03',
    materia: 'Cálculo 1',
    slug: 'calculo-1',
    fecha: '2026-10-03',
    hora: '19:00',
    docente: 'Lic. Belén Retamosa',
    descripcion: 'Clase abierta con ejercicios tipo revisión resueltos paso a paso.',
    video: null,
  },
  {
    tipo: 'grabacion',
    id: 'grabacion-calculo-1b-2026-10-03',
    materia: 'Cálculo 1B',
    slug: 'calculo-1b',
    fecha: '2026-10-03',
    hora: '17:00',
    docente: 'Lic. Belén Retamosa',
    descripcion: 'Clase abierta con ejercicios tipo revisión resueltos paso a paso.',
    video: null,
  },
  {
    tipo: 'grabacion',
    id: 'grabacion-calculo-1a-2026-10-03',
    materia: 'Cálculo 1A',
    slug: 'calculo-1a',
    fecha: '2026-10-03',
    hora: '15:00',
    docente: 'Lic. Belén Retamosa',
    descripcion: 'Clase abierta con ejercicios tipo revisión resueltos paso a paso.',
    video: null,
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
