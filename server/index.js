require('ignore-styles')

require('@babel/register')({
    ignore: [/(node_module)/],
    presets: ['@babel/preset-env', '@babel/preset-react']
})

require('./server');



// https://medium.com/free-code-camp/how-to-deploy-a-react-app-with-an-express-server-on-heroku-32244fe5a250

// Used this link for this app its heroku deployment