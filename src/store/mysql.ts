import mysql from 'mysql';

import config from '../config/config';

const dbConf: mysql.ConnectionConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
    port: +config.mysql.port
};

let connection;
function handleCon() {
    connection = mysql.createConnection(dbConf);

    console.log(dbConf)

    connection.connect((err) => {
        if (err) {
            console.error('[db err]', err);
            setTimeout(handleCon, 2000);
        } else {
            console.log('DB Connected!');
        }
    });

    connection.on('error', err => {
        console.error('[db err]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleCon();
        } else {
            throw err;
        }
    })
}

handleCon();

export default {};