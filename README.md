# Meteor Mantra on Webpack and Typescript

This is the project that combines the popular [Kickstart Webpack Flowrouter project](https://github.com/thereactivestack/kickstart-flowrouter.git) and
the [Meteor Mantra](https://github.com/kadirahq/mantra) architecture.

The project contains four different applications (located in the `modules` folder):

1. **MantraTS** - is an example blog application based on [Mantra with **modules**](https://github.com/mantrajs/mantra-sample-blog-app/tree/mantra-modules)
rewritten in Typescript. Application is accessible on http://localhost:3000/mantra.
2. **TodoAppTS** - is an example Typescript application with a standard Meteor architecture. Application is accessible on http://localhost:3000/todo.
3. **Mantra-Base** is a **javascript** version of [Mantra application](https://github.com/mantrajs/mantra-sample-blog-app/tree/mantra-modules) working with Kickstart project. This application is not accessible and has to be configured in "entry/client/entry.js"
4. **Mantra-Modules** is a **javascript** version of [Mantra application with modules](https://github.com/mantrajs/mantra-sample-blog-app) working with Kickstart project. This application is not accessible and has to be configured in "entry/client/entry.js"

### Notes for Hot code reload 

Please note, that hot code reload currently does not support the React stateless components `const PostList = ({posts}) => ( ... )`. To apply hot code reload you need to use standard components: `class NewPost extends React.Component { ... }`.

# Quick start

Clone this project to start a FlowRouter project using Meteor, React.js and Webpack.

1. `git clone https://tomitrescak@github.com/tomitrescak/Meteor-Boilerplate-Webpack-Mantra-Typescript.git`
1. `cd Meteor-Boilerplate-Webpack-Mantra-Typescript`
1. `meteor`

## The stack & features
- Include the simple todo app example
- ES6 modules
- Meteor
- React.js
- FlowRouter / ReactLayout
- Webpack (bundle your app / assets and send them to Meteor)
- Hot-reload with no page refresh in development mode
- Optimize your code in production mode
- Give access to NPM by using [`webpack.packages.json`](https://github.com/thereactivestack/kickstart-flowrouter/blob/master/webpack.packages.json)

# Production
You can use meteor run, meteor build, mup or anything working with Meteor.

## Run in production mode
`meteor run --production`

## Build for production
`meteor build .`

## Deploy with Meteor-up
`mup deploy`

## Cordova
You need to do those 3 steps to make it works with iOS or Android:

1. Add the platform to your Meteor project

    ```javascript
    meteor add-platform ios
    meteor add-platform android
    ```
1. Allow access to your dev server in your `/mobile-config.js` file:

    ```javascript
    App.accessRule('http://192.168.1.100:3500/*');
    ```

1. Replace localhost by your local ip address in `/entry/webpack.conf.js`.
