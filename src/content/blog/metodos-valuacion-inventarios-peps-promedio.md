---
title: "PEPS y promedio ponderado: métodos de valuación de inventarios con ejemplo"
description: "Métodos de valuación de inventarios: PEPS y promedio ponderado con una ficha de stock resuelta, costo de ventas, inventario final y efecto en el resultado."
date: 2026-09-27
author: "Germán Rivero"
tag: "Contabilidad"
---

Una empresa compra la misma mercadería varias veces en el mes, y cada vez a un costo distinto. Cuando vende, aparece la pregunta: ¿qué costo le asigno a lo que salió? Para eso existen los **métodos de valuación de inventarios**. En este artículo vemos las dos fórmulas que la NIIF para PYMES admite para mercadería intercambiable, **PEPS y promedio ponderado**, con una ficha de stock resuelta.

## El problema: unidades iguales, costos distintos

Si cada unidad fuera única (un auto usado, una obra de arte), sabríamos cuánto costó la que se vendió: eso es la **identificación específica**. Pero con mercadería intercambiable, como cajas de un mismo producto compradas en distintas fechas, no hay forma práctica de saber de qué compra salió cada unidad. Hace falta una **fórmula de costo** que reparta el costo total entre dos destinos:

- **Costo de ventas**: la parte que salió y se reconoce como pérdida.
- **Inventario final** (o existencia final): la parte que queda en el activo, en la cuenta Mercaderías.

En [Contabilidad General 1](/materias/contabilidad-general-i), dentro de la unidad de inventarios, ese reparto se hace en la **ficha de stock**: un registro auxiliar, uno por artículo, donde se anotan entradas, salidas y saldo, en unidades, costo unitario y costo total. Es la herramienta del sistema de **permanencia de inventario**, en el que el costo de ventas se contabiliza cada vez que se vende.

## Qué admite la NIIF para PYMES

La **Sección 13 de la NIIF para PYMES** establece que, para inventarios intercambiables, el costo se mide con **PEPS (FIFO)** o con **costo promedio ponderado (CPP)**. El **UEPS (LIFO) no está permitido**: aparece en la bibliografía para comparar resultados, pero no sirve para preparar estados financieros bajo esta norma. También se aceptan técnicas de medición como el método de los minoristas o el precio de compra más reciente, si el resultado se aproxima al costo; acá nos concentramos en las dos fórmulas.

Además, la entidad tiene que usar la **misma fórmula para todos los inventarios de naturaleza y uso similares** y mantenerla de un período a otro: no se cambia de método según lo que convenga.

## El ejemplo: la ficha de stock

Un comercio vende un solo artículo. En marzo tiene estos movimientos (importes sin IVA):

| Fecha | Movimiento | Unidades | Costo unitario | Costo total |
|---|---|---|---|---|
| 1/3 | Inventario inicial | 100 | $ 200 | $ 20.000 |
| 10/3 | Compra | 200 | $ 240 | $ 48.000 |
| 20/3 | Compra | 100 | $ 260 | $ 26.000 |
| | **Disponible para la venta** | **400** | | **$ 94.000** |
| 25/3 | Venta | 300 | ¿? | ¿? |

Fijate que cada compra es más cara que la anterior: es un escenario de **precios en suba**.

Ese disponible es el punto de partida: **inventario inicial + compras = $ 20.000 + $ 74.000 = $ 94.000**. Cualquier método reparte exactamente esos $ 94.000 entre costo de ventas e inventario final.

## Método PEPS: primeras entradas, primeras salidas

PEPS supone que **lo primero que entró es lo primero que sale**. Es un supuesto sobre los costos, no sobre el movimiento físico. Las 300 unidades vendidas se toman de las capas más viejas: primero las 100 del inventario inicial y después 200 de la compra del 10/3. En existencia quedan las unidades más recientes.

| Capa | Salen | Costo de ventas | Quedan | Inventario final |
|---|---|---|---|---|
| Inventario inicial ($ 200) | 100 | $ 20.000 | 0 | $ 0 |
| Compra 10/3 ($ 240) | 200 | $ 48.000 | 0 | $ 0 |
| Compra 20/3 ($ 260) | 0 | $ 0 | 100 | $ 26.000 |
| **Total** | **300** | **$ 68.000** | **100** | **$ 26.000** |

Verificación: $ 68.000 + $ 26.000 = **$ 94.000** ✓

## Método de costo promedio ponderado

