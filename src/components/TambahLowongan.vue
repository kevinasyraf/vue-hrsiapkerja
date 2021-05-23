<template>
<div class ="container-fluid" style="margin: 88px,350px,350px">
    <div class="container">
        <div class="card mx-auto w-50" style="margin:5%">
            <div class="card-header text-center" style="background-color: #3C77BF">
            <div style="color:#ffff">
            <h3 style="font-family:Nunito">Tambah Lowongan</h3>
        </div></div>
   <!-- <div class="submit-form">
    <div v-if="!submitted"> -->
    <form>
       <div class="form-group" style="margin-top:5%">
           <label class="col-sm-4 col-form-label"> Divisi <span class="text-danger">*</span></label>
           <select required v-model="paket.idDivisi">
               <option v-for="item in listDivisi" v-bind:key="item.id" :value="item.id"> {{item.nama}} </option>
           </select>
    
       </div>
       <div class="form-group" style="margin-top: 5%;">
           <label class="col-sm-4 col-form-label"> Posisi<span class="text-danger">*</span> </label>
            <select required v-model="paket.idPosisi">
               <option v-for="item in listPosisi" v-bind:key="item.id" :value="item.id"> {{item.nama}} </option>
           </select>
    
       </div> 
       <div class="form-group" style="margin-bottom: 5%;"> 
           <label class="col-sm-4 col-form-label"> Jenis Lowongan<span class="text-danger">*</span> </label>
           <select required v-model="paket.jenisLowongan">
               <option>  </option>
               <option value="1"> Menggantikan </option>
               <option value="2"> Menambah Baru </option>
           </select>
       </div>
        <div class="form-group" style="margin-bottom: 5%;">
           <label class="col-sm-4 col-form-label"> Jumlah Dibutuhkan<span class="text-danger">*</span> </label>
            <input type="number" min="0" class="form-group" id="jumlahLowongan" required v-model="paket.jumlahLowongan">
    </div>
        <div class="form-group" style="margin-bottom: 5%;">
           <label class="col-sm-4 col-form-label"> Waktu Pengerjaan<span class="text-danger">*</span> </label>
           <input type="date" class="form-group" name="Waktu Pengerjaan" required v-model="paket.deadlineTugas">
       </div>
       <div class="form-group" style="margin-bottom: 5%;">
         <form action="fileupload" method="post" enctype="multipart/form-data">
           <label class="col-sm-4 col-form-label"> Kualifikasi<span class="text-danger">*</span> </label>
           <!-- <input type="text" class="form-group" name="Kualifikasi"> -->
            <input type="file" name="filetoupload" class="form-group"/>
   </form></div>
    <div class="form-group" style="margin-bottom: 5%;">
    <form action="fileupload" method="post" enctype="multipart/form-data">
           <label class="col-sm-4 col-form-label"> Tugas </label>
           <input type="file" name="filetoupload" class="form-group"/>
           <!-- <input type="text" class="form-group" name="Tugas"> -->
    </form></div>
    <!-- <button type="button" class="btn btn-danger float-end" style="margin-right: 52px"  href="/lowongan">Batal</button> -->
    <a class="btn btn-danger float-end" style="margin-right: 52px"  href="/lowongan" role="button">Batal</a>
    <!-- <button @click="saveLowongan" class="btn btn-success float-end mr-1" data-toggle="modal" data-target="#exampleModal">Simpan</button> -->
    <a class="btn btn-success float-end" style="margin-right: 10px" role="button" data-toggle="modal" data-target="#exampleModalCenter">Simpan</a>

                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                          <div class="modal-header text-center" v-bind:style="{ backgroundColor: color}">
                            <h5 class="modal-title w-100 text-center" id="exampleModalLongTitle" style="font-size:30px">Confirmation Page</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">

                           <p> Apakah Anda yakin akan menambahkan data lowongan baru tersebut? </p>
                          </div>
                          <div class="modal-footer">
                            <a role="button" class="btn btn-success" @click="saveLowongan" href="/lowongan">Ya</a>
                            <a role="button" class="btn btn-secondary btn-danger" data-dismiss="modal">Tidak</a>
                          </div>
                        </div>
                      </div>
                    </div>
    <!-- </div></div> -->

    </form>
</div></div>
</div>

</template>
<script>
import axios from "axios";

export default {
   name: 'tambah-lowongan',
   data (){
       return{
           listDivisi:[],
           listPosisi:[],
           isSubmitted :false,
           color : '#3C77BF',
           paket: {
               id:null,
               status: "pending",
               jumlahLowongan: '',
               kualifikasi : "ada",
               lowonganBuka : "TRUE",
               tugas : "ada",
               deadlineTugas : null,
               idDivisi:Number,
               idPosisi: Number,
               idUsers: 1,
               jenisLowongan: Number
           }
       }
   },
   mounted() {
    axios
      .get("http://localhost:4000/api/divisi/") //ganti APInya 
      .then((resp) => {
        console.warn(resp.data);
        this.listDivisi =resp.data;
      });
      axios
      .get("http://localhost:4000/api/posisi/") //ganti APInya 
      .then((resp) => {
        console.warn(resp.data);
        this.listPosisi =resp.data;
      });
  },
methods: {
    saveLowongan(e){
        axios 
        .post("http://localhost:4000/api/lowongan",this.paket) 
        .then((resp) => {
            console.warn(resp.data);
            // alert(resp.data)
            e.preventDefault();
            this.isSubmitted= true;
        }
        )


    }
}  
}

//post method atau get
</script>
<style>
label {
    font-size: 20px;
    margin-left: 52px;
}

select {
 display: inline-block;
 width: 50%;
}
input {
 display: inline-block;
 width: 50%;
}
button {
  font-size: 18px;
  padding: 4px 20px !important ;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 32px 4px;
  }
  .btn {
     padding: 4px 20px !important ;
     text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 32px 4px;
}
html, body {
    font-family: 'Nunito', sans-serif;
}
.card-header {
    color: #fff;
    font-weight: 500;
}
.modal-title{
    color: #fff;
    font-weight: 500;
    font-size : 20px;
}
input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
</style>