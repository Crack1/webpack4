mkdir src config dist
echo "node_modules" > .gitignore
touch src/index.js

 
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
