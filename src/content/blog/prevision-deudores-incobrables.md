---
title: "Previsión o provisión para deudores incobrables: cómo se registra"
description: "Qué es la previsión (o provisión) para deudores incobrables, por qué se reconoce antes de saber quién no paga y cómo se registra su constitución, uso y ajuste."
date: 2026-09-27
author: "Germán Rivero"
tag: "Contabilidad"
---

Una empresa vende a crédito durante todo el año y, al cierre, tiene $ 200.000 a cobrar a sus clientes. Por experiencia sabe que no todo eso va a entrar: algún cliente va a cerrar, otro va a dejar de responder. Lo que no sabe es **cuál**. La **provisión para deudores incobrables** (también llamada *previsión*) resuelve ese problema, y en Contabilidad General 1 es uno de los temas donde mejor se ve cómo razona la contabilidad.

## Por qué se reconoce antes de saber quién no paga

Parece raro registrar una pérdida por un cliente que todavía no identificaste. Hay dos razones de fondo.

La primera es el **[criterio de lo devengado](/blog/que-es-el-criterio-de-lo-devengado)**. Las ventas a crédito se reconocieron como ingreso en el ejercicio en que se hicieron. Si una parte no se va a cobrar, la pérdida que genera pertenece **al mismo ejercicio** que el ingreso, no al año en que el cliente finalmente deja de pagar. Si esperás a ese momento, un ejercicio queda con el resultado inflado y el siguiente carga con algo que no le corresponde.

La segunda es la **prudencia**: un activo no debería mostrarse por más de lo que razonablemente se espera recuperar. Presentar $ 200.000 de créditos sabiendo que una parte no se va a cobrar sería sobrevaluarlos.

Como no se sabe qué cliente va a fallar, se hace una **estimación global** sobre el conjunto de los créditos: por ejemplo, un porcentaje sobre el saldo de deudores al cierre, o porcentajes distintos según la situación de cada grupo de créditos (cuanto más vencido, mayor porcentaje). En el ejemplo usamos la primera.

## Una cuenta regularizadora de activo

La estimación no se resta directamente de Deudores por Ventas, porque esa cuenta refleja lo que cada cliente debe, y ningún cliente concreto dejó de deber todavía. Se usa una cuenta aparte, **Provisión para Deudores Incobrables**, que es **regularizadora de activo**: vive en el activo, tiene **saldo acreedor** y resta. Es la misma lógica que [la depreciación acumulada](/blog/que-es-la-depreciacion-explicada-simple) de los bienes de uso.

Del otro lado del asiento va una **pérdida**, que según el texto se llama Deudores Incobrables o Pérdida por Deudores Incobrables.

Un apunte de vocabulario: en Contabilidad General 1 la cuenta se llama **Provisión para deudores incobrables**; en otros textos, *previsión*. Es la misma cuenta. En la **NIIF para PYMES** esto se trata como **deterioro del valor** de las cuentas por cobrar (Sección 11). Y no la confundas con las provisiones que son pasivos, como las que se reconocen por juicios: esta no es una deuda, sino una corrección del valor de los créditos.

## Ejemplo completo

Supongamos que la empresa estima incobrable el **3 %** del saldo de deudores al cierre. Es un porcentaje ilustrativo: en la práctica surge de la experiencia de la empresa, y en un ejercicio te lo da la letra.

### 1. Constitución (cierre del ejercicio 1)

Deudores por Ventas: $ 200.000. Provisión necesaria: $ 200.000 × 3 % = $ 6.000.

| Cuenta | Debe | Haber |
|---|---|---|
| Deudores Incobrables (pérdida) | $ 6.000 | |
| Provisión para Deudores Incobrables (regularizadora de activo) | | $ 6.000 |

En el Estado de Situación Financiera, los créditos quedan así: Deudores por Ventas $ 200.000 menos Provisión $ 6.000 = **$ 194.000**, que es lo que se espera cobrar.

