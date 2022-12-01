let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mysql = require('mysql');

let PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// home page route
app.get('/', (req, res) => {
    return res.send({
        error: false,
        message: "Welcome to My API",
        written_by: "Sirasak",
        published_on: "https://www.sirasak-saengaurai.com"
    })
})

// connect to db server
// let dbCon = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'db_api'
// })
// dbCon.connect();

// // retrieve data from usertable
// app.get('/users', (req, res) => {
//     dbCon.query('SELECT * FROM users', (error, results, fields) => {
//         if (error) throw error;

//         let message = ""
//         if (results === undefined || results.length == 0) {
//             message = "User table is empty";
//         } else {
//             message = "Seccessfully retrieved all users";
//         }
//         return res.send({error: false, data: results, message: message})
//     })
// })

// // add new users
// app.post('/user', (req, res) => {
//     let first_name = req.body.first_name;
//     let last_name = req.body.last_name;

//     // validation
//     if (!first_name || !last_name) {
//         return res.status(400).send({ error: true, message: "Please provide users first_name and last_name."});
//     } else {
//         dbCon.query('INSERT INTO users (first_name, last_name) VALUES(?, ?)', [first_name, last_name], (error, results, fields) => {
//             if (error) throw error;
//             return res.send({ error: false, data: results, message: "Users successfully added"})
//         })
//     }
// });

// // retrieve user by id
// app.get('/user/:id', (req, res) => {
//     let id = req.params.id;

//     if (!id) {
//         return res.status(400).send({ error: true, message: "Please provide user id"});
//     } else{
//         dbCon.query('SELECT * FROM users WHERE id = ?', id, (error, results, fields) => {
//             if (error) throw error;

//             let message ="";
//             if (results === undefined || results.length == 0) {
//                 message = "User not found";
//             } else {
//                 message = "Successfully retrieved user data";
//             }

//             return res.send({ error: false, data: results[0], message: message})
//         })
//     }
// })

// //update user with id
// app.put('/user', (req, res) => {
//     let id = req.body.id;
//     let first_name = req.body.first_name;
//     let last_name = req.body.last_name;

//     // validation
//     if (!id || !first_name || !last_name) {
//         return res.status(400).send({ error: true, message: 'Please provide User id, first_name and last_name'});
//     } else {
//         dbCon.query('UPDATE users SET first_name = ?, last_name = ? WHERE id = ?', [first_name, last_name, id], (error, results, fields) => {
//             if (error) throw error;

//             let message = "";
//             if (results.changedRows === 0) {
//                 message = "User not found or data are same";
//             } else {
//                 message = "User successfully updated";
//             }

//             return res.send({ error: false, data: results, message: message })
//         })
//     }
// })

// // delete user by id
// app.delete('/user', (req, res) => {
//     let id = req.body.id;

//     if (!id) {
//         return res.status(400).send({ error: true, message: "Please provide user id"});
//     } else {
//         dbCon.query('DELETE FROM users WHERE id = ?', [id], (error, results, fields) => {
//             if (error) throw error;

//             let message = "";
//             if (results.affectedRows === 0) {
//                 message = "user not found";
//             } else {
//                 message = "user successfully deleted";
//             }

//             return res.send({ error: false, data: results, message: message })
//         })
//     }
// })


app.listen(PORT, () => {
    console.log('listening on port 5000');
})

module.exports = app;