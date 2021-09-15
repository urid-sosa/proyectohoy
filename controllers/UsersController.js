const {User} = require('../models');

exports.add = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.json({
            mensaje: 'Se ha registrado el usuario',
            user,
        });
    } catch (error) {
        let errores = [];
        if (error.errors){
            errores = error.errors.map((errorItem) => ({
                campo: errorItem.path,
                error: errorItem.message,
            }));
        }
        res.status(503).json({
            error: true,
            mensaje: 'Error al registrar el usuario',
            errores,
        });
    };
}

exports.list = async (req, res, next) => {
    try {
        const users = await User.findAll({});
        res.json(users);
    } catch (error) {
        res.status(503).json({mensaje: 'Error al leer los usuarios'});
    }
};

exports.show = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id);
        if(!user) {
            res.status(404).json({mensaje: 'No se encontro el usuario'});
        }else{
            res.json(user);
        }
    } catch (error) {
        res.status(503).json({mensaje: 'Eror al leer el usuario'});
    }
};

exports.update = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id);
        if(!user){
            res.status(404).json({mensaje: 'No se encontró el usuario'})
        }else
        Object.keys(req.body).forEach((propiedad) => {
            user[propiedad] = req.body[propiedad];
        });
        await user.save();
        res.json({mensaje: 'El usuario fue actualizado'});
        
    } catch (error) {
        let errores = []
        if (error.errors){
            errores = error.errors.map( errorItem => ({
                campo: errorItem.path,
                error: errorItem.message,
            }));
        }

        res.status(503).json({
            error: true,
            mensaje: 'Error al registrar el usuario',
            errores,
        });
    }
};

exports.delete = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id);
        if(!user){
            res.status(404).json({mensaje: 'No se encontró el usuario'});
        }else{
            await user.destroy();
            res.json({mensaje: 'El usuario fue eliminado'});
        }
    } catch (error) {
        res.status(503).json({mensaje: 'Error al eliminar el usuario'});
    }
};