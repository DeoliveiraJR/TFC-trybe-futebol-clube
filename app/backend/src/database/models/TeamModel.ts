import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class Team extends Model {
  // declare <campo>: <tipo>;
  declare id: number;
  declare teamName: string;
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

Team.init({
  id: {
    type: INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  teamName: {
    type: STRING,
    allowNull: false,
  },
}, {
  modelName: 'teams',
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

export default Team;