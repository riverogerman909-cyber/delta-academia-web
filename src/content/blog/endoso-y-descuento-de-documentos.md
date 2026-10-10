---
title: "Endoso y descuento de documentos a cobrar: cómo se registran"
description: "Endoso y descuento de documentos a cobrar, con y sin recurso: cómo se registran al operar y al vencimiento, pague o no el firmante. Con ejemplos resueltos."
date: 2026-10-09
author: "Germán Rivero"
tag: "Contabilidad"
---

Un cliente te paga con un cheque diferido a 30 días, pero necesitás la plata hoy, o tenés que pagarle a un proveedor esta semana. Para eso existen el **endoso y el descuento de documentos**: dos formas de usar un documento a cobrar antes de su vencimiento. La idea se entiende rápido; lo que cuesta es el asiento, porque va contra la intuición: muchas veces el documento ya no está en manos de la empresa y, aun así, **sigue en su activo**.

## Qué es un documento a cobrar y por qué se recibe

Un documento a cobrar es un **título de crédito**: un documento firmado por un tercero que da derecho a cobrar un importe en una fecha futura. Los más habituales son el **cheque de pago diferido**, que según la ley de cheques (Decreto-Ley 14.412) lleva estipulada en el propio documento su fecha de presentación al cobro, y el **conforme**.

Lo típico es que un cliente que debe en cuenta abierta documente esa deuda. El asiento es permutativo:

| Cuenta | Debe | Haber |
|---|---|---|
| Conformes a Cobrar | $ 30.000 | |
| Deudores por Ventas | | $ 30.000 |

No se acredita Ventas: la venta ya se reconoció cuando se hizo, por el [criterio de lo devengado](/blog/que-es-el-criterio-de-lo-devengado). Lo que cambia es la **forma del derecho**: ahora está respaldado por un título valor, más firme para reclamar y que, antes de vencer, se puede endosar o descontar.

En el curso se usan cuentas separadas, **Cheques Diferidos a Cobrar** y **Conformes a Cobrar**: así la contabilidad informa qué tipo de documento tiene la empresa y, además, al vencer se comportan distinto. El cheque diferido se transforma ese día en cheque común y pasa a Caja; el conforme sigue en su cuenta hasta que se cobra o se reclasifica.

## Qué es el endoso de documentos

**Endosar** es ceder un documento a otra persona firmándolo al dorso. Quien lo cede es el **endosante** y quien lo recibe, el **endosatario**. El uso clásico: en lugar de esperar a cobrar el cheque diferido de un cliente, se lo entregás a un proveedor para cancelar una deuda.

Esa firma cumple dos funciones: **transmite la propiedad** del documento y **obliga al endosante a pagar** si al vencimiento el firmante original no paga. El derecho a cobrar pasó al proveedor; la responsabilidad sigue siendo de la empresa.

## Qué es el descuento de documentos: con y sin recurso

**Descontar** un documento (descontar cheques o conformes, como se dice en la práctica) es entregárselo a un banco antes del vencimiento para cobrarlo por adelantado. El banco lo cobra cuando vence y hoy acredita en la cuenta corriente el nominal **menos el descuento**: el precio del dinero por el plazo que falta.

Hay dos modalidades, según quién asuma el riesgo de que el firmante no pague:

- **Sin recurso**: se transfieren al banco todos los riesgos y las ventajas del documento. Se parece a vender un activo financiero: si el firmante no paga, es problema del banco. Por eso suele ser más caro.
- **Con recurso**: el banco se queda con las ventajas, pero el riesgo crediticio sigue siendo de la empresa. Funciona como un préstamo: si el firmante no paga, el banco le reclama a la empresa el valor nominal.

## La regla que ordena todos los asientos

El tratamiento contable sale de una pregunta: **¿quién se queda con el riesgo?** Es el enfoque de la NIIF para PYMES (Sección 11), el marco del curso. Si se transfieren todos los riesgos y ventajas, el documento **se da de baja**. Si la empresa conserva el riesgo, el documento **se mantiene en el activo** y además se reconoce un **pasivo**, sin compensar uno con otro. En el curso, ese pasivo se registra por el **valor nominal** del documento.

