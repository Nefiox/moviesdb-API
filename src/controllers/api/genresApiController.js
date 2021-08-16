const db = require('../../database/models');
const sequelize = db.sequelize;


const genresApiController = {
    'list': (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                return res.json({
                    meta: {
                        status: 200,
                        total: genres.length,
                        url: req.originalUrl
                    },
                    data: genres
                });
            });
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                return res.json({
                    status: 200,
                    data: genre
                })
            });
    }

}

module.exports = genresApiController;