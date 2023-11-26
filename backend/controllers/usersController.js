const usersService = require('../services/usersService');

const usersController = {};

usersController.getAllUsers = async function (req, res, next) {
    try {
        await usersService.getAllUsers()
            .then(data => res.status(200).json(data))
            .catch(error => {
                throw new Error(error.message);
            })
    } catch (error) {
        res.status(404).send(error.message);
    }
}

usersController.createUser = async function (req, res, next) {
    try {
        console.log(req.body);
        await usersService.createUser(req.body)
            .then(response => res.status(201).send("Usuário criado com sucesso!"))
            .catch(error => {
                throw new Error(error.message);
            })
    } catch (error) {
        res.status(401).send(error.message);
    }
}

module.exports = usersController;