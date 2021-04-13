# Natural-Language-Processing-App

This project makes use of MeaningCloud's Sentiment Analysis API.
The functionality is that the user enters a URL, this will be evaluated by the Meaning Cloud API, and once it is analyzed the UI is updated with the analysis.

## Specifications
### The project was written with:
- HTML5 

- Saas

- Vanilla JS

- Node.js & Express environment

- Webpack

- Service workers

- Jest

### Dependencies:
`"@babel/runtime": "^7.12.13"` -
`"body-parser": "^1.19.0"` -
`"cors": "^2.8.5"` -
`"dotenv": "^8.2.0"` -
`"express": "^4.17.1"` -
`"node-fetch": "^2.6.1"` -
`"webpack": "4.46.0"` -
`"webpack-cli": "^4.5.0"`
### devDependencies:
`"@babel/core": "^7.12.13"` -
`"@babel/preset-env": "^7.12.13"` -
`"babel-loader": "^8.2.2"` -
`"clean-webpack-plugin": "^3.0.0"` -
`"css-loader": "^5.0.2"` -
`"html-webpack-plugin": "^4.5.1"` -
`"jest": "^26.6.3"` -
`"node-sass": "^5.0.0"` -
`"sass-loader": "^10.0.1"` -
`"style-loader": "^2.0.0"` -
`"webpack-bundle-analyzer": "^4.4.0"` -
`"webpack-dev-server": "^3.11.2"` -
`"workbox-webpack-plugin": "^6.1.2"` -

## Installation:

#### Step 1: Signup for an API key

- Go to [Meaning Cloud](https://www.meaningcloud.com/developer/apis) and get your API key.
- Create an `.env` file and add the API_KEY in this file.

#### Step 2: Deployment

- Clone or Download this repo

- `cd` into your new folder and run:

- `npm install` You can use this command for starting a project. npm install downloads a package and it's dependencies

- `npm run build-dev` to start the webpack dev server on port 8080

- `npm run build-prod` to generate a dist folder for prod

- `npm start` to run the Express server on port 8081

<img width="1269" alt="Captura de Pantalla 2021-04-13 a la(s) 10 35 24 p  m" src="https://user-images.githubusercontent.com/71103179/114617666-b892cf80-9ca8-11eb-88bd-23fd192111ef.png">

