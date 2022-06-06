
import mysql from 'mysql2/promise';
import 'dotenv/config'

const con = await mysql.createConnection({
    user: process.env.MYSQL_USER,
    host: process.env.MYSQL_HOST,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB,
    typeCast: function (field, next) {
        if (field.type === 'tiny' && field.length === 1)
            return (field.string() === 1);
        else
            return next();
    }
})

console.log(`${process.env.MYSQL_db}`);

export { con };
