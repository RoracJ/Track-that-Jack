const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Track that Jack',
    password: 'hoorpaar',
    port: 3001,
});

client.connect();

module.exports = client;
