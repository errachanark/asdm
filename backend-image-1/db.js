const mysql=require('mysql2')

const pool=mysql.createPool({
    host:'192.168.0.111 ',
    user:'root',
    password:'manager',
    database:'pactice',
    port:9000,
    connectionLimit:20
})
module.exports= pool
