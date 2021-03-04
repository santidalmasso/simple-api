import mysql, { Connection } from 'mysql';

import config from '../config/config';

const dbConf: mysql.ConnectionConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
    port: +config.mysql.port
};

let connection: Connection;

function handleConnection() {
    connection = mysql.createConnection(dbConf);

    console.log(dbConf)

    connection.connect((err) => {
        if (err) {
            console.error('[db err]', err);
            setTimeout(handleConnection, 2000);
        } else {
            console.log('DB Connected!');
        }
    });

    connection.on('error', err => {
        console.error('[db err]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleConnection();
        } else {
            throw err;
        }
    })
}

handleConnection();

function list(table) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    })
}

function get(table, id: number) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE id=${id}`, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    })
}
function insert(table, data) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

function update(table, data) {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE ${table} SET ? WHERE id=?`, [data, data.id], (err, result) => {
            if (err) return reject(err);
            console.log(result)
            resolve(result);
        })
    })
}


function upsert(table, data) {
    if (data && data.id) {
        return update(table, data);
    } else {
        return insert(table, data);
    }
}


export default {
    list,
    get,
    upsert
};