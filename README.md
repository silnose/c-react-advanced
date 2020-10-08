# c-react-advanced

React es una biblioteca de JavaScript para construir interfaces de usuario. Es declarativo, basado en componentes y puedes escribir una vez y usarlo donde sea.

# Styled Components

<https://styled-components.com/docs>

Los styled-components es una biblioteca para CSS-in-JS. Está basado en los CSS modules, una forma de escribir CSS que se enfoca el que el alcance de los estilos funcione por componente y no se filtren a ningún otro elemento de la página y al mismo tiempo que definimos sus estilos, podemos también condicionarlos a las propiedades que queramos.

Nota: en styled components escribes CSS exacto, así que prácticamente todo lo que puedes hacer en CSS lo puedes hacer en styled components.
<https://codesandbox.io/embed/controlled-form-with-render-props-xvil0?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&theme=dark&ref=hackernoon.com>

# Hooks

<https://es.reactjs.org/docs/hooks-intro.html>

Podemos resumirlos como funciones que nos permiten acceder a casi todas las caracteristicas de react desde componentes funcionales.

- useState
  It declares a “state variable…This is a way to “preserve” some values between the function calls — useState is a new way to use the exact same capabilities that this.state provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React.
  <https://reactjs.org/docs/hooks-state.html>

- useEffect
  If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
  <https://reactjs.org/docs/hooks-effect.html>

- useContext
  In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
  <https://reactjs.org/docs/context.html>

# GraphQL Apollo

<https://graphql.org/learn/>

GraphQL es un lenguaje de consulta y un tiempo de ejecución del servidor para las interfaces de programación de aplicaciones (API); su función es brindar a los clientes exactamente los datos que solicitan y nada más. Imaginemos que tenemos una REST API con WordPress, nos entrega un JSON con mucha data innecesaria y solo queremos unos cuantos campos; GraphQL hace posible obtener únicamente esa data :) .

<https://www.apollographql.com/docs/react/get-started/>

React Apollo es un cliente que nos va a permitir conectarnos a un servidor GraphQL.

# Context

<https://es.reactjs.org/docs/context.html>

Context API es una característica que tiene React para poder pasar datos en nuestra aplicación sin necesidad de usar las Props.

Para crear un contexto vamos a importar el método createContext de la librería React. El contexto que creemos no va a dejar de ser un componente de React (por ello debe llevar mayúscula al inicio.)

El Context que creemos nos va a proporcionar 2 componentes:

- Provider: componente que debe envolver a nuestra aplicación.
- Consumer: nos va a permitir acceder a las render props que declaremos en el Provider.

# Render Props

<https://es.reactjs.org/docs/render-props.html#gatsby-focus-wrapper>

Render props es un patrón utilizado en React que consiste en delegar lo que un componente va a "renderear" a otro componente, la mayoría de la veces, a un padre en el árbol de componentes.

En general usamos render props cuando queremos dar la mayor libertad posible al consumidor de nuestro componente de definir qué es lo que va a renderear, sin atarlo necesariamente a un template específico

# Reach Router

<https://reach.tech/router/>

Reach Router es una versión simplificada y mejor optimizada de React Router, su creador es Ryan Florence el mismo creador de React Router. Se anunció que los dos paquetes se iban a unir, pero su API se va a parecer más a Reach Router.
