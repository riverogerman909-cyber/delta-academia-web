---
title: "¿Para qué sirven las derivadas? La explicación que le faltó a Cálculo"
description: "Qué es una derivada explicada con intuición: velocidad de cambio, pendiente de la tangente y por qué en Economía se usa todo el tiempo (costo e ingreso marginal)."
date: 2026-09-19
author: "Germán Rivero"
tag: "Cálculo"
---

Pocas preguntas se repiten tanto en primer año como esta: *"¿y esto para qué me sirve, si yo vine a estudiar economía o contabilidad?"*. La respuesta corta: la derivada es probablemente **la herramienta matemática más usada en Economía**. La respuesta larga — y la intuición que suele faltar — viene ahora.

## La idea: medir cómo cambia algo

Empecemos lejos de las fórmulas. Un auto recorre 100 km en una hora: su velocidad *promedio* fue 100 km/h. Pero el velocímetro no marca promedios — marca la velocidad **en este instante**. ¿Cómo se calcula una velocidad instantánea, si en un instante el auto no recorre nada?

La respuesta es el truco central de todo el curso: tomás promedios en intervalos **cada vez más chicos** — una hora, un minuto, un segundo, una décima — y mirás a qué valor se van acercando. Ese valor límite es la velocidad instantánea. Y ese proceso de "acercarse indefinidamente" es, justamente, el concepto de **límite** que abre el curso: no está ahí para torturarte, está porque sin él la derivada no se puede ni definir.

**La derivada de una función en un punto es eso: la velocidad a la que la función está cambiando exactamente en ese punto.**

## La versión geométrica: la pendiente

La misma idea, dibujada. Si graficás una función y marcás dos puntos, la recta que los une (secante) tiene una pendiente: el cambio promedio entre ambos. Si ahora deslizás el segundo punto hacia el primero, la secante se va acomodando hasta convertirse en la **recta tangente**: la que apenas "roza" la curva en ese punto.

La derivada es la **pendiente de esa tangente**. Por eso:

- Derivada **positiva** → la función viene subiendo en ese punto.
- Derivada **negativa** → viene bajando.
- Derivada **cero** → la curva está "plana": posible máximo o mínimo.

Ese tercer caso es oro puro, y enseguida vas a ver por qué.

## Ahora sí: la Economía

En Economía casi todo se piensa "en el margen": no importa solo cuánto costó producir todo, sino cuánto costaría producir **una unidad más**. Ese concepto tiene nombre propio:

- **Costo marginal**: la derivada de la función de costo. Si producir x unidades cuesta C(x), el costo marginal C′(x) aproxima cuánto cuesta la unidad siguiente.
- **Ingreso marginal**: la derivada del ingreso. Cuánto suma vender una unidad más.
- **Utilidad marginal**, **productividad marginal**... el patrón es siempre el mismo: *marginal = derivada*.

¿Y para qué las quiere una empresa? Para **optimizar**. El beneficio es máximo donde su derivada vale cero — en términos económicos, donde el ingreso marginal iguala al costo marginal: mientras la próxima unidad deja más de lo que cuesta, conviene producirla; cuando cuesta más de lo que deja, conviene parar. Ese razonamiento, que es el corazón de la microeconomía, **es un ejercicio de derivadas**.

Cuando en un práctico te piden "hallar el máximo de la función de beneficio", no es un capricho del curso de matemática: es la pregunta más importante que se hace cualquier empresa, escrita en símbolos.

## Un ejemplo en dos líneas

Supongamos que el beneficio de producir x unidades es B(x) = −x² + 100x (sube al principio, pero producir demasiado satura el mercado). Su derivada es B′(x) = −2x + 100, que vale cero en x = 50. Antes de 50 la derivada es positiva (el beneficio sube); después es negativa (baja). Producir **50 unidades** maximiza el beneficio. Eso es todo el aparato en acción: derivar, igualar a cero, interpretar.

## Cómo encarar el curso con esto en mente

1. **Primero la intuición, después la técnica.** Las reglas de derivación se aprenden practicando, pero rinden el doble cuando sabés *qué* estás calculando: una velocidad de cambio, una pendiente.
2. **Traducí los enunciados a economía.** Cada vez que veas "derivada", pensá "marginal". Cada "hallar el máximo", pensá "qué le conviene a la empresa". El curso se vuelve mucho menos abstracto.
3. **No te saltes límites.** Es la base sobre la que se define todo lo demás; los agujeros ahí se pagan después.

En Delta damos [Cálculo 1A](/materias/calculo-1a), [Cálculo 1B](/materias/calculo-1b) y [Cálculo 1](/materias/calculo-1) con esta misma lógica: primero que se entienda, después que salga rápido.

---

*¿Cálculo se te está haciendo cuesta arriba? En Delta Academia lo bajamos a tierra con clases en vivo y práctica guiada. [Escribinos](/contacto).*
