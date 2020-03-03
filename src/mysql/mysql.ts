

import mysql = require('mysql');



export default class MySQL {

    private static _instance: MySQL;

    cnn: mysql.Connection;
    conectado: boolean = false;

    constructor() {

        console.log('Clase Inicializada');

        this.cnn = mysql.createConnection({
            host     : '200.40.79.219',
            user     : 'p251801_demo',
            password : 'Scanntech95',
            database : 'p251801_demo'
          });

          this.conectarDB();

    }

    conectarDB() {

        this.cnn.connect( ( err: mysql.MysqlError ) => {

            if ( err ) {
                console.log( err.message );
                return;
            }

            this.conectado = true;
            console.log('Base de datos online!');

        })

    }


}