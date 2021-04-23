<template>
<div class ="container-fluid" style="margin: 88px,350px,350px">
    <div class="container">
        <div class="card mx-auto w-50" style="margin:5%">
            <div class="card-header bg-info text-center">
            <h3 style="font-family:Nunito">Tambah Pelamar</h3>
        </div>
    <form> 
          <div class="form-group" style="margin-top:5%">
           <label class="col-sm-4 col-form-label">Nama<span style="color: red">*</span> </label>
           <input type="text" class="form-group" name="Nama"/>
       </div>
           <div class="form-group" style="margin-top:5%">
           <label class="col-sm-4 col-form-label">Email<span style="color: red">*</span> </label>
           <input type="text" class="form-group" name="Email"/>
       </div> 
          <div class="form-group" style="margin-top:5%">
           <label class="col-sm-4 col-form-label">Nomor Telepon<span style="color: red">*</span> </label>
           <input type="text" class="form-group" name="Nomor Telepon"/>
       </div> 
          <div class="form-group" style="margin-top:5%">
           <label class="col-sm-4 col-form-label">Kesesuaian<span style="color: red">*</span> </label>
           <select>
               <option> </option>
               <option> Rekomendasi </option>
               <option> Dipertimbangkan </option>
               <option> Tidak Rekomendasi </option>
           </select>
       </div>
        <div class="form-group" style="margin-top:5%">
           <label class="col-sm-4 col-form-label"> CV<span style="color: red">*</span> </label>
            <input type="text" class="form-group" name="CV"/>
    </div>
    <button type="button" class="btn btn-danger float-end" style="margin-right: 52px">Kembali</button>
    <button type="button submit" class="btn btn-success float-end mr-1">Simpan</button>
    </form>
        </div>
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
label {
    font-family: Nunito!important;
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