Acá no importa de qué capa sale cada unidad: todas pasan a valer lo mismo, el **promedio ponderado por cantidades**.

> **Costo promedio = Costo total disponible ÷ Unidades disponibles = $ 94.000 ÷ 400 = $ 235**

| Concepto | Unidades | Costo unitario | Costo total |
|---|---|---|---|
| Disponible para la venta | 400 | $ 235 | $ 94.000 |
| Costo de ventas | 300 | $ 235 | $ 70.500 |
| Inventario final | 100 | $ 235 | $ 23.500 |

Verificación: $ 70.500 + $ 23.500 = **$ 94.000** ✓

En la ficha de stock, el promedio se **recalcula después de cada entrada**, y si hubiera ventas intercaladas entre las compras, cada una saldría al promedio vigente en ese momento. Acá hay una sola venta, posterior a todas las compras, así que alcanza con un cálculo.

## Cómo se registra

Con permanencia de inventario, cada venta lleva dos asientos. Supongamos que la venta fue a crédito, a $ 400 por unidad más IVA al 22 % (la tasa básica; en los ejercicios, usá la que te indique la letra), y que la empresa valúa por PEPS:

| Cuenta | Debe | Haber |
|---|---|---|
| Deudores por ventas (activo) | $ 146.400 | |
| Ventas (ganancia) | | $ 120.000 |
| IVA Ventas (pasivo) | | $ 26.400 |

| Cuenta | Debe | Haber |
|---|---|---|
| Costo de ventas (pérdida) | $ 68.000 | |
| Mercaderías (activo) | | $ 68.000 |

El primer asiento reconoce la venta con el impuesto separado, como vimos en [cómo funciona el IVA](/blog/iva-como-funciona-y-como-se-registra). El segundo da de baja la mercadería y reconoce su costo como pérdida en el mismo momento que el ingreso, en línea con el [criterio de lo devengado](/blog/que-es-el-criterio-de-lo-devengado). Con promedio ponderado, el segundo asiento sería por $ 70.500.

## Qué pasa con el resultado cuando los precios suben

| | PEPS | Promedio ponderado |
|---|---|---|
| Ventas | $ 120.000 | $ 120.000 |
| Costo de ventas | ($ 68.000) | ($ 70.500) |
| **Utilidad bruta** | **$ 52.000** | **$ 49.500** |
| Inventario final | $ 26.000 | $ 23.500 |

Con precios en suba:

- **PEPS** manda al costo de ventas los costos más viejos, que son los más baratos. Resultado: costo de ventas menor, **utilidad bruta mayor** e inventario final valuado a los costos más recientes.
- **Promedio ponderado** mezcla costos viejos y nuevos en un único costo unitario: costo de ventas algo mayor y utilidad bruta algo menor que con PEPS.

**La diferencia de $ 2.500 en la utilidad bruta no aparece de la nada**. Es exactamente la diferencia entre los dos inventarios finales ($ 26.000 − $ 23.500). El método no cambia cuánto se gastó en mercadería: cambia **cómo se reparte** ese costo entre este período (costo de ventas) y los siguientes (inventario final). Cuando esas 100 unidades se vendan, su costo va a pasar a resultados.

Si los precios bajaran, el efecto se invertiría y PEPS daría el costo de ventas más alto. Con los datos del ejemplo, el UEPS (que la norma no admite) daría lo opuesto a PEPS: costo de ventas de $ 74.000 e inventario final de $ 20.000.

## Errores frecuentes

- ✗ Promediar los costos unitarios sin ponderar: ($ 200 + $ 240 + $ 260) ÷ 3 = $ 233,33. Ignora que hubo 200 unidades a $ 240.
- ✓ Ponderar por cantidades: $ 94.000 ÷ 400 = $ 235.
- ✗ Anotar las salidas de la ficha al precio de venta.
- ✓ Las salidas van **a costo**; el precio de venta solo aparece en el asiento de Ventas.
- ✗ Dar el ejercicio por terminado sin controlar.
- ✓ Verificar siempre que inventario inicial + compras = costo de ventas + inventario final.

La ficha de stock se apoya en todo lo anterior: asientos de compra, IVA, partida doble. Si alguno de esos temas todavía te genera dudas, conviene afianzarlo primero, porque acá se usan todos juntos.

---

*¿Se te complica la ficha de stock? En Delta Academia la practicamos con ejercicios tipo parcial, paso a paso. [Escribinos](/contacto).*
