const express = require('express');
const router = express.Router();
const moviesApiController = require('../../controllers/api/moviesApiController');

router.get('/movies', moviesApiController.list);
// router.get('/movies/new', moviesApiController.new);
// router.get('/movies/recommended', moviesApiController.recomended);
// router.get('/movies/detail/:id', moviesApiController.detail);
// //Rutas exigidas para la creación del CRUD
// router.get('/movies/add', moviesApiController.add);
router.post('/movies/create', moviesApiController.create);
// router.get('/movies/edit/:id', moviesApiController.edit);
// router.put('/movies/update/:id', moviesApiController.update);
// router.get('/movies/delete/:id', moviesApiController.delete);
router.delete('/movies/delete/:id', moviesApiController.destroy);

module.exports = router;