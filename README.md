# Prueba Técnica front-end de Javier Pizarro.



# Consideraciones

- Proyecto creado con npx create-react-app por la facilidad de comenzar un proyecto de forma rapida.

- ¿ Por qué Redux Toolkit ?

De acuerdo a la documentacion oficial: 
 
Redux Toolkit es la forma recomendada de forma oficial de cómo integrar lógica de Redux en un proyecto.
Hace un rap al core de Redux, contiene paquetes y funciones que son esenciales para construir una Redux App.
Redux Toolkit se construye con las mejores prácticas sugeridas por el equipo de Redux, simplifica las tareas que este ejecuta, previene errores y hace que sea más fácil
ocupar Redux.

- ¿ Por qué tenemos una Store especial para los test ? 

Segun la misma documentación de Redux, debido a que usamos React-testing-Library y al React estar conectado con nuestra store de Redux necesitamos que los test tambien esten conectados con la store de Redux, además de esto, debiesemos tener una instancia separada de una store para evitar posibles leaks entre los test.

La forma en que creamos la store difiere de la usada en la app debido a la oritacion que nos da Redux en la documentacion de como crear este wrapper de `render`.


# Scripts disponibles.


### `npm start`

Levanta nuestro ambiente en development mode.

Abrir [http://localhost:3000](http://localhost:3000) para ver el proyecto en tu navegador.