const { Pool } = require('pg');

const pool = new Pool({
    user:'postgres',
    password: '123',
    database: 'api',
    host: 'localhost'
});
const getUsers = async (req, res)  => {
   const query = await  pool.query('select * from users');
   console.log(query.rows);
   res.status(200).json(query.rows);
   pool.end();

};

const getUsersById = async (req, res) => {
    const id = req.params.id;
   const  response =  await pool.query('SELECT * FROM users Where id = $1', [id])
   res.json(response.rows);
   console.log(response.rows)
};
const createUsers = async (req, res) => {
    const {name, email} =  req.body;
    const response = await pool.query('INSERT INTO users(name, email) VALUES ($1, $2)', [name, email])
    console.log(response);
    res.json({
        messsage: 'agregado satisfactoriamente',
        body: {
            user : {name, email}
        }
    });

}

const deleteUsers = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('DELETE FROM users WHERE id=$1', [id])
    res.json(` el usuario con el  ID: ${id} ha sido Eliminado satisfactorimante`);
    console.log(response);
}

const updateUsers = async (req, res) => {
    const id = req.params.id;
    const {name, email } = req.body;
   const response =  await pool.query('UPDATE users SET name=$1, email=$2 WHERE id=$3 ', [name, email, id])
    res.json(`El usario del id ${id} ha sido actualizado`);
    console.log(response.command);

}


module.exports = {
    getUsers,
    createUsers,
    getUsersById,
    deleteUsers,
    updateUsers
};