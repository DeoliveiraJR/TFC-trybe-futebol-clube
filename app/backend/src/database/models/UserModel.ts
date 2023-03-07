import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class User extends Model {
  // declare <campo>: <tipo>;
  declare id: number;
  declare username: string;
  declare role: string;
  declare email: string;
  declare password: string;
}

/* User.init({
  // ... Campos

}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  // modelName: 'example',
  timestamps: false,
}); */

User.init({
  id: {
    type: INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: STRING,
    allowNull: false,
  },
  role: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
}, {
  modelName: 'users',
  sequelize: db,
  timestamps: false,
  underscored: true,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// OtherModel.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Example.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default User;