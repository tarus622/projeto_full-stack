const db = require('../database/models');
const Usuario = db.Usuario;

const usersService = {};

usersService.getAllUsers = async function () {
    try {
        return await Usuario.findAll()
            .then(response => response)
            .catch(error => {
                throw new Error(error.message)
            })
    } catch (error) {
        throw error;
    }
}

usersService.createUser = async function (data) {
    await Usuario.create(data)
        .then(response => response)
        .catch(error => {
            throw new Error(error.message);
        })
}

module.exports = usersService;