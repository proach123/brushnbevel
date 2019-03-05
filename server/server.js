require('dotenv').config();
const express = require('express'),
    sessions = require('express-session'),
    massive = require('massive'),
    ctrl = require('./controllers/controller')
    
    const app = express(),
            {SERVER_PORT, CONNECTION_STRING, SECRET_SESSION  } = process.env;
app.use(express.json());
app.use(sessions({
    secret: SECRET_SESSION,
    resave:false,
    saveUninitialized: true,
    cookie: {maxAge: 1000000000000}
}))
massive(CONNECTION_STRING).then(db => {
    app.set('db',db);
    console.log('The gallery is open, welcome')
    app.listen(SERVER_PORT, ()=> console.log(`Welcome sir to the gallery of arts on port ${SERVER_PORT}`))
})


app.post('/auth/register', ctrl.register);
app.post('/auth/login', ctrl.login);
app.post('/auth/logout',ctrl.destroySession);



app.get('/api/current', ctrl.getUser)