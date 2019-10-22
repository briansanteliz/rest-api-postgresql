const { Router } = require('express');

const router = Router();


const { getUsers, createUsers, getUsersById, deleteUsers, updateUsers } = require('../controllers/index.controller')

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUsers);
router.delete('/users/:id', deleteUsers)
router.put('/users/:id', updateUsers);

module.exports = router;