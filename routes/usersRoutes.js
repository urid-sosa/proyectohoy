const UsersController  = require ('../controllers/UsersController');

module.exports = (router) => {

    router.post('/users', UsersController.add);
    router.get('/users', UsersController.list);
    router.get('/users/:id', UsersController.show);
    router.put('/users/:id', UsersController.update);
    router.delete('/users/:id', UsersController.delete);
    
    return router;
}