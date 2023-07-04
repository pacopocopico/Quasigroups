var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colofón",
  "number": "",
  "title": "Colofón",
  "body": "   example.org   https:\/\/example.org   copyright  "
},
{
  "id": "section-title",
  "level": "1",
  "url": "section-title.html",
  "type": "Sección",
  "number": "1.1",
  "title": "Definición",
  "body": " Definición  Sea un espacio vectorial sobre un cuerpo , con una operación , que notaremos y llamaremos conmutador . Tal estructura se denomina álgebra de Lie si el conmutador satisface las siguientes condiciones:  es bilineal;   (identidad de Jacobi);    Por la segunda condición, . Pero por la primera, y como , tenemos que . A la inversa, si es de característica diferente de , esta igualdad implica la segunda condición. Por otra parte, , así que la identidad de Jacobi se puede escribir también como .  Obsérvese que, en general, un álgebra de Lie puede no ser asociativa.  Los conceptos de isomorfismo y subálgebra Lie se definen de la forma obvia.  "
},
{
  "id": "sec-linliea",
  "level": "1",
  "url": "sec-linliea.html",
  "type": "Sección",
  "number": "1.2",
  "title": "Álgebras lineales de Lie",
  "body": " Álgebras lineales de Lie  Supongamos un espacio vectorial de dimensión finita, digamos , sobre un cuerpo , y sea el espacio vectorial de las transformaciones lineales , que es de dimensión .  Con la composición como producto, es un anillo (un álgebra asociativa, de hecho). Definiendo el conjunto adquiere estructura de álgebra de Lie. Escribiremos en lugar de cuando queramos verlo como un álgebra de Lie, a la que llamaremos álgebra lineal general .  Si fijamos una base para podemos identificar con el conjunto de las matrices sobre , notado .  Tomamos como base de el conjunto de matrices , que tienen un en la posición y en el resto de entradas. Entonces , así que   "
},
{
  "id": "sec-classalg",
  "level": "1",
  "url": "sec-classalg.html",
  "type": "Sección",
  "number": "1.3",
  "title": "Álgebras clásicas",
  "body": " Álgebras clásicas  Vamos a ver cuatro familias de algebras de Lie denominadas álgebras clásicas .   Álgebras tipo  Sea de dimensión . Escribimos o para el conjunto de endomorfismos de de traza cero. Por las propiedades de la traza, es una subálgebra de , que se denomina álgebra lineal especial por su conexión con el grupo lineal especial  de endomorfismos de determinante igual a .    Álgebras tipo  Sea de dimensión con base . Definimos una forma lineal antisimétrica sobre mediante El álgebra simpléctica  o es el conjunto de todos los endomorfismos de tales que .   "
},
{
  "id": "sec-lieder",
  "level": "1",
  "url": "sec-lieder.html",
  "type": "Sección",
  "number": "1.4",
  "title": "Álgebras de Lie de derivaciones",
  "body": " Álgebras de Lie de derivaciones  Sea un álgebra sobre no necesariamente asociativa. Una derivación es una función lineal tal que . El conjunto de todas las derivaciones de es un subespacio de . Por otra parte, el conmutador de dos derivaciones es una derivación, así que es un álgebra de Lie.  Como un álgebra de Lie es un álgebra, es un álgebra de Lie. Si , entonces es un endomorfismo de , que notaremos . De hecho, , porque la identidad de Jacobi se puede escribir como . Estas derivaciones se denominan internas . La función que envía a se denomina representación adjunta de .  "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colofón",
  "number": "",
  "title": "Colofón",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
