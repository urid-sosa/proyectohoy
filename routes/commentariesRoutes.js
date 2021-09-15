const commentariesController = require('../controllers/CommentariesController');

module.exports = (router) => {
    router.post('/commentaries', commentariesController.add)
    router.get('/commentaries', commentariesController.list);
    router.get('/commentaries/:id', commentariesController.show);
    router.delete('/commentaries/:id', commentariesController.delete);

    return router;
}