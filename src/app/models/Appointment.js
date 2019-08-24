import Sequelize, { Model } from 'sequelize';

class Apointment extends Model {
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.user, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.user, { foreignKey: 'provider_id', as: 'provider' });
  }
}

export default Apointment;
