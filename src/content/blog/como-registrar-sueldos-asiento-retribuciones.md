---
title: "Asiento de sueldos: cómo registrar las retribuciones paso a paso"
description: "Cómo registrar sueldos: sueldo nominal, aportes personales y patronales, líquido a pagar y el asiento de sueldos paso a paso, con un ejemplo resuelto."
date: 2026-09-27
author: "Germán Rivero"
tag: "Conceptos Contables"
---

Todos los meses, cualquier empresa con empleados tiene que registrar sus sueldos. Parece un asiento simple — la empresa paga y sale plata —, pero tiene más piezas de las que aparenta: lo que cobra el trabajador no coincide con lo que gasta la empresa, y en el medio aparece la seguridad social. En Conceptos Contables las retribuciones al personal se trabajan junto con el IVA, y no es casualidad: comparten una idea que ordena todo el **asiento de sueldos**.

**Una aclaración antes de arrancar.** Vamos a suponer **aportes personales del 20 %** y **aportes patronales del 10 %**, calculados sobre el sueldo nominal. Son tasas **ilustrativas**, redondas para seguir las cuentas fácil: **no son las tasas vigentes**, que tienen varios componentes y cambian con la normativa. En los ejercicios, las tasas te las da la letra.

## Las cuatro piezas de un sueldo

1. **Sueldo nominal.** El sueldo "de contrato": lo que la empresa le reconoce al trabajador por el mes trabajado, antes de cualquier descuento. Es una **pérdida** para la empresa y va a **Sueldos y Jornales**.
2. **Aportes personales.** La parte del nominal que va a la seguridad social por cuenta del trabajador. La empresa no se la entrega a él: **se la retiene** y la paga ella misma al organismo — en Uruguay, el **BPS** —. Mientras no la paga, es un **pasivo** con el BPS.
3. **Líquido.** Lo que efectivamente cobra el trabajador: el nominal menos las retenciones (acá, solo los aportes personales; si la letra agrega otras, cada una es otro pasivo). Hasta que se le paga, es un **pasivo** con él: **Sueldos a Pagar**.
4. **Aportes patronales.** Aportes a cargo de la empresa, calculados sobre el nominal. Estos sí son un **costo adicional**: van como pérdida a **Leyes Sociales** y como pasivo con el BPS.

Los nombres de las cuentas pueden variar según el plan de cuentas (en muchos ejercicios el pasivo aparece simplemente como "BPS"); lo que no varía es su **naturaleza**.

## La idea clave: los aportes personales no son pérdida de la empresa

Acá es donde más se traba la gente. Supongamos un sueldo nominal de $ 50.000. Por el sueldo en sí, la empresa pierde **$ 50.000**: $ 40.000 van al trabajador y $ 10.000 al BPS, pero el total sigue siendo $ 50.000. Los aportes personales **no agregan** gasto: son parte del sueldo del trabajador que la empresa, en lugar de dárselo a él, le entrega al BPS en su nombre.

La lógica se parece a la de [el IVA](/blog/iva-como-funciona-y-como-se-registra): plata que pasa por la empresa pero que es de otro. Con los aportes personales, la empresa actúa como **agente de retención**, y por eso lo retenido es un pasivo, nunca una pérdida.

Los aportes patronales son otra historia: no salen del sueldo del trabajador, los pone la empresa por encima del nominal. Ahí sí hay una **pérdida adicional**.

## El ejemplo con números

| Concepto | Cálculo | Importe |
|---|---|---|
| Sueldo nominal | — | $ 50.000 |
| Aportes personales | 20 % × $ 50.000 | $ 10.000 |
| Líquido a pagar | $ 50.000 − $ 10.000 | $ 40.000 |
| Aportes patronales | 10 % × $ 50.000 | $ 5.000 |
| Total a pagar al BPS | $ 10.000 + $ 5.000 | $ 15.000 |
| **Costo total para la empresa** | $ 50.000 + $ 5.000 | **$ 55.000** |

Supongamos que el sueldo es de setiembre, que la empresa liquida el 30/09, paga el líquido el 3/10 y paga los aportes al BPS el 16/10.

## Los asientos, paso a paso

### 1. Devengamiento del sueldo (30/09)

El trabajo se prestó en setiembre, así que la pérdida es de setiembre, aunque la plata salga en octubre: es el [criterio de lo devengado](/blog/que-es-el-criterio-de-lo-devengado) en estado puro. Se registra en dos partes.

