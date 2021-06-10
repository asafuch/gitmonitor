//connecting to heruko postgres client
const db = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
      host : 'ec2-54-74-60-70.eu-west-1.compute.amazonaws.com',
      port: 5432,
      user : 'aozpbvmgfxnzzb',
      password : 'c92bd68fdc747a18e6c0acda066c86b14a79317a93df6b985aefce4f4c59eba4',
      database : 'dfftp2d3hovffm'
    }
  });


const insertHook = (type,json) => {
    return db('githubmonitor')
    .insert({type:type,data:json})
    .returning('*')
}

const getRequests = (type) => {
    return db('githubmonitor')
    .select('data')
    .where({type:type})
}

module.exports = {
    insertHook,
    getRequests
}