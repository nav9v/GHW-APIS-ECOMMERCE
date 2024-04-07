import { get } from "http";
import { Client } from "../models/client";
class ClientController implements Client {
    constructor(
        public id: number;
        public name: string;
        public email: string;
        public phone: string;
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    //DB MODULE
    // const db : Database = mysql.createConnection({'host': 'localhost ', 'user':  'root', 'password ': 'password'});
        //db.connect();
        //db.query('SELECT * FROM clients', (err, results, fields) => {
        //    if (err) {
        //        throw err;
        //    }
        //    console.log(results); 
        //});

    getClients() {
        // i want to fetch all clients from the database
        //db.query('SELECT * FROM clients WHERE id = ?', [this.id], (err, results, fields) => { return something });
        return this;

    }

}
