module.exports = (sequelize, DataTypes) => {

    const kamar = sequelize.define("kamar", {
          id_kamar: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          },  

         id_jenis_kamar: {
            type: DataTypes.STRING(50),
            allowNull: true
          },

          jenis_kamar: {
            type: DataTypes.STRING(50),
            allowNull: true
          },

          no_kamar: {
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: false,
            primaryKey: false
          },

          harga: {
            autoIncrement: false,
            type: DataTypes.FLOAT,
            allowNull: false,
            primaryKey: false
          },

          ketersediaan: {
            autoIncrement: false,
            type: DataTypes.BOOLEAN,
            allowNull: false,
            primaryKey: false
          },

    }, {

      sequelize,
      tableName: 'kamar',
      timestamps: true,
      indexes: [

        {

          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id" },
          ]
        },
      ]
    });

    return kamar;
  }; 