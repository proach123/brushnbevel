require('dotenv').config();
const express = require('express'),
    sessions = require('express-session'),
    massive = require('massive'),
    ctrl = require('./controllers/controller'),
    pg = require('pg'),
    pgSession = require('connect-pg-simple')(sessions),
    gctrl = require('./controllers/gallerycntrl')
    

    const app = express(),
    {SERVER_PORT, CONNECTION_STRING, SECRET_SESSION  } = process.env;
    const pgPool = new pg.Pool({
    connectionString: CONNECTION_STRING
    })
    
    app.use( express.static( `${__dirname}/../build` ) );
    
    app.use(express.json());
    app.use(sessions({
        store: new pgSession({
            pool: pgPool,
            pruneSessionInterval: 24*60*60*24
        }),
        secret: SECRET_SESSION,
        resave:false,
        saveUninitialized: true,
        cookie: {maxAge: 30*24*60*60*100}
    }))

        
massive(CONNECTION_STRING).then(db => {
    app.set('db',db);
    console.log('The gallery is open, welcome')
    app.listen(SERVER_PORT, ()=> console.log(`Welcome sir to the gallery of arts on port ${SERVER_PORT}`))
})

//Session stuff
app.post('/auth/register', ctrl.register);
app.post('/auth/login', ctrl.login);
app.post('/auth/logout',ctrl.destroySession);


app.get('/api/current', ctrl.getUser)
// app.get('./api/isadmin', ctrl.acess)
//gallery displaying
app.post('/api/gallery', gctrl.createArt)
app.get('/api/gallery', gctrl.showArtistArt)
app.delete('/api/gallery/:id', gctrl.deleteArt)
app.put('/api/gallery/:id', gctrl.updateArtwork)
app.get('/api/gallery/:id' , gctrl.getArt)

app.get('/api/galleryapproved', gctrl.getGalleryArt)
app.get('/api/gall', gctrl.getApprovedArt)
app.put('/api/gall/:id', gctrl.approveArt)


//Stripe payment

app.post('/api/payment', ctrl.handlePayment)