**a) El sueldo y la retención:**

| Cuenta | Debe | Haber |
|---|---|---|
| Sueldos y Jornales (pérdida) | $ 50.000 | |
| Sueldos a Pagar (pasivo) | | $ 40.000 |
| BPS a Pagar (pasivo) | | $ 10.000 |

**b) Los aportes patronales:**

| Cuenta | Debe | Haber |
|---|---|---|
| Leyes Sociales (pérdida) | $ 5.000 | |
| BPS a Pagar (pasivo) | | $ 5.000 |

Los dos balancean: $ 50.000 = $ 40.000 + $ 10.000, y $ 5.000 = $ 5.000. También podés juntarlos en un único asiento compuesto de $ 55.000 por lado. Al 30/09, la empresa ya reconoció $ 55.000 de pérdida y tiene dos deudas: $ 40.000 con el trabajador y $ 15.000 con el BPS.

### 2. Pago del líquido (3/10)

| Cuenta | Debe | Haber |
|---|---|---|
| Sueldos a Pagar (pasivo) | $ 40.000 | |
| Banco (activo) | | $ 40.000 |

Se cancela la deuda con el trabajador. Fijate que **en este asiento no hay ninguna pérdida**: ya se registró en setiembre. Pagar no es perder.

### 3. Pago de los aportes al BPS (16/10)

| Cuenta | Debe | Haber |
|---|---|---|
| BPS a Pagar (pasivo) | $ 15.000 | |
| Banco (activo) | | $ 15.000 |

Con esto, Sueldos a Pagar y BPS a Pagar quedan en cero. En total salieron del banco $ 55.000, exactamente la pérdida reconocida en setiembre: la pérdida se registró una sola vez, al devengarse, y los pagos solo cancelaron deudas. Y en cada asiento [el Debe iguala al Haber](/blog/debe-y-haber-sin-confusiones).

## ¿Y si hubo un adelanto?

Supongamos que el 20/09 la empresa le adelantó $ 10.000 al trabajador. Ese día **no se registra pérdida**: el sueldo se reconoce entero al liquidarlo, y lo entregado es un anticipo que después se descuenta. Es un derecho de la empresa, es decir, un **activo**. Se debita Adelantos al Personal y se acredita Banco por $ 10.000. Al liquidar, el adelanto se descuenta del líquido:

| Cuenta | Debe | Haber |
|---|---|---|
| Sueldos y Jornales (pérdida) | $ 50.000 | |
| BPS a Pagar (pasivo) | | $ 10.000 |
| Adelantos al Personal (activo) | | $ 10.000 |
| Sueldos a Pagar (pasivo) | | $ 30.000 |

La pérdida y los aportes no cambian, porque se calculan sobre el nominal; el asiento de aportes patronales queda igual. Solo cambia cuánto le queda por cobrar al trabajador: el 3/10 se le pagan $ 30.000 en lugar de $ 40.000.

## Errores frecuentes

- ✗ Debitar Sueldos y Jornales por el líquido ($ 40.000). ✓ La pérdida es el **nominal** ($ 50.000).
- ✗ Registrar los aportes personales como pérdida de la empresa (en Leyes Sociales). ✓ Se le retienen al trabajador: son **pasivo**.
- ✗ Descontarle al trabajador los aportes patronales. ✓ Los patronales **no tocan el líquido**: los paga la empresa.
- ✗ Registrar el sueldo recién cuando se paga. ✓ Se registra en el mes **en que se trabajó**.

## En resumen

1. La pérdida por el sueldo es el **nominal**, no el líquido.
2. Los aportes personales se **retienen**: son un pasivo con el BPS, no un gasto extra.
3. Los aportes patronales sí son una **pérdida adicional**, y a la vez un pasivo con el BPS.
4. El sueldo se registra cuando se **devenga**; los pagos posteriores solo cancelan pasivos.

Si en algún paso te costó distinguir activo, pasivo y pérdida, conviene afianzar [la ecuación contable](/blog/ecuacion-contable-fundamental) antes de seguir: el asiento de sueldos usa las tres cosas a la vez.

---

*¿Se te complican los asientos de sueldos? En Delta Academia los practicamos con ejercicios tipo parcial, paso a paso. [Escribinos](/contacto).*
