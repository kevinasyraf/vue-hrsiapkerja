<template>
<div class ="container-fluid" style="margin: 88px,350px,500px">
    <div class="container">
        <div class="card mx-auto w-50" style="margin:5%">
            <div class="card-header text-center" style="background-color: #3C77BF">
            <div style="color:#ffff">
            <h3>Tambah Pelamar</h3>
        </div></div>
<form>
       <div class="form-group" style="margin-top:5%">
        <label class="col-sm-4 col-form-label">Nama<span style="color: red">*</span> </label>
            <input type="text" class="form-group" id="nama" required v-model="paket.nama">
       </div>

        <div class="form-group" style="margin-bottom:5%">
        <label class="col-sm-4 col-form-label">Email<span style="color: red">*</span> </label>
            <input type="text" class="form-group" id="email" required v-model="paket.email">
       </div>

        <div class="form-group" style="margin-bottom:5%">
        <label class="col-sm-4 col-form-label">Nomor Telepon<span style="color: red">*</span> </label>
            <input type="text" class="form-group" id="nomorTelepon" required v-model="paket.nomorTelepon">
       </div>

       <div class="form-group" style="margin-bottom: 5%;">
           <label class="col-sm-4 col-form-label">Kesesuaian<span style="color: red">*</span> </label>
            <select v-model="paket.idKesesuaian">
               <option v-for="item in listKesesuaian" v-bind:key="item.id" :value="item.id"> {{item.id + item.nama}} </option>
           </select>
       </div> 

    <div class="form-group" style="margin-bottom: 5%;">
    <form action="fileupload" method="post" enctype="multipart/form-data">
           <label class="col-sm-4 col-form-label"> CV </label>
           <input type="file" name="filetoupload" class="form-group"/>
           <!-- <input type="text" class="form-group" name="Tugas"> -->
    </form></div>
    <!-- <button type="button" class="btn btn-danger float-end" style="margin-right: 52px">Batal</button> -->
        <a class="btn btn-danger float-end" style="margin-right: 52px"  href="/pelamar" role="button">Batal</a>
    <!-- <button @click="saveLowongan" class="btn btn-success float-end mr-1" data-toggle="modal" data-target="#exampleModal">Simpan</button> -->
    <a class="btn btn-success float-end" style="margin-right: 10px" role="button" data-toggle="modal" data-target="#exampleModalCenter">Simpan</a>

                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                          <div class="modal-header text-center" v-bind:style="{ backgroundColor: color}">
                            <h5 class="modal-title w-100" id="exampleModalLongTitle" style="font-size:30px">Confirmation Page</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body" style="font-size:20px">
                            <p> Apakah Anda yakin akan menambahkan data pelamar baru tersebut? </p>
                          </div>
                          <div class="modal-footer">
                            <a role="button" class="btn btn-success" @click="savePelamar" href="/pelamar">Ya</a>
                            <!-- <a class="btn btn-success float-end" style="margin-right: 10px" role="button" data-toggle="modal" data-target="#exampleModalCenter2">Ya</a>

                              <div class="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                  <div class="modal-content">
                                    <div class="modal-header text-center" v-bind:style="{ backgroundColor: color1}">
                                      <h5 class="modal-title w-100" id="exampleModalLongTitle" style="font-size:30px">Success Page</h5>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div class="modal-body"  style="font-size:20px">
                                      <p class="text-center"> Data Anda Berhasil Diinput </p>
                                    </div>
                                    <div class="modal-footer">
                                      <a role="button" class="btn btn-success btn-block" @click="savePelamar" href="/pelamar">OK</a>
                                    </div>
                                  </div>
                                </div>
                              </div> -->
                            <a role="button" class="btn btn-secondary btn-danger" data-dismiss="modal">Tidak</a>
                          </div>
                        </div>
                      </div>
                    </div>
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
   name: 'tambah-pelamar',
   data (){
       return{
           listKesesuaian:[],
            isSubmitted :false,
            color : '#3C77BF',
            color1: '#2ECC71',
           paket: {
               nama : "",
               email : "",
               nomorTelepon:"",
               cv: "ada.pdf",
               idStatus: 1,
               idKesesuaian: Number
           }
       }
   },

   mounted() {
    axios
      .get("http://localhost:4000/api/kesesuaian/") //ganti APInya 
      .then((resp) => {
        console.warn(resp.data);
        this.listKesesuaian =resp.data;
      });
  },
  methods: {
    savePelamar(e){
        axios 
        .post("http://localhost:4000/api/pelamars",this.paket) 
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
    font-size: 18px;
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
    font-size : 20px;
}
.modal-title{
    color: #fff;
    font-weight: 500;
    font-size : 20px;
}

</style>