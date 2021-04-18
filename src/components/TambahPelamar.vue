<template>
<div class ="container-fluid" style="margin: 5%,5%,5%">
    <div class="container">
        <div class="card-header bg-info text-center">
            <h3>Tambah Pelamar</h3>
        </div>
    <form> 
       <div class="form-group">
           <label class="col-sm-2 col-form-label"> Nama* </label>
           <input placeholder="Nama">
       </div>
        <div class="form-group">
           <label class="col-sm-2 col-form-label"> Email* </label>
           <input placeholder="Email">
       </div> 
       <div class="form-group">
           <label class="col-sm-2 col-form-label"> Nomor Telepon* </label>
           <input placeholder="Nomor Telepon">
       </div> 
       <div class="form-group">
           <label class="col-sm-2 col-form-label"> Kesesuaian* </label>
           <select>
               <option> Rekomendasi </option>
               <option> Dipertimbangkan </option>
               <option> Tidak Rekomendasi </option>
           </select>
       </div>
        <div class="form-group">
           <label class="col-sm-2 col-form-label"> CV* </label>
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
   name: 'tambah-pelamar',
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