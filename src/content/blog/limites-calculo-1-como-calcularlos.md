---
title: "Límites en Cálculo 1A: qué son y cómo calcularlos paso a paso"
description: "Cómo calcular límites en Cálculo 1A: la intuición con tablas, los límites laterales, la indeterminación 0/0 y los límites al infinito, con ejemplos resueltos."
date: 2026-09-27
author: "Germán Rivero"
tag: "Cálculo"
---

Los límites son uno de los temas centrales de Cálculo 1A y, para muchos, el primer choque con una matemática distinta a la del liceo: ya no alcanza con "sustituir y hacer la cuenta". La buena noticia es que detrás de la notación hay una idea muy intuitiva y un puñado de técnicas que resuelven la mayoría de los ejercicios.

## La idea: acercarse a un punto sin tocarlo

Tomá la función f(x) = (x² − 4)/(x − 2). En x = 2 no se puede evaluar: el denominador da cero. Pero sí podemos preguntarnos qué pasa **cerca** de 2. Armemos una tabla de valores:

| x | 1,9 | 1,99 | 1,999 | 2 | 2,001 | 2,01 | 2,1 |
|---|---|---|---|---|---|---|---|
| f(x) | 3,9 | 3,99 | 3,999 | no definida | 4,001 | 4,01 | 4,1 |

A medida que x se acerca a 2, por la izquierda o por la derecha, f(x) se acerca a 4. Eso es lo que escribimos como:

> **lím (x → 2) f(x) = 4**

y se lee "el límite de f(x) cuando x tiende a 2 es 4". Fijate en lo más importante: **el límite no mira lo que pasa en el punto, sino alrededor de él**. La función ni siquiera está definida en x = 2 y, aun así, el límite existe. La tabla sirve para intuir el resultado; más abajo lo confirmamos con álgebra.

## Límites laterales: por izquierda y por derecha

A un punto te podés acercar desde dos lados, y cada uno tiene su propio límite: el **límite por izquierda** (x → a⁻, con valores menores que a) y el **límite por derecha** (x → a⁺, con valores mayores). La regla es clara: **el límite existe solo si los dos laterales existen y coinciden**.

Un ejemplo con plata. Una empresa de envíos cobra según el peso x del paquete, en kilos, con una tarifa definida por partes: T(x) = $ 150 si pesa hasta 5 kg, y T(x) = $ 250 si pesa más de 5 kg.

- Por izquierda (x → 5⁻), la tarifa vale siempre $ 150: el límite lateral es 150.
- Por derecha (x → 5⁺), vale siempre $ 250: el límite lateral es 250.

Como los laterales son distintos, **el límite en x = 5 no existe**, aunque la función sí tenga valor en ese punto (T(5) = $ 150).

## La indeterminación 0/0 y cómo salvarla

Volvamos a f(x) = (x² − 4)/(x − 2). Si sustituís x = 2, obtenés 0/0. Y acá está la clave: **0/0 no es un resultado, es una indeterminación**. Quiere decir "con esta forma todavía no puedo saber cuánto da"; el límite podría ser cualquier número, o no existir.

La salida más frecuente es **factorizar y simplificar**:

1. Factorizamos el numerador, que es una diferencia de cuadrados: x² − 4 = (x − 2)(x + 2).
2. Para x ≠ 2, simplificamos: (x − 2)(x + 2)/(x − 2) = x + 2.
3. Ahora sí sustituimos: lím (x → 2) (x + 2) = 2 + 2 = **4**.

Coincide con la tabla. ¿Por qué se puede tachar (x − 2) si en x = 2 vale cero? Porque el límite solo mira valores de x **distintos** de 2, y para esos valores (x − 2) no es cero.

Un dato que ayuda a factorizar: si un polinomio se anula en x = a, entonces (x − a) es uno de sus factores (el otro sale con Ruffini). Por ejemplo, en lím (x → 3) (x² − 5x + 6)/(x − 3) el numerador vale cero en x = 3, así que x² − 5x + 6 = (x − 3)(x − 2) y el límite es 3 − 2 = **1**.