| Operación | ¿El documento sale del activo? | ¿Nace un pasivo? | Costo de la operación |
|---|---|---|---|
| Endoso | No | Sí: Acreedores por Documentos Endosados | No hay |
| Descuento con recurso | No | Sí: Acreedores por Documentos Descontados | Intereses Perdidos |
| Descuento sin recurso | Sí | No | Gastos Bancarios |

## Cómo se registra el endoso: asientos con ejemplo

La empresa tiene dos cheques diferidos de clientes: uno por $ 40.000 (vence el 20/10) y otro por $ 25.000 (vence el 28/10). El 3/10 los endosa a un proveedor para cancelar una deuda de $ 65.000.

**3/10 — Endoso.** Se cancela la deuda con el proveedor y nace la responsabilidad. Cheques Diferidos a Cobrar **no se toca**.

| Cuenta | Debe | Haber |
|---|---|---|
| Acreedores por Compras | $ 65.000 | |
| Acreedores por Documentos Endosados | | $ 65.000 |

**21/10 — El proveedor avisa que cobró el cheque de $ 40.000.** Se extinguen a la vez el derecho y la responsabilidad:

| Cuenta | Debe | Haber |
|---|---|---|
| Acreedores por Documentos Endosados | $ 40.000 | |
| Cheques Diferidos a Cobrar | | $ 40.000 |

**29/10 — El cheque de $ 25.000 no fue pagado.** El proveedor lo devuelve y la empresa le paga con un cheque propio. Son dos asientos: el pago y la reclasificación del documento impago.

| Cuenta | Debe | Haber |
|---|---|---|
| Acreedores por Documentos Endosados | $ 25.000 | |
| Banco c/c | | $ 25.000 |

| Cuenta | Debe | Haber |
|---|---|---|
| Documentos a Cobrar Vencidos | $ 25.000 | |
| Cheques Diferidos a Cobrar | | $ 25.000 |

Al final, Acreedores por Documentos Endosados queda en cero (65.000 − 40.000 − 25.000) y queda un crédito de $ 25.000 contra el firmante. Fijate que **no se registró ninguna pérdida**: el documento vencido sigue siendo un derecho. En algunas soluciones del libro del curso la cuenta aparece abreviada como Documentos Vencidos.

## Descuento de documentos con recurso: ejemplo resuelto

La empresa tiene dos conformes: $ 50.000 (vence el 25/11) y $ 30.000 (vence el 30/11). El 5/11 los descuenta **con recurso**. El banco cobra $ 2.400 de intereses y acredita el líquido en la cuenta corriente: 80.000 − 2.400 = $ 77.600.

**5/11 — Descuento.**

| Cuenta | Debe | Haber |
|---|---|---|
| Banco c/c | $ 77.600 | |
| Intereses Perdidos | $ 2.400 | |
| Acreedores por Documentos Descontados | | $ 80.000 |

En el curso, el pasivo va por el **nominal**, que es lo que la empresa tendría que cubrir si los firmantes no pagan, no por lo que entró a la cuenta. Conformes a Cobrar sigue en $ 80.000. Si entre el descuento y el vencimiento hubiera un cierre de ejercicio, la parte de los intereses que corresponde al ejercicio siguiente no es pérdida del actual: el libro del curso la registra en **Intereses Perdidos a Vencer**.

**26/11 — El banco avisa que el conforme de $ 50.000 fue pagado.**

| Cuenta | Debe | Haber |
|---|---|---|
| Acreedores por Documentos Descontados | $ 50.000 | |
| Conformes a Cobrar | | $ 50.000 |

**1/12 — El conforme de $ 30.000 no fue pagado.** El banco debita $ 30.000 de la cuenta corriente y devuelve el documento:

| Cuenta | Debe | Haber |
|---|---|---|
| Acreedores por Documentos Descontados | $ 30.000 | |
| Banco c/c | | $ 30.000 |

| Cuenta | Debe | Haber |
|---|---|---|
| Documentos a Cobrar Vencidos | $ 30.000 | |
| Conformes a Cobrar | | $ 30.000 |

### Cómo se presentan los documentos descontados en el balance

En un Estado de Situación Financiera al 27/11, con el conforme de $ 30.000 sin vencer, aparecen Conformes a Cobrar $ 30.000 en el activo (créditos por ventas) y Acreedores por Documentos Descontados $ 30.000 en el pasivo (pasivo financiero): cada uno en su lugar, **sin restar uno del otro**.

