module.exports = (sequelize, DataTypes) => {

    const DetailTransaksi = sequelize.define("DetailTransaksi", {
          id_DetailTransaksi: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          },  
  
         id_transaksi: {
            type: DataTypes.STRING(50),
            allowNull: true
          },

          // waktu: {
          //   type: DataTypes.STRING(50),
          //   allowNull: true
          // },

          // activity: {
          //   type: DataTypes.STRING(50),
          //   allowNull: true
          // },

          // detail: {
          //   type: DataTypes.STRING(50),
          //   allowNull: true
          // }
  
          id_kamar: {
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: false,
            primaryKey: false
          },

          check_in: {
            autoIncrement: false,
            type: DataTypes.DATE,
            allowNull: false,
            primaryKey: false
          },

          check_out: {
            autoIncrement: false,
            type: DataTypes.DATE,
            allowNull: false,
            primaryKey: false
          },

         total_harga: {
            autoIncrement: false,
            type: DataTypes.FLOAT,
            allowNull: false,
            primaryKey: false
          },
  
         
  
    }, {
  
      sequelize,
      tableName: 'DetailTransaksi',
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
  
    return DetailTransaksi;
  };