### 2. Uso: un crédito se vuelve incobrable (ejercicio 2)

En marzo se confirma que el Cliente A, que debía $ 4.000 desde el ejercicio anterior, no va a pagar: cerró y no tiene bienes. Ahora sí sabemos quién es, así que su crédito se da de baja **contra la provisión**:

| Cuenta | Debe | Haber |
|---|---|---|
| Provisión para Deudores Incobrables | $ 4.000 | |
| Deudores por Ventas | | $ 4.000 |

Fijate lo importante: **este asiento no toca resultados**. La pérdida ya se reconoció, por estimación, en el ejercicio 1; registrar otra ahora sería contarla dos veces. El valor neto de los créditos tampoco cambia: bajan $ 4.000 los deudores y $ 4.000 la provisión.

Si el crédito que se da de baja supera el saldo que le queda a la provisión, el excedente sí se debita a la cuenta de pérdida, porque esa parte no estaba prevista.

### 3. Recupero de un crédito dado de baja

En agosto, contra lo esperado, el Cliente A paga $ 1.000 de aquella deuda. Primero se revierte la baja por el importe recuperado y después se registra el cobro:

| Cuenta | Debe | Haber |
|---|---|---|
| Deudores por Ventas | $ 1.000 | |
| Provisión para Deudores Incobrables | | $ 1.000 |

| Cuenta | Debe | Haber |
|---|---|---|
| Caja | $ 1.000 | |
| Deudores por Ventas | | $ 1.000 |

Así la cuenta del cliente muestra que pagó. Algunos textos usan otro criterio: debitar Caja y acreditar directamente una ganancia (Recupero de Deudores Incobrables). Seguí el que use tu curso, pero no los mezcles: el recupero va a la provisión o a la ganancia, nunca a las dos.

### 4. Ajuste al cierre del ejercicio 2

Saldo de la provisión antes del ajuste: $ 6.000 − $ 4.000 + $ 1.000 = $ 3.000.

Saldo de Deudores por Ventas al cierre: $ 250.000. Provisión necesaria: $ 250.000 × 3 % = $ 7.500.

No se registran $ 7.500: se registra **solo la diferencia** que lleva el saldo al importe necesario, $ 7.500 − $ 3.000 = $ 4.500.

| Cuenta | Debe | Haber |
|---|---|---|
| Deudores Incobrables (pérdida) | $ 4.500 | |
| Provisión para Deudores Incobrables | | $ 4.500 |

El recupero de $ 1.000 hizo que este ajuste fuera $ 1.000 menor: ahí está su efecto en el resultado. Con el otro criterio, la provisión llega al cierre con $ 2.000, el ajuste es de $ 5.500 y, restando la ganancia de $ 1.000, el efecto neto también es $ 4.500.

Si el saldo existente hubiera sido mayor que el necesario, se hace lo inverso: se debita la provisión por el exceso y se acredita una ganancia (Desafectación de Provisión, por ejemplo).

## Errores frecuentes

- ✗ Registrar una pérdida al dar de baja un crédito ya cubierto por la provisión. ✓ Se debita la provisión.
- ✗ Presentar la provisión en el pasivo. ✓ Es regularizadora de activo y resta a los créditos.
- ✗ Registrar al cierre el total calculado sin mirar el saldo de la provisión. ✓ Con estimación sobre el saldo de deudores, se registra solo la diferencia.
- ✗ Acreditar Deudores por Ventas al constituir la provisión. ✓ Todavía no hay un cliente identificado: va a la regularizadora.

Este tema se apoya en el devengado y en las cuentas regularizadoras: si alguno todavía te hace ruido, afirmalo antes de avanzar, porque en [Contabilidad General 1](/materias/contabilidad-general-i) cada tema se construye sobre el anterior.

---

*¿Se te complica la provisión para deudores incobrables? En Delta Academia la practicamos con ejercicios tipo parcial, asiento por asiento. [Escribinos](/contacto).*
