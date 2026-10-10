---
title: "Reglas de derivación: tabla de derivadas y ejemplos resueltos"
description: "Reglas de derivación con ejemplos resueltos: tabla de derivadas, suma, producto, cociente y regla de la cadena, y los errores más frecuentes al derivar."
date: 2026-10-09
author: "Germán Rivero"
tag: "Cálculo"
---

Entender qué es una derivada es el primer paso; el segundo es poder calcularla rápido y sin errores. Para eso están las **reglas de derivación** (también llamadas fórmulas de derivación): una tabla corta de derivadas básicas y un puñado de reglas para derivar cualquier función que se arme a partir de esas básicas sumando, multiplicando, dividiendo o componiendo. En esta guía las vemos una por una, con un ejemplo resuelto para cada regla, un ejercicio combinado paso a paso y los errores que más se repiten.

## Antes de las reglas: la derivada es un límite

La derivada de una función f en un punto x se define como un límite (si ese límite existe y es finito, decimos que f es derivable en x):

> **f′(x) = lím (h → 0) [f(x + h) − f(x)] / h**

Si sustituís h = 0 obtenés 0/0, la indeterminación que vimos en [cómo calcular límites](/blog/limites-calculo-1-como-calcularlos). Con f(x) = x², por ejemplo: [(x + h)² − x²]/h = (2xh + h²)/h = 2x + h, y cuando h → 0 queda **f′(x) = 2x**.

Hacer esto con cada función sería interminable: las reglas de derivación se demuestran una vez a partir de esta definición y después se aplican directamente. Si todavía no tenés clara la idea de qué mide una derivada (una velocidad de cambio, la pendiente de la tangente), conviene pasar antes por [para qué sirven las derivadas](/blog/para-que-sirven-las-derivadas-economia).

## Tabla de derivadas básicas

| Función | Derivada | Ejemplo o comentario |
|---|---|---|
| k (constante) | 0 | f(x) = 7 → f′(x) = 0 |
| xⁿ | n·xⁿ⁻¹ | x⁵ → 5x⁴ |
| √x | 1/(2√x) | sale de escribir √x = x^(1/2) |
| 1/x | −1/x² | sale de escribir 1/x = x⁻¹ |
| eˣ | eˣ | coincide con su derivada |
| aˣ (a > 0) | aˣ·ln a | 2ˣ → 2ˣ·ln 2 |
| ln x | 1/x | logaritmo neperiano, x > 0 |
| sen x | cos x | |
| cos x | −sen x | |

Tres comentarios sobre la tabla:

**La regla de la potencia también sirve para raíces y potencias negativas.** El truco es reescribir antes de derivar: ∛x = x^(1/3), así que su derivada es (1/3)·x^(−2/3) = 1/(3·∛(x²)). Y 1/x³ = x⁻³, cuya derivada es −3x⁻⁴ = −3/x⁴. Ojo con los dominios: las fórmulas de √x y de ln x valen para x > 0.

**La base e es especial.** Entre las exponenciales aˣ, la de base e es la única que coincide con su derivada, porque ln e = 1. Con cualquier otra base aparece el factor ln a, como en una función de interés compuesto: f(t) = (1,05)ᵗ tiene derivada f′(t) = (1,05)ᵗ·ln 1,05.

**Las trigonométricas** (sen x y cos x) figuran en la ficha oficial de Cálculo 1 (MC10), en la unidad de función inversa. Si cursás esa materia, tenelas presentes: las reglas que siguen funcionan igual con ellas.

## Reglas de derivación de la constante y la suma

**Constante por función: (k·f)′ = k·f′.** La constante "sale" y se deriva solo la función. Ejemplo: (5x³)′ = 5·3x² = **15x²**.

**Suma y resta: (f ± g)′ = f′ ± g′.** Se deriva término a término:

> f(x) = 4x³ − 6x² + 2x − 9 → **f′(x) = 12x² − 12x + 2**

