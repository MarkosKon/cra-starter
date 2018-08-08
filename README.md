#CRA Starter

> A starter project bootstrapped with [create-react-app](https://github.com/facebook/create-react-app) that helps you start quickly a simple static site. [Live demo](https://cra-starter.netlify.com/).

### Usage

`git clone https://github.com/MarkosKon/cra-starter.git`
`cd cra-starter && npm install && npm start`

### Dependencies

The project includes the following dependencies:

- **Routing** with [react-router](https://github.com/ReactTraining/react-router).
- **Styling** with [styled-components](https://github.com/styled-components/styled-components).
- **SEO** and **head tag** management with [react-helmet](https://github.com/nfl/react-helmet).
- **Fontawesome** icons with [FortAwesome](https://github.com/FortAwesome/react-fontawesome), as [suggested](https://fontawesome.com/how-to-use/on-the-web/using-with/react) in the FontAwesome site.
- **Bootstrap 4** with [reactstrap](https://github.com/reactstrap/reactstrap) (although not used).

### Structure

- The starting point of the application is the `src/index.js` that renders only the `src/App.jsx` component and registers a service worker (default cra stuff). Because we don't use Redux this component can hold the application state and distribute it via props.
- The `App` component renders a list of routes (`Router` > `Switch` > `Route's` more specifically). Each `Route` has a render prop where inside, a `Layout` component  wraps the corresponding page component.
- In `pages` folder we have the pages. So if you want to create a page you create a component in pages and you add a `Route` in the `App` component.
- In `layouts` folder we have a `Layout` component (just a regular component) that renders a `Navbar` component, then a page as a child and finally a `Footer` component.
- In `components` folder we have the application wide components. `Button`, `Footer` and `PageTitle` are simple styled-components. `Navbar` on the other hand includes a full screen mobile menu.
- In `utils` folder we store our utilities. The only file is `animations.js` that is used for animations with styled-components.
