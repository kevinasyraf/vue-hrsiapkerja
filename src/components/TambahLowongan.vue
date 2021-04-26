<template>
<div class ="container-fluid" style="margin: 88px,350px,350px">
    <div class="container">
        <div class="card mx-auto w-50" style="margin:5%">
            <div class="card-header text-center" style="background-color: #3C77BF">
            <div style="color:#ffff">
            <h3 style="font-family:Nunito">Tambah Lowongan</h3>
        </div></div>
   <div class="submit-form">
    <div v-if="!submitted">
       <div class="form-group" style="margin-top:5%">
           <label class="col-sm-4 col-form-label"> Divisi <span style="color: red">*</span></label>
           <select v-model="paket.id_divisi">
               <option v-for="item in listDivisi" v-bind:key="item.id" :value="item.id"> {{item.nama}} </option>
           </select>
    
       </div>
       <div class="form-group" style="margin-top: 5%;">
           <label class="col-sm-4 col-form-label"> Posisi<span style="color: red">*</span> </label>
           <input type="text" class="form-group" id="posisi" required v-model="paket.posisi" name="posisi"/>

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
            <input type="text" class="form-group" id="jumlahDibutuhkan" required v-model="paket.jumlahDibutuhkan">
    </div>
        <div class="form-group" style="margin-bottom: 5%;">
           <label class="col-sm-4 col-form-label"> Waktu Pengerjaan<span style="color: red">*</span> </label>
           <input type="text" class="form-group" name="Waktu Pengerjaan">
       </div>
       <div class="form-group" style="margin-bottom: 5%;">
           <label class="col-sm-4 col-form-label"> Kualifikasi<span style="color: red">*</span> </label>
           <input type="text" class="form-group" name="Kualifikasi">
    </div>
     <div class="form-group" style="margin-bottom: 5%;">
           <label class="col-sm-4 col-form-label"> Tugas </label>
           <input type="text" class="form-group" name="Tugas">
    </div>
    <button type="button" class="btn btn-danger float-end" style="margin-right: 52px">Batal</button>
    <button @click="saveLowongan" class="btn btn-success float-end mr-1">Simpan</button>
    </div></div>
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
           paket: {
               id:null,
               id_divisi:Number,
               posisi: '',
               jenisLowongan: Number,
               jumlahDibutuhkan: '',
               waktuPengerjaan: null,
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
  },
methods: {
    saveLowongan(){
        

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