module.exports = (sequelize, DataTypes) => {

    const transaksi = sequelize.define("transaksi", {
        id_transaksi: {
           autoIncrement: true,
           type: DataTypes.BIGINT,
           allowNull: false,
           primaryKey: true
         },  
      
         id_user: {
          type: DataTypes.STRING(50),
          allowNull: true
        },

        atas_nama: {
          autoIncrement: false,
          type: DataTypes.STRING(50),
          allowNull: false,
          primaryKey: false
        },

         total_kamar: {
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
          },

          total_pembayaran: {
            autoIncrement: false,
            type: DataTypes.FLOAT,
            allowNull: false,
            primaryKey: false
          },

          metode_pembayaran: {
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
          },

          status:{
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
          }


    }, {

      sequelize,
      tableName: 'transaksi',
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

    return transaksi;
  }; 