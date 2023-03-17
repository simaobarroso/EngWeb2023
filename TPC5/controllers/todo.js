var axios = require('axios')

module.exports.usersList = () => {
    return axios.get('http://localhost:3000/users?_sort=name')
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}

module.exports.tasksList = () => {
    return axios.get('http://localhost:3000/tasks?_sort=id&sort_dir=des') // para sortear 
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}

module.exports.addUser = a => {
    return axios.post('http://localhost:3000/users/', a)
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}

module.exports.addTask = a => {
    return axios.post('http://localhost:3000/tasks/', a)
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}