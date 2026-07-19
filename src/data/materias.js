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
  {
    slug: 'legislacion-laboral-seguridad-social',
    nombre: 'Legislación Laboral y Seguridad Social',
    codigo: 'C41',
    semestre: 'Cuarto semestre',
    creditos: 10,
    area: 'Impuestos y Normativa',
    previa: 'Conceptos Contables y Derecho y Actividad Empresarial I (Plan 2024)',
    resumen:
      'Todo lo que un contador necesita para liquidar sueldos y aportes: derecho laboral, cargas sociales, IRPF e indemnizaciones.',
    objetivo:
      'Que el estudiante identifique los conceptos de Derecho Laboral y de la Seguridad Social, aplique la normativa para la liquidación de haberes y los tributos relacionados, y resuelva situaciones cotidianas de las relaciones de trabajo en las organizaciones.',
    temario: [
      'Derecho individual del trabajo: el contrato de trabajo',
      'Jornada de trabajo y descansos',
      'Remuneraciones, aguinaldo, feriados y horas extras',
      'Licencias y salario vacacional',
      'Despido e indemnizaciones',
      'Tributación a la seguridad social y materia gravada',
      'Sistema Nacional Integrado de Salud (FONASA)',
      'IRPF de dependientes (Categoría II)',
      'Prestaciones: seguros de accidentes, enfermedad y paro',
    ],
    evaluacion:
      '2 revisiones presenciales (40 y 60 puntos). Exonera con 50 puntos en total, con mínimos por revisión.',
  },
  {
    slug: 'administracion-relaciones-del-trabajo',
    nombre: 'Administración de las Relaciones del Trabajo',
    codigo: 'S60',
    semestre: 'Sexto semestre',
    creditos: 10,
    area: 'Relaciones Laborales',
    previa: '15 créditos del área jurídica',
    resumen:
      'La gestión de las relaciones laborales: derecho individual y colectivo, negociación y seguridad social, aplicado a la administración.',
    objetivo:
      'Brindar un conocimiento teórico y práctico de la gestión de las relaciones de trabajo en el marco del Derecho del Trabajo uruguayo, para comprender las situaciones de la vida laboral y dar las respuestas adecuadas a cada una.',
    temario: [
      'El Derecho del Trabajo: surgimiento, fuentes y principios',
      'Derecho individual: contratación laboral y condiciones de trabajo',
      'Remuneraciones y tiempo de trabajo',
      'Extinción de la relación laboral',
      'Introducción a la Seguridad Social y su financiación',
      'Prestaciones de actividad y Sistema Nacional Integrado de Salud',
      'Derecho colectivo: sindicatos, conflicto y negociación colectiva',
    ],
    evaluacion:
      '2 parciales escritos presenciales. Exonera con 50 puntos en total (mínimo 40% en cada uno).',
  },
  {
    slug: 'calculo-1a',
    nombre: 'Cálculo 1A',
    codigo: '114A',
    semestre: 'Ambos semestres',
    creditos: 5,
    area: 'Métodos Cuantitativos',
    previa: 'No requiere previas',
    resumen:
      'La primera parte de Cálculo (5 créditos): funciones, límites, continuidad y derivadas, con aplicaciones a la economía.',
    objetivo:
      'Introducir al estudiante en el estudio de funciones de variable real: límites, continuidad y derivabilidad, con aplicaciones a las ciencias económicas y de la administración.',
    temario: [
      'Funciones: concepto, operaciones, composición e inversa',
      'Funciones lineales, cuadráticas, exponenciales y logarítmicas',
      'Aplicaciones económicas: ingreso, costo, utilidad, oferta y demanda',
      'Límites de funciones y técnicas de cálculo',
      'Continuidad: teoremas de Bolzano, Weierstrass y Darboux',
      'Derivabilidad y cálculo de derivadas',
      'Optimización, funciones marginales y elasticidad de la demanda',
    ],
    evaluacion:
      '2 revisiones presenciales (40 y 60 puntos). Exonera con 50 puntos en total.',
  },
  {
    slug: 'calculo-1b',
    nombre: 'Cálculo 1B',
    codigo: '128A',
    semestre: 'Ambos semestres',
    creditos: 5,
    area: 'Métodos Cuantitativos',
    previa: 'Cálculo 1A',
    resumen:
      'La segunda parte de Cálculo (5 créditos, con previa 1A): integrales, polinomio de Taylor y series.',
    objetivo:
      'Introducir al estudiante en el cálculo numérico: aplicaciones de la función inversa, aproximación de funciones por polinomios (Taylor), integración de funciones y series.',
    temario: [
      'Funciones invertibles y derivada de la inversa',
      'Aproximación de funciones por polinomios: teorema de Taylor',
      'Integración: primitivas y teorema fundamental del cálculo',
      'Métodos de integración: partes, sustitución y fracciones simples',
      'Aplicaciones de la integral y cálculo de áreas',
      'Integrales impropias',
      'Series geométricas',
    ],
    evaluacion:
      '2 parciales presenciales (40 y 60 puntos). Exonera con 50 puntos en total.',
  },
  {
    slug: 'calculo-1',
    nombre: 'Cálculo 1',
    codigo: 'MC10',
    semestre: 'Ambos semestres',
    creditos: 10,
    area: 'Métodos Cuantitativos',
    previa: 'No requiere previas',
    resumen:
      'El curso completo de Cálculo en un semestre (10 créditos): derivadas, integrales, Taylor y series, orientado a ciencias económicas.',
    objetivo:
      'Introducir al estudiante en el cálculo numérico: aplicaciones de la derivada y la función inversa, aproximación de funciones por polinomios, integración y nociones de sucesiones y series.',
    temario: [
      'Aplicaciones de la derivada: regla de la cadena y teorema del valor medio',
      'Problemas de extremos, funciones marginales y elasticidad',
      'Función inversa y funciones trigonométricas',
      'Aproximación por polinomios: teorema de Taylor',
      'Series geométricas',
      'Integración: teorema fundamental, regla de Barrow y métodos',
      'Cálculo de áreas e integrales impropias',
    ],
    evaluacion:
      '2 parciales presenciales (40 y 60 puntos). Exonera con 50 puntos en total.',
  },
];

export function getMateria(slug) {
  return materias.find((m) => m.slug === slug);
}
