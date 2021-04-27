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
           <label class="col-sm-4 col-form-label"> Divisi <span style="color: red">*</span></label>
           <select v-model="paket.idDivisi">
               <option v-for="item in listDivisi" v-bind:key="item.id" :value="item.id"> {{item.nama}} </option>
           </select>
    
       </div>
       <div class="form-group" style="margin-top: 5%;">
           <label class="col-sm-4 col-form-label"> Posisi<span style="color: red">*</span> </label>
            <select v-model="paket.idPosisi">
               <option v-for="item in listPosisi" v-bind:key="item.id" :value="item.id"> {{item.nama}} </option>
           </select>
    
       </div> 
       <div class="form-group" style="margin-bottom: 5%;"> 
           <label class="col-sm-4 col-form-label"> Jenis Lowongan<span style="color: red">*</span> </label>
           <select v-model="paket.jenisLowongan">
               <option>  </option>
               <option value="1"> Menggantikan </option>
               <option value="2"> Menambah Baru </option>
           </select>
       </div>
        <div class="form-group" style="margin-bottom: 5%;">
           <label class="col-sm-4 col-form-label"> Jumlah Dibutuhkan<span style="color: red">*</span> </label>
            <input type="text" class="form-group" id="jumlahLowongan" required v-model="paket.jumlahLowongan">
    </div>
        <div class="form-group" style="margin-bottom: 5%;">
           <label class="col-sm-4 col-form-label"> Waktu Pengerjaan<span style="color: red">*</span> </label>
           <input type="date" class="form-group" name="Waktu Pengerjaan" required v-model="paket.deadlineTugas">
       </div>
       <div class="form-group" style="margin-bottom: 5%;">
           <label class="col-sm-4 col-form-label"> Kualifikasi<span style="color: red">*</span> </label>
           <input type="text" class="form-group" name="Kualifikasi">
    </div>
    <div class="form-group" style="margin-bottom: 5%;">
    <form action="fileupload" method="post" enctype="multipart/form-data">
           <label class="col-sm-4 col-form-label"> Tugas </label>
           <input type="file" name="filetoupload" class="form-group"/>
           <!-- <input type="text" class="form-group" name="Tugas"> -->
    </form></div>
    <button type="button" class="btn btn-danger float-end" style="margin-right: 52px">Batal</button>
    <button @click="saveLowongan" class="btn btn-success float-end mr-1" data-toggle="modal" data-target="#exampleModal">Simpan</button>
    <!-- </div></div> -->
    </form>
</div></div>
<!-- Modal -->
<div v-if="isSubmitted" class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
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
           paket: {
               id:null,
               status: "pending",
               jumlahLowongan: '',
               kualifikasi : "ada",
               kuota : "",
               lowonganBuka : "TRUE",
               tugas : "ada",
               deadlineTugas : null,
               idDivisi:Number,
               idPosisi: Number,
               jenis_lowongan: Number
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

</style>