El −9 desaparece porque es una constante. Con estas dos reglas y la de la potencia ya podés derivar cualquier polinomio.

## Derivada de un producto y de un cociente

Acá aparece una trampa clásica: **la derivada de un producto no es el producto de las derivadas**.

**Producto: (f·g)′ = f′·g + f·g′.** La derivada del primero por el segundo sin derivar, más el primero sin derivar por la derivada del segundo.

Ejemplo: p(x) = x²·eˣ. Con f = x² (f′ = 2x) y g = eˣ (g′ = eˣ):

> p′(x) = 2x·eˣ + x²·eˣ = **eˣ(x² + 2x)**

Otro ejemplo: (x·ln x)′ = 1·ln x + x·(1/x) = **ln x + 1**.

**Cociente: (f/g)′ = (f′·g − f·g′)/g²**, donde g ≠ 0. Acá el orden importa: por el signo de menos, si invertís los términos del numerador el resultado cambia de signo.

Ejemplo: p(x) = (2x + 1)/(x − 3). Con f = 2x + 1 (f′ = 2) y g = x − 3 (g′ = 1):

> p′(x) = [2·(x − 3) − (2x + 1)·1]/(x − 3)² = (2x − 6 − 2x − 1)/(x − 3)² = **−7/(x − 3)²**

Fijate en el paréntesis de (2x + 1): el signo de menos afecta a todo el término.

Un atajo: no todo cociente pide la regla del cociente. Si el denominador es una constante, (x² + 1)/5 = (1/5)·(x² + 1) y la derivada es 2x/5. Si el numerador es constante, conviene reescribir como potencia: 3/x² = 3x⁻², cuya derivada es −6x⁻³ = −6/x³.

## Regla de la cadena (derivada de la función compuesta)

La regla de la cadena se usa cuando hay una función "adentro" de otra, como en (3x² + 1)⁵, e^(x²) o ln(x² + 4):

> **[f(g(x))]′ = f′(g(x))·g′(x)**

En palabras: **derivás la función de afuera dejando intacta la de adentro, y multiplicás por la derivada de la de adentro**.

Ejemplo: p(x) = (3x² + 1)⁵. La de afuera es "algo a la quinta" y la de adentro es 3x² + 1, con derivada 6x:

> p′(x) = 5(3x² + 1)⁴·6x = **30x(3x² + 1)⁴**

Desarrollar la potencia quinta y derivar el polinomio también funciona, pero es largo y propenso a errores de cuentas.

Combinando la cadena con la tabla, si u es una función de x:

| Función | Derivada | Ejemplo |
|---|---|---|
| uⁿ | n·uⁿ⁻¹·u′ | (3x² + 1)⁵ → 30x(3x² + 1)⁴ |
| √u | u′/(2√u) | √(x² + 9) → x/√(x² + 9) |
| eᵘ | eᵘ·u′ | e^(x²) → 2x·e^(x²) |
| ln u | u′/u | ln(x² + 4) → 2x/(x² + 4) |

## Ejemplo combinado paso a paso

Derivemos f(x) = x·√(x² + 9), que pide producto y cadena a la vez.

1. **Identificá la estructura.** Es un producto: x por √(x² + 9).
2. **Derivá cada factor.** La derivada de x es 1. Para √(x² + 9) usamos la cadena: 2x/(2√(x² + 9)) = x/√(x² + 9).
3. **Aplicá la regla del producto.** f′(x) = 1·√(x² + 9) + x·x/√(x² + 9).
4. **Simplificá con denominador común.** f′(x) = [(x² + 9) + x²]/√(x² + 9) = **(2x² + 9)/√(x² + 9)**.

Para controlar, evaluá en x = 4, donde √(16 + 9) = 5: f′(4) = (32 + 9)/5 = 41/5 = **8,2**. Cuando practiques con calculadora, compará ese valor con la pendiente de la secante entre dos puntos muy cercanos: [f(4,001) − f(3,999)]/0,002 ≈ (20,00820 − 19,99180)/0,002 = 8,2. Si los dos números no se parecen, hay un error en la derivada.

## Una aplicación: costo medio y costo marginal

Supongamos que el costo total de producir x unidades es C(x) = x² + 10x + 400, en miles de pesos.

- El **costo marginal** sale con las reglas de la suma y de la potencia: C′(x) = 2x + 10.
- El **costo medio** es CMe(x) = C(x)/x, y para derivarlo usamos la regla del cociente:

> CMe′(x) = [(2x + 10)·x − (x² + 10x + 400)·1]/x² = **(x² − 400)/x²**

Como el denominador x² es positivo, el signo de CMe′ lo da el numerador: para x > 0, x² − 400 es negativo si x < 20, se anula en x = 20 y es positivo si x > 20. El costo medio baja hasta las 20 unidades y después sube: **su mínimo está en x = 20**. Ahí CMe(20) = (400 + 200 + 400)/20 = 50 y C′(20) = 2·20 + 10 = 50. Costo medio y costo marginal valen lo mismo: $ 50.000 por unidad.

No es casualidad. Para cualquier función de costo derivable, la regla del cociente da CMe′(x) = [x·C′(x) − C(x)]/x², que se anula justo cuando C′(x) = C(x)/x, es decir, **cuando el costo marginal iguala al costo medio**. Un resultado clásico de microeconomía que sale en una línea.

## Errores frecuentes al derivar

**1. Derivar un producto multiplicando las derivadas.**

- ✗ (x²·eˣ)′ = 2x·eˣ.
- ✓ (x²·eˣ)′ = 2x·eˣ + x²·eˣ. Una prueba rápida de que el atajo no sirve: x·x = x², cuya derivada es 2x, pero multiplicando las derivadas daría 1·1 = 1.

**2. Olvidar la derivada de adentro en la regla de la cadena.**

- ✗ [(3x² + 1)⁵]′ = 5(3x² + 1)⁴, o (e^(2x))′ = e^(2x).
- ✓ Falta multiplicar por la derivada de adentro: 30x(3x² + 1)⁴ y 2e^(2x).

**3. Equivocarse en la regla del cociente.**

- ✗ [(2x + 1)·1 − 2·(x − 3)]/(x − 3)² = 7/(x − 3)², o derivar numerador y denominador por separado: 2/1.
- ✓ Primero va la derivada del numerador: el resultado correcto es −7/(x − 3)². Con el signo cambiado, concluirías que la función crece donde en realidad decrece.

**4. Usar la regla de la potencia cuando la x está en el exponente.**

- ✗ (2ˣ)′ = x·2ˣ⁻¹.
- ✓ La regla de la potencia es para xⁿ con exponente fijo. Si la variable está en el exponente, es una exponencial: (2ˣ)′ = 2ˣ·ln 2.

**5. Derivar constantes que parecen funciones.**

- ✗ (e²)′ = 2e o (ln 5)′ = 1/5.
- ✓ e², ln 5 y π son números: su derivada es 0.

## Para cerrar

Estas reglas no son un fin en sí mismas: son la herramienta que vas a usar en todo lo que sigue. En [Cálculo 1A](/materias/calculo-1a) el cálculo de derivadas llega después de límites y continuidad, y es la base del resto del curso: crecimiento y decrecimiento, optimización, funciones marginales y elasticidad de la demanda. En [Cálculo 1](/materias/calculo-1) (MC10, de un semestre y 10 créditos), la primera unidad del programa ya incluye el cálculo de derivadas y la regla de la cadena. Y [Cálculo 1B](/materias/calculo-1b), que tiene a 1A como previa, las necesita en la derivada de la función inversa, en el polinomio de Taylor y, al revés, en la integración por sustitución.

---

*¿Se te complican las derivadas? En Delta Academia las practicamos con ejercicios tipo parcial, paso a paso. [Escribinos](/contacto).*
