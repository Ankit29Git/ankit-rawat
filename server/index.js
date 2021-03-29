require('ignore-styles')

require('@babel/register')({
    ignore: [/(node_module)/],
    presets: ['@babel/preset-env', '@babel/preset-react']
})

require('./server');



//  https://medium.com/free-code-camp/how-to-deploy-a-react-app-with-an-express-server-on-heroku-32244fe5a250
//  Used this link for this app its heroku deployment

//  https://stackoverflow.com/questions/13011881/node-js-simple-app-not-working-on-heroku/13013189
// faced an issue as npm start was only starting server and not client(thus missing the build folder)