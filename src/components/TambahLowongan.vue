<template>
<div class ="container-fluid" style="margin: 5%,5%,5%">
    <div class="container">
        <div class="card-header bg-info text-center">
            <h3>Tambah Lowongan</h3>
        </div>
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
    <button type="button" class="btn btn-success btn-md">Simpan</button>
    <button type="button" class="btn btn-danger btn-md"> Batal </button>
    </form>
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

<style>

</style>