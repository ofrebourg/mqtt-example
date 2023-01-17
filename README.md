# mqtt-example

This is a little MQTT test app using Vue2, TypeScript, Pinia (state management) and MQTT.

## Project Setup

```sh
yarn install
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

By default, the app runs on http://localhost:8080

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```

### Docker

#### Build

```sh
yarn docker-build
```

#### Run in a Docker container

```sh
yarn docker-run
```

The app will then be running on http://localhost:8080