Distinto es el caso en que solo se anula el denominador: si al sustituir obtenés algo como 5/0, no hay indeterminación, pero tampoco un límite finito. La función "se dispara" hacia +∞ o −∞, y tenés que mirar cada lado por separado.

## Límites al infinito: comparar grados

Otra pregunta típica: ¿qué pasa con una función cuando x crece sin tope? Para cocientes de polinomios hay una regla práctica: **comparás el grado del numerador con el del denominador**.

| Caso | Ejemplo | Límite cuando x → +∞ |
|---|---|---|
| Grado de arriba menor | (4x + 7)/(x² + 1) | 0 |
| Grados iguales | (3x² + 5x − 1)/(6x² − 2) | 3/6 = 1/2 |
| Grado de arriba mayor | (x³ − 2x)/(5x² + 1) | +∞ |

¿De dónde sale? Dividí numerador y denominador entre la mayor potencia del denominador. En el segundo ejemplo, dividiendo entre x² queda (3 + 5/x − 1/x²)/(6 − 2/x²). Cuando x crece, todos los términos que tienen x abajo tienden a cero, y sobrevive 3/6.

Ojo con dos detalles. Lo que cuenta son los **coeficientes principales** (los de mayor grado), no los que aparecen escritos primero: lím (x → +∞) (2 − 3x²)/(x² + 4) = **−3**. Y cuando el grado de arriba es mayor, el límite puede ser +∞ o −∞ según el signo de esos coeficientes: (1 − x³)/(x² + 1) tiende a **−∞**.

Una aplicación económica: si producir x unidades cuesta C(x) = 50.000 + 200x (un costo fijo de $ 50.000 más $ 200 por unidad), el costo medio es C(x)/x = (200x + 50.000)/x. Los grados son iguales, así que el límite cuando x → +∞ es 200/1 = **$ 200**. Con volúmenes muy grandes el costo fijo se diluye y el costo medio se acerca al costo variable por unidad.

## Cuatro errores comunes

**1. Ver 0/0 y declarar que el límite no existe.**

- ✗ "Sustituí, dio 0/0, entonces no existe."
- ✓ 0/0 es una señal de que hay que seguir trabajando: factorizar y simplificar.

**2. Tratar al infinito como un número.**

- ✗ "∞ − ∞ = 0" o "∞/∞ = 1".
- ✓ Son indeterminaciones. Cuando x → +∞, (x + 5) − x tiende a 5 y x² − x tiende a +∞: las dos son "∞ − ∞" y dan cosas distintas. Y 2x/x, que es "∞/∞", tiende a 2, no a 1. Decir que un límite "es +∞" describe un comportamiento (la función crece sin tope), no un valor al que se llega.

**3. Olvidar los límites laterales.**

- ✗ "lím (x → 2) 1/(x − 2) = +∞."
- ✓ Por izquierda tiende a −∞ y por derecha a +∞: como no coinciden, el límite no existe. En las funciones definidas por partes, el punto de corte siempre pide mirar los dos lados.

**4. Simplificar mal.**

- ✗ (x + 6)/(x + 2) = 6/2 = 3, "tachando las x".
- ✓ Solo se tachan **factores** (lo que multiplica), nunca sumandos: (x² + 3x)/x = x(x + 3)/x = x + 3 (para x ≠ 0) sí es válido. Y cuidado con los signos: 4 − x² = −(x − 2)(x + 2), así que lím (x → 2) (4 − x²)/(x − 2) = −(2 + 2) = **−4**, no 4.

## Para cerrar

Los límites no son un tema suelto: son la base de la continuidad y de la derivada, que se define justamente como un límite. En [Cálculo 1A](/materias/calculo-1a) llegan después de funciones, así que conviene dejarlos firmes antes de avanzar. Y si te preguntás adónde lleva todo esto, la continuación natural es [para qué sirven las derivadas en Economía](/blog/para-que-sirven-las-derivadas-economia).

---

*¿Se te complican los límites? En Delta Academia los practicamos con ejercicios tipo parcial, paso a paso. [Escribinos](/contacto).*
