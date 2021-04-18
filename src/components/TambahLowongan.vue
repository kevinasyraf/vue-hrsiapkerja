<template>
<div class ="container-fluid" style="margin: 88px,350px,350px">
    <div class="container">
        <div class="card-header bg-info text-center">
            <h3>Tambah Lowongan</h3>
        </div>
    <form> 
       <div class="form-group">
           <label class="col-sm-2 col-form-label"> Divisi* </label>
           <select>
               <option> Option 1 </option>
               <option> Option 2 </option>
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
export default {
   name: 'tambah-lowongan'
}
//post method atau get
</script>

<style>

</style>