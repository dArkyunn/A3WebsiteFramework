const next = require('next')
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = app.getRequestHandler()
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'a3website'
})

con.connect()

app.prepare()
    .then(() => {
        const server = express()
        server.use(bodyParser.json())

        server.get('/api/submitForm/:text', (req, res, next) => {
            con.query(
                'INSERT INTO submissions (text) VALUES ("' +
                    req.params.text +
                    '")',
                (err, res, fields) => {
                    if (err) throw err
                }
            )
            next()
        }, (req, res, next) => {
            res.redirect('/docs-and-forms/formSubmitted')
        })

        server.get('*', (req, res) => {
            return handler(req, res)
        })

        server.listen(80, err => {
            if (err) throw err
            console.log('> Ready on http://localhost:80')
        })
    })
    .catch(ex => {
        console.log(ex.stack)
        process.exit(1)
    })

