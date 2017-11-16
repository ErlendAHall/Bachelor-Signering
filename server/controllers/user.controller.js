import db from '../db';
import mysql from 'mysql';
const connection = db;

function list(req,res) {

    var query = "SELECT * FROM ??";
    const table = ["bruker"];
    query = mysql.format(query,table);
    connection.query(query,(err,rows) => {
        if(err) {
            res.status(500).send("Feil på server.");
           
        } else {
            res.json(rows);
        }
    });
}

function get(req, res) {
    var query = "SELECT * FROM ?? WHERE ??=?";
    const table = ["bruker","fornavn",req.params.user_id];
    query = mysql.format(query,table);
    connection.query(query,(err,rows) => {
        if(err) {
            res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {
            res.json({"Error" : false, "Message" : "Success", "Users" : rows});
        }
    });
}

function update(req,res) {
    // const query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    //     const table = ["bruker","user_password",md5(req.body.password),"user_email",req.body.email];
    //     query = mysql.format(query,table);
    //     connection.query(query,(err,rows) => {
    //         if(err) {
    //             res.json({"Error" : true, "Message" : "Error executing MySQL query"});
    //         } else {
    //             res.json({"Error" : false, "Message" : "Updated the password for email "+req.body.email});
    //         }
    //     });
}

function remove(req,res) {
    var query = "DELETE from ?? WHERE ??=?";
    const table = ["bruker","mail",req.params.userId];
    query = mysql.format(query,table);

    connection.query(query,(err,rows) => {
        if(err) {
            res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {
            res.json({"Error" : false, "Message" : "Deleted the user with email "+req.params.userId});
        }
    });
}

function create(req,res) {
    var query = "INSERT INTO ??(??,??,??) VALUES (?,?,?)";
    const table = ["bruker","mail","fornavn", "etternavn",req.body.mail, req.body.fornavn, req.body.etternavn];
    query = mysql.format(query,table);
    connection.query(query,(err,rows) => {
        if(err) {
            res.json({" " : query});
            res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {
            res.json({"Error" : false, "Message" : "User Added !"});
        }
    });
}

export default {list, get, update, remove, create};