### ¿Y si el descuento hubiera sido sin recurso?

Con los mismos importes, para comparar (en la práctica suele costar más), el documento se da de baja y el costo va a Gastos Bancarios:

| Cuenta | Debe | Haber |
|---|---|---|
| Banco c/c | $ 77.600 | |
| Gastos Bancarios | $ 2.400 | |
| Conformes a Cobrar | | $ 80.000 |

Al vencimiento no hay nada más que registrar: el riesgo ya es del banco.

## Cuándo se cancela el pasivo: fijate qué dice la letra

En los ejemplos cancelamos el pasivo cuando hay **certeza** de lo que pasó (el aviso del banco o del acreedor), como suponen los ejercicios del libro del curso. La otra opción, que según el libro del curso es la habitual en la práctica, es cancelarlo **automáticamente al vencimiento** contra el documento; si después no se pagó, al cubrirlo se debita Documentos a Cobrar Vencidos y se acredita Caja o Banco c/c. Los saldos finales coinciden, pero los asientos no.

## Dónde vuelve a aparecer: arqueo y conciliación

En el **arqueo**, un documento endosado o descontado con recurso sigue en el saldo contable pero ya no está en la empresa, así que en el acta se **resta** de los fondos sujetos a arqueo antes de comparar con lo que se cuenta (la lógica general del arqueo está en [arqueo de valores paso a paso](/blog/arqueo-de-valores-paso-a-paso)). En la **conciliación bancaria**, el líquido del descuento y el débito por el documento impago son notas del banco que, si la empresa no las registró, **sí generan asiento** (ver [conciliación bancaria paso a paso](/blog/conciliacion-bancaria-paso-a-paso)).

El documento impago también reaparece en otro tema: que reclasificarlo a Documentos a Cobrar Vencidos no registre una pérdida no significa que el cobro esté asegurado. Si el recupero se ve difícil, entra en juego [la provisión para deudores incobrables](/blog/prevision-deudores-incobrables).

## Errores frecuentes

- ✗ Acreditar Conformes a Cobrar o Cheques Diferidos a Cobrar al endosar o descontar con recurso. ✓ El documento queda en el activo; lo que se acredita es el pasivo.
- ✗ Registrar Acreedores por Documentos Descontados por el líquido ($ 77.600). ✓ En el curso va por el nominal ($ 80.000) y la diferencia son intereses: Intereses Perdidos o, si antes del vencimiento hay un cierre de ejercicio, Intereses Perdidos a Vencer por la parte que corresponde al ejercicio siguiente.
- ✗ Tratar Acreedores por Documentos Descontados como regularizadora y mostrar el neto. ✓ Es una cuenta de pasivo, y activo y pasivo no se compensan.
- ✗ Imputar el costo del descuento sin recurso a Intereses Perdidos, o los intereses del descuento con recurso a Gastos Bancarios. ✓ Con recurso es un préstamo: intereses. Sin recurso se parece a una venta: gastos bancarios.
- ✗ Registrar una pérdida cuando un documento endosado o descontado vuelve impago, o dejarlo en Cheques Diferidos a Cobrar o Conformes a Cobrar. ✓ Se reclasifica a Documentos a Cobrar Vencidos.

## Para cerrar

Endoso y descuento son una sola regla aplicada tres veces: si la empresa conserva el riesgo, el documento se queda en el activo y nace un pasivo; si no, se da de baja. En [Contabilidad General 1](/materias/contabilidad-general-i) este tema forma parte de la unidad de efectivo y créditos por ventas y se apoya en lo anterior: si la diferencia entre Deudores por Ventas y Conformes a Cobrar todavía te hace ruido, afirmala antes de avanzar. Para practicar, el [simulacro gratuito de los temas 1, 2A y 2B de Contabilidad General 1](/recursos/simulacro-contabilidad-general-1-t1-2b/) tiene preguntas de endoso y descuento, cada una con su explicación.

---

*¿Se te complican el endoso y el descuento de documentos? En Delta Academia los practicamos con ejercicios tipo parcial, asiento por asiento. [Escribinos](/contacto).*
