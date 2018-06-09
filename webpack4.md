mkdir src config dist
echo "node_modules" > .gitignore
touch src/index.js /*crear*/
mv dist/index.html src/ /*mover*/
curl -o sato.png https://vignette.wikia.nocookie.net/villains/images/6/64/Sato.png /*Descargar imagen*/

 
webpack --help
/*Run webpack without a config file*/
webpack --mode=development
webpack --mode=production

--Webpack need 3 parameters: entry, mode and output
webpack --config=config\webpack.dev.js

/*USE WEBPACK DEV SERVER*/
npm i -S webpack webpack-cli webpack-dev-server
webpack-dev-server --config=config\webpack.dev.js

/*LOADERS*/
Webpack only know javascript he need a loader to understand CSS (he run first 'css-loader' and after run 'style-loader')
npm i style-loader css-loader

     rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }]
    }]

/*style-loader is responsable to inject CSS into html*/
overlay: true shows the error in the console and the windows

/*HTML loader*/
npm i html-loader extract-loader file-loader

-- html-loader does the linting passed it to extract-loader to said to webpack to create a new file and passed it to file-loader that tell to webpack the file name


/*TRANSPILER*/
Help to use ES6 functionabilities in the browser
npm i babel-core
npm i -g babel-core babel-cli
touch .babelrc
npm i babel-plugin-transform-es2015-arrow-functions babel-cli
npm install babel-loader
/*Test babel src/main.js*/
npm i babel-plugin-async-to-promises
npm i babel-polyfill

/*Presets is use to include all the features for a particular way working*/
npm i babel-preset-env
npm i babel-plugin-transform-runtime
