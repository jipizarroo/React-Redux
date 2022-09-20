# Prueba Técnica front-end de Javier Pizarro.
# Scripts disponibles.
### `npm start`

Levanta nuestro ambiente en development mode.

Abrir [http://localhost:3000](http://localhost:3000) para ver el proyecto en tu navegador.

### `npm run test`

Corre todos los test de la aplicación.

### `npm run test:coverage`

Corre los test de la aplicación con la generación del coverage para cada test.

### `npm run test {ruta}`

Ej: `npm run test src/components/card/card.test.js`

Corre los test de un archivo en específico, también se puede hacer lo mismo con `run test coverage {ruta}`

# Consideraciones de esta prueba

- Proyecto creado con npx create-react-app por la facilidad de comenzar un proyecto de forma rápida.

- ¿ Por qué Redux Toolkit ?

De acuerdo a la documentación oficial: 
 
Redux Toolkit es la forma recomendada de forma oficial de cómo integrar lógica de Redux en un proyecto.
Hace un rap al core de Redux, contiene paquetes y funciones que son esenciales para construir una Redux App.
Redux Toolkit se construye con las mejores prácticas sugeridas por el equipo de Redux, simplifica las tareas que este ejecuta, previene errores y hace que sea más fácil
ocupar Redux.

- ¿ Por qué tenemos una Store especial para los test ? 

Según la misma documentación de Redux, debido a que usamos React-testing-Library y al React estar conectado con nuestra store de Redux necesitamos que los test también esten conectados con la store de Redux, además de esto, debiesemos tener una instancia separada de una store para evitar posibles leaks entre los test.

La forma en que creamos la store difiere de la usada en la app debido a la oritacion que nos da Redux en la documentación de como crear este wrapper de `render`.


# Mejoras de esta prueba

Cosas que podria haber mejorado podría ser un poco más de animaciones cuando las cards desaparecen al borrar una de estas.

Me hubiera gustado hacer un botón de editar las tareas.

Me hubiera gustado hacer un tab con las tareas completadas y las otras borradas.

Me gustaría tener una mejor paleta de colores para toda la app, pero no tengo la imaginación/expertis de una persona de UX/UI para la combinación de colores :(.