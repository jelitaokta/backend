const {where} = require ('sequelize');
const db = require('../models');
const transaksi = db.transaksi
const DetailTransaksi = db.DetailTransaksi
const moment = require('moment');

// untuk tambah data
exports.create = async (req, res) => { 
    console.log(req.body)

    const check_in = req.body.check_in;
    const duration = req.body.duration;
    let check_out;

    // menentukan tanggal check_out berdasarkan durasi menginap
    if (duration === "1 hari"){
      check_out = moment(check_in).add(1,'D').calendar();
    }
    else if (duration === "7 Hari"){
      check_out = moment(check_in).add(7,'D').calendar();

    }
    else if (duration === "1 Bulan"){
      check_out = moment(check_in).add(1,'M').calendar();

    }
    else if (duration === "3 Bulan"){
      check_out = moment(check_in).add(3,'M').calendar();

    }
    else if (duration === "6 Bulan"){
      check_out = moment(check_in).add(6,'M').calendar();

    }

     const data_transaksi = { 

        elemenData: req.body.elemenData,  
        //transaksi 
        // id_transaksi: req.body.id_transaksi, 
        id_user: req.body.id_user,    
        atas_nama: req.body.atas_nama,
        total_kamar: req.body.total_kamar,
        total_pembayaran: req.body.total_pembayaran,
        metode_pembayaran: req.body.metode_pembayaran,
        status: req.body.status
    }
    console.log(data_transaksi) 
    
    const id_transaksi = await transaksi.findOne({
      order: [['id_transaksi', 'DESC']]
    })
    console.log("id_transaksi = ", id_transaksi);

      await transaksi.create(data_transaksi) //menyimpan data_peserta ke table peserta    

      const data_DetailTransaksi = {
        id_transaksi: id_transaksi.id_transaksi,
        id_kamar: "1",
        check_in: "13/08/2024",
        check_out: "15/08/2024",
        total_harga: "3500000"
      //   waktu: "14.25",
      //   activity: "Transaksi",
      //   detail: "pemesanan kamar " + req.body.atas_nama + "dengan total pembayaran " + req.body.total_pembayaran + "Berhasil"
      }

      console.log("data_",data_DetailTransaksi)

      await DetailTransaksi.create(data_DetailTransaksi)
      .then(data => {    
        res.send({    
          message: "Data was insert successfully."   
        })   
        })   
      .catch(err => {
        res.status(500).send({    
          message:    
            err.message || "Some error occurred while creating data."   
        });   
      })  
    }
  
  

    // untuk menampilkan semua data
    exports.readAll = async (req, res) => {
        await transaksi.findAll({ where: {id:"1"}})      
        .then(data => {     
          res.send(data);      
        })      
        .catch(err => {      
          res.status(500).send({     
            message:     
              err.message || "Some error occurred while retrieving data."      
          });     
        });     
      }
      
      // untuk menampilkan data dengan id tertentu
    exports.readById = async (req, res) =>{
        const id = req.params.id   
        await transaksi.findOne({where: { id: id}})   
        .then(data => {   
          res.send(data);   
        })   
        .catch(err => {   
          res.status(500).send({   
            message:   
              err.message || "Some error occurred while retrieving data."   
          });   
        });   
    }

    // untuk update data
    exports.update = async (req, res) => {
        const id = req.params.id     
        await transaksi.update(req.body, { where: { id: id}})     
        .then(num => {    
            num == 1 ? res.send({  
              message: "Data was updated successfully."     
            }) : res.send({     
              message: `Cannot update Data with id=${id}. Maybe Data was not found or req.body is empty!`     
            });     
        })     
        .catch(err => {     
          res.status(500).send({    
            message: `Error updating Data with id=${id}`,    
            error: err    
          })    
        })    
      }

      // untuk menghapus data
      exports.delete = async (req, res) => {
        const id = req.params.id     
        await transaksi.destroy({ where: {     
          id: id     
      }})     
      .then(num => {     
        num == 1 ? res.send({     
          message: "Data was deleted successfully."    
        }) : res.send({    
          message: `Cannot delete Data with id=${id}. Maybe Data was not found or req.body is empty!`     
        });     
      })    
        .catch(err => {     
          res.status(500).send({     
            message: `Error deleting Data with id=${id}`,     
            error: err     
          })     
        })    
      }
    
