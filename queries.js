const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: '1iso*help',
    port: 5433,
})

// get all the users
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows)
    })
}


//get a user using user id
const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

// create a new user  and return id
const createUser = (request, response) => {
    const { name, email } = request.body;
    pool.query('INSERT INTO users(name,email) values ($1,$2) RETURNING *', [name, email], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`User created with ID: ${results.rows[0].id"}`);
    })
}


// update the user with id 
const updateUser = (request, response) => {
    const id = parseInt(request.params.id);
    const { name, email } = request.body;

    pool.update('UPDATE users name=$1,email=$2 where id=$3', [name, email, id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`USER modified with ID:${id}`);
    });
}


// delete the user with id
const deleteUser = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM users where id=$1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`USER is deleted with ID:${id}`);
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}