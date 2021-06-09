const db = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : '123456',
      database : 'postgres'
    }
  });

const insertHook = (type,json) => {
    return db('githubmonitor')
    .insert({type:type,data:json})
    .returning('*')
}

module.exports = {
    insertHook,
}