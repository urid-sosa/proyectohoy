'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commentary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Commentary.init({
    nombre: {
      type:  DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: {
          args: true,
          msg: 'El nombre no puede quedar vacío'
        }
      }
    },
    apellidos: {
      type:  DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: {
          args: true,
          msg: 'Los apellidos no pueden quedar vacios'
        }
      }
    },
    email: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'El email no puede quedar vacío',
        },
        notEmpty: {
          args: true,
          msg: 'El email no puede quedar vacío',
        },
        isEmail: {
          args: true,
          msg: 'No es un email válido',
        }
      }
    },
    comentario:{
      type:  DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: {
          args: true,
          msg: 'La descripción no puede quedar vacía'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Commentary',
  });
  return Commentary;
};