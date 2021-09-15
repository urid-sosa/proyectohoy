'use strict';
const bcrypt = require('bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    nombre: { 
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Nombre no puede quedar vacío'
        }
      }
    },
    apellidos: { 
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Apellidos no puede quedar vacío'
        }
      }
    },
    direccion: { 
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'La direccion no puede quedar vacia'
        }
      }
    },
    telefono: { 
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'El telefono no puede quedar vacio'
        }
      }
    },
    nombreLibro: { 
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'El nombre del libro no puede quedar vacio'
        }
      }
    },
    fechaPrestamo: { 
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'La fecha de prestamo no puede quedar vacia'
        }
      }
    },
    fechaDevolucion: { 
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'La fecha de devolucion no puede quedar vacia'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  User.prototype.isValidPassword = function(password){
    return bcrypt.compareSync(password, this.password);
  }
  return User;
};