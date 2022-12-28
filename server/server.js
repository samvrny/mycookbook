const express = require('express');
const path = require('path');
const allRoutes = require('./controllers');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const db = require('./config/connection');

//set up a session
const sess = {
    secret: 'Chicken Wing Chicken Dinner',
    cookie: {
        expires: 5*60*1000
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost:27017/mycookbook'
    })
}

//import the database and set up the port
const PORT = process.env.PORT || 3001;

//set up express
const app = express();
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(allRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

//open the database and start the server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`🍐🍐🍐 Now listening to MyCookbooks server on PORT ${PORT}! 🍉🍉🍉`);
    })
});