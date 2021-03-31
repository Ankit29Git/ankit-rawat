require('ignore-styles')

require('@babel/register')({
    ignore: [/(node_module)/],
    presets: ['@babel/preset-env', '@babel/preset-react']
})

require('./server');

//  https://medium.com/free-code-camp/how-to-deploy-a-react-app-with-an-express-server-on-heroku-32244fe5a250
//  Used this link for this app and its heroku deployment

//  https://stackoverflow.com/questions/13011881/node-js-simple-app-not-working-on-heroku/13013189
//  faced an issue as npm start was only starting server and not client(thus missing the build folder)

//  know about build scripts being used by create-react-app
//  https://www.freecodecamp.org/news/create-react-app-npm-scripts-explained/

//  did not use this, but if you need to create an app from scratch(i.e. no CRA), this can be used
//  https://dev.to/achhapolia10/adding-style-to-server-side-rendering-and-automating-the-build-process-59l