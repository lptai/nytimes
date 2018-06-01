# NYTIMESNEWS

## Checklist

* [x] Home Page, Detail Page
* [x] Flux architecture
* [x] Unit & UI Tests
* [x] Call NYTimes API to get list of news
* [x] Responsive Web Design (RWD)

## Technical stack

Using redux to manage app's state

Using `styled-component` && `grid-styled` to styling the component and do RWD.

Using `jest` and `enzyme` to write the unit test & ui test

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### [How to deploy on Heroku](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#heroku)

[Deploying React with Zero Configuration](https://blog.heroku.com/deploying-react-with-zero-configuration)

#### Quick Start

Replace $APP_NAME with a name for your unique app.

```shell
create-react-app $APP_NAME
cd $APP_NAME
git init
heroku create $APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "Start with create-react-app"
# maybe need to set buildpack
heroku buildpacks:set heroku/nodejs
git push heroku master
heroku open
```

[How to Deploy to Multiple Heroku Apps from the Same Git Repository](http://adampaxton.com/how-to-deploy-to-multiple-heroku-apps-from-the-same-git-repository/)
