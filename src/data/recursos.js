// Recursos gratuitos para estudiantes (simulacros, prácticos resueltos, guías).
// Para agregar uno nuevo: sumá un objeto acá y subí el archivo a /public/recursos/.
// `materia` debe coincidir con el slug de la materia en materias.js.

export const recursos = [
  {
    slug: 'simulacro-contabilidad-general-1-t1-2b',
    materia: 'contabilidad-general-i',
    tipo: 'Simulacro',
    titulo: 'Simulacro · Temas 1, 2A y 2B',
    descripcion:
      '23 preguntas sobre normas contables, efectivo y equivalentes y documentos a cobrar, con respuesta y explicación. Incluye preguntas de exámenes reales de la FCEA y un bloque de repaso de porcentajes de utilidad y registración. Ideal para preparar la primera revisión.',
    fecha: '2026-08-25',
    interactivo: '/recursos/simulacro-contabilidad-general-1-t1-2b/',
    pdf: '/recursos/simulacro-contabilidad-general-1-t1-2b.pdf',
  },
  {
    slug: 'simulacro-conceptos-contables-u4-u5',
    materia: 'conceptos-contables',
    tipo: 'Simulacro',
    titulo: 'Simulacro · Unidades 4 y 5',
    descripcion:
      '25 preguntas de exámenes y revisiones reales de la FCEA sobre las unidades 4 y 5 —las cuentas y los registros contables—, con respuesta y explicación. Ideal para preparar la primera revisión.',
    fecha: '2026-09-02',
    interactivo: '/recursos/simulacro-conceptos-contables-u4-u5/',
    pdf: '/recursos/simulacro-conceptos-contables-u4-u5.pdf',
  },
  {
    slug: 'simulacro-conceptos-contables-u1-u3',
    materia: 'conceptos-contables',
    tipo: 'Simulacro',
    titulo: 'Simulacro · Unidades 1, 2 y 3',
    descripcion:
      '27 preguntas de exámenes y revisiones reales de la FCEA sobre las unidades 1 a 3, con respuesta y explicación. Ideal para preparar la primera revisión.',
    fecha: '2026-08-23',
    interactivo: '/recursos/simulacro-conceptos-contables-u1-u3/',
    pdf: '/recursos/simulacro-conceptos-contables-u1-u3.pdf',
  },
];

export function recursosDe(slugMateria) {
  return recursos.filter((r) => r.materia === slugMateria);
}
