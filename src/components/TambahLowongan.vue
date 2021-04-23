<template>
<div class ="container-fluid" style="margin: 120px,350px,350px">
    <div class="container">
        <div class="card mt-3 mx-auto w-50">
            <div class="card-header bg-info text-center">
                <h3>Tambah Lowongan</h3>
            </div>
<div class="card-body">
    <form> 
       <div class="form-group">
           <label class="col-sm-2 col-form-label"> Divisi* </label>
           <select v-model="paket.idDivisi">
               <option v-for="item in listDivisi" v-bind:key="item.id" :value="item.id"> {{item.login}} </option>
           </select>

       </div>
       <div class="form-group">
           <label class="col-sm-2 col-form-label"> Posisi* </label>
           <input placeholder="Posisi">
       </div> 
       <div class="form-group">
           <label class="col-sm-2 col-form-label"> Jenis Lowongan* </label>
           <select>
               <option> Menggantikan </option>
               <option> Menambah Baru </option>
           </select>
       </div>
        <div class="form-group">
           <label class="col-sm-2 col-form-label"> Jumlah Dibutuhkan* </label>
            <input placeholder=" 0x Orang">
    </div>
        <div class="form-group">
           <label class="col-sm-2 col-form-label"> Waktu Pengerjaan* </label>
           <!-- <div class="col-sm-10"> -->
           <input placeholder=" 0x Hari">
           <!-- </div> -->
       </div>
       <div class="form-group">
           <label class="col-sm-2 col-form-label"> Kualifikasi* </label>
    </div>
     <div class="form-group">
           <label class="col-sm-2 col-form-label"> Tugas </label>
    </div>
    <button type="button" class="btn btn-danger btn-md float-end">Batal</button>
    <button type="button" class="btn btn-success btn-md  float-end mr-1">Simpan</button>
    </form></div></div></div>
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
               idDivisi:Number,
               posisi: String,
               jenisLowongan: String,
               jumlahDibutuhkan: Number,
               waktuPengerjaan: Number,
           }
       }
   },
   mounted() {
    axios
      .get("https://api.github.com/users") //ganti APInya 
      .then((resp) => {
        console.warn(resp.data);
        this.listDivisi =resp.data;
      });
  },
}
//post method atau get
</script>
button{
    
}
<style>

</style>