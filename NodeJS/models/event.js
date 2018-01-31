module.exports = function (sequelize, DataTypes) {
  return sequelize.define('event', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    location_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location_lat: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    location_lng: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    openings: {
      type: DataTypes.INTEGER
    },
    owner: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
}
