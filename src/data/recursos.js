// Recursos gratuitos para estudiantes (simulacros, prácticos resueltos, guías).
// Para agregar uno nuevo: sumá un objeto acá y subí el archivo a /public/recursos/.
// `materia` debe coincidir con el slug de la materia en materias.js.

export const recursos = [
  {
    slug: 'simulacro-contabilidad-general-1-2e',
    materia: 'contabilidad-general-i',
    tipo: 'Simulacro',
    titulo: 'Simulacro · Conciliación bancaria',
    descripcion:
      '11 preguntas de exámenes reales de la FCEA sobre conciliación bancaria, con los cuadros completos y la conciliación resuelta paso a paso.',
    fecha: '2026-09-12',
    interactivo: '/recursos/simulacro-contabilidad-general-1-2e/',
    pdf: '/recursos/simulacro-contabilidad-general-1-2e.pdf',
  },
  {
    slug: 'simulacro-contabilidad-general-1-2c-2d',
    materia: 'contabilidad-general-i',
    tipo: 'Simulacro',
    titulo: 'Simulacro · Temas 2C y 2D',
    descripcion:
      '13 preguntas de exámenes reales de la FCEA sobre registros auxiliares y arqueo de valores, con los ejercicios resueltos paso a paso.',
    fecha: '2026-09-02',
    interactivo: '/recursos/simulacro-contabilidad-general-1-2c-2d/',
    pdf: '/recursos/simulacro-contabilidad-general-1-2c-2d.pdf',
  },
  {
    slug: 'simulacro-contabilidad-general-1-t1-2b',
    materia: 'contabilidad-general-i',
    tipo: 'Simulacro',
    titulo: 'Simulacro · Temas 1, 2A y 2B',
    descripcion:
      '23 preguntas sobre normas contables, efectivo y equivalentes y documentos a cobrar, con respuesta y explicación. Incluye preguntas de exámenes reales de la FCEA y un bloque de repaso de porcentajes de utilidad y registración.',
    fecha: '2026-08-25',
    interactivo: '/recursos/simulacro-contabilidad-general-1-t1-2b/',
    pdf: '/recursos/simulacro-contabilidad-general-1-t1-2b.pdf',
  },
  {
    slug: 'simulacro-conceptos-contables-estados-financieros',
    materia: 'conceptos-contables',
    tipo: 'Simulacro',
    titulo: 'Simulacro · Estados Financieros',
    descripcion:
      '14 preguntas de exámenes y revisiones reales de la FCEA sobre los estados financieros (unidad 7): objetivos, componentes, qué muestra cada estado, notas y usuarios, con respuesta y explicación. Ideal para preparar la segunda revisión.',
    fecha: '2026-10-25',
    interactivo: '/recursos/simulacro-conceptos-contables-estados-financieros/',
    pdf: '/recursos/simulacro-conceptos-contables-estados-financieros.pdf',
  },
  {
    slug: 'simulacro-conceptos-contables-hoja-de-trabajo',
    materia: 'conceptos-contables',
    tipo: 'Simulacro',
    titulo: 'Simulacro · Hoja de Trabajo',
    descripcion:
      '17 preguntas de exámenes y revisiones reales de la FCEA sobre la hoja de trabajo (unidad 8): incógnitas, resultado del ejercicio por diferencia de columnas y clasificación de cuentas, con respuesta y explicación. Ideal para preparar la segunda revisión.',
    fecha: '2026-10-25',
    interactivo: '/recursos/simulacro-conceptos-contables-hoja-de-trabajo/',
    pdf: '/recursos/simulacro-conceptos-contables-hoja-de-trabajo.pdf',
  },
  {
    slug: 'simulacro-conceptos-contables-extornos',
    materia: 'conceptos-contables',
    tipo: 'Simulacro',
    titulo: 'Simulacro · Extornos',
    descripcion:
      '18 preguntas de exámenes y revisiones reales de la FCEA sobre extornos: qué cuentas se extornan, el asiento de extorno y el extorno parcial, con respuesta y explicación. Ideal para preparar la segunda revisión.',
    fecha: '2026-10-25',
    interactivo: '/recursos/simulacro-conceptos-contables-extornos/',
    pdf: '/recursos/simulacro-conceptos-contables-extornos.pdf',
  },
  {
    slug: 'simulacro-conceptos-contables-u6',
    materia: 'conceptos-contables',
    tipo: 'Simulacro',
    titulo: 'Simulacro · Unidad 6',
    descripcion:
      '29 preguntas de exámenes y revisiones reales de la FCEA sobre la unidad 6 —ciclo contable elemental, IVA y retribuciones al personal—, con respuesta y explicación.',
    fecha: '2026-09-12',
    interactivo: '/recursos/simulacro-conceptos-contables-u6/',
    pdf: '/recursos/simulacro-conceptos-contables-u6.pdf',
  },
  {
    slug: 'simulacro-conceptos-contables-u4-u5',
    materia: 'conceptos-contables',
    tipo: 'Simulacro',
    titulo: 'Simulacro · Unidades 4 y 5',
    descripcion:
      '25 preguntas de exámenes y revisiones reales de la FCEA sobre las unidades 4 y 5 —las cuentas y los registros contables—, con respuesta y explicación.',
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
      '27 preguntas de exámenes y revisiones reales de la FCEA sobre las unidades 1 a 3, con respuesta y explicación.',
    fecha: '2026-08-23',
    interactivo: '/recursos/simulacro-conceptos-contables-u1-u3/',
    pdf: '/recursos/simulacro-conceptos-contables-u1-u3.pdf',
  },
];

export function recursosDe(slugMateria) {
  return recursos.filter((r) => r.materia === slugMateria);
}
