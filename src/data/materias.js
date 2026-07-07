// Datos de las materias, extraídos de las fichas oficiales de FCEA.
// Para agregar o editar una materia, modificá este archivo: el sitio se actualiza solo.

export const materias = [
  {
    slug: 'conceptos-contables',
    nombre: 'Conceptos Contables',
    codigo: 'C10',
    semestre: 'Primer semestre',
    creditos: 10,
    area: 'Contabilidad e Impuestos',
    previa: 'No requiere previas',
    resumen:
      'La puerta de entrada a la contabilidad. Aprendé a leer e interpretar la información contable como parte del sistema de información de una organización.',
    objetivo:
      'Introducir al estudiante en la caracterización y manejo de la información contable como parte del sistema de información de un ente, que informa sobre el patrimonio y sus variaciones.',
    temario: [
      'La contabilidad y sus objetivos: organizaciones, administración y proceso decisorio',
      'La información contable: características, requisitos y estados financieros',
      'Reconocimiento contable de las variaciones patrimoniales y ecuación contable fundamental',
      'Las cuentas: concepto, plan y manuales de cuentas',
      'Procesamiento de datos: registros contables básicos (Diario y Mayor)',
      'Ciclo contable elemental: apertura, gestión, resultados y cierre',
      'El proceso contable y la estructura patrimonial y de resultados',
      'Ajustes por balance',
    ],
    evaluacion:
      '2 pruebas escritas (múltiple opción y respuesta calculada). Exonera con 50 puntos en total.',
  },
  {
    slug: 'contabilidad-general-i',
    nombre: 'Contabilidad General I',
    codigo: 'C20',
    semestre: 'Segundo semestre',
    creditos: 10,
    area: 'Contabilidad e Impuestos',
    previa: 'Conceptos Contables',
    resumen:
      'El primer paso en los estados financieros bajo NIIF para PYMES: efectivo, créditos, inventarios y bienes de uso.',
    objetivo:
      'Lograr un conocimiento cabal sobre componentes relevantes de los estados financieros —efectivo, créditos por ventas, inventarios y propiedades, planta y equipo— de acuerdo a las normas contables adecuadas en Uruguay (NIIF para PYMES).',
    temario: [
      'Normas contables: concepto, tipos y situación en Uruguay',
      'Efectivo y equivalentes de efectivo. Créditos por ventas y conciliación bancaria',
      'Inventarios: costo, valuación y sistemas de registración',
      'Propiedades, planta y equipo (PPyE): costo, depreciación y valuación posterior',
      'Asiento de apertura',
      'Presentación de estados financieros',
    ],
    evaluacion:
      '3 pruebas (una virtual con material, dos presenciales sin material). Exonera con 50 puntos en total.',
  },
  {
    slug: 'derecho-actividad-empresarial-i',
    nombre: 'Derecho y Actividad Empresarial I',
    codigo: 'J23',
    semestre: 'Segundo semestre',
    creditos: 10,
    area: 'Jurídica',
    previa: 'No requiere previas',
    resumen:
      'Los cimientos jurídicos del contador: Derecho Privado, Comercial y Societario aplicados a la actividad empresarial.',
    objetivo:
      'Brindar los aspectos introductorios del área jurídica, con énfasis en los conceptos de Derecho Comercial y Societario necesarios para la actuación profesional del contador público.',
    temario: [
      'Introducción al Derecho Privado: principios e instituciones',
      'Concepto de empresario y empresario societario. Tipología social',
      'Bienes con regulación especial: establecimiento comercial y propiedad industrial',
      'El empresario en su actuación externa: competencia, consumidor y contratos comerciales',
      'Títulos valores',
      'Crisis empresariales y principios de derecho concursal',
    ],
    evaluacion:
      '2 revisiones múltiple opción (una virtual, una presencial). Exonera con 50 puntos en total.',
  },
  {
    slug: 'contabilidad-general-iii',
    nombre: 'Contabilidad General III',
    codigo: 'C40',
    semestre: 'Cuarto semestre',
    creditos: 10,
    area: 'Contabilidad e Impuestos',
    previa: 'Contabilidad General II',
    resumen:
      'El cierre del ciclo: elaborá e interpretá un juego completo de estados financieros y su presentación ante la AIN.',
    objetivo:
      'Desarrollar las competencias para elaborar e interpretar un juego completo de estados financieros al cierre de un ejercicio según NIIF para PYMES, incluyendo su presentación en la Central de Balances Electrónica (CBE) ante la AIN.',
    temario: [
      'La contabilidad y los distintos tipos de informes (financieros y de sostenibilidad)',
      'Tareas de preparación de estados financieros y control interno',
      'Ajustes para el reconocimiento y medición de activos, pasivos, ingresos y gastos',
      'Presentación de estados financieros: ESF, ERI, ECP, EFE y Notas',
      'Análisis integral de un juego completo de estados financieros',
      'Presentación en la Central de Balances Electrónica (CBE) y taxonomía XBRL',
      'Elaboración de informes financieros mensuales internos',
    ],
    evaluacion:
      '3 revisiones + 4 controles de lectura. Exonera con 50 puntos en total.',
  },
];

export function getMateria(slug) {
  return materias.find((m) => m.slug === slug);
}
