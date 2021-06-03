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
    <form @submit="saveLowongan">
       <div class="row" style="margin-top:5%">
           <label class="col-sm-4 col-form-label"> Divisi <span class="text-danger">*</span></label>
          <div class="col">
           <select required v-model="paket.idDivisi">
               <option v-for="item in listDivisi" v-bind:key="item.id" :value="item.id"> {{item.nama}} </option>
           </select></div>
       </div>
       <div class="row">
           <label class="col-sm-4 col-form-label"> Posisi<span class="text-danger">*</span> </label>
           <div class="col">
            <select required v-model="paket.idPosisi">
               <option v-for="item in listPosisi" v-bind:key="item.id" :value="item.id"> {{item.nama}} </option>
           </select></div>
       </div> 

       <div class="row"> 
           <label class="col-sm-4 col-form-label"> Jenis Lowongan<span class="text-danger">*</span> </label>
           <div class="col">
           <select required v-model="paket.idJenisLowongan">
               <option v-for="item in listJenisLowongan" v-bind:key="item.id" :value="item.id"> {{item.nama}} </option>
           </select></div>
       </div>
        <div class="row">
           <label class="col-sm-4 col-form-label"> Jumlah Dibutuhkan<span class="text-danger">*</span> </label>
            <div class="col">
            <input type="number" min="0" class="form-group" id="jumlahLowongan" required v-model="paket.jumlahLowongan"  style= "width: 80%">
    </div></div>

        <div class="row">
           <label class="col-sm-4 col-form-label"> Waktu Pengerjaan<span class="text-danger">*</span> </label>
             <div class="col">
           <input type="date" class="form-group" name="Waktu Pengerjaan" required v-model="paket.deadlineTugas"  style= "width: 80%">
       </div></div>

       <div class="row">
         <form action="fileupload" method="post" enctype="multipart/form-data">
           <label class="col-sm-4 col-form-label"> Kualifikasi<span class="text-danger">*</span> </label>
<!--           <form ref="myFileInputForm">-->

<!--           <input id="fileupload" type="file" v-model="file" multiple v-on:change="uploadFile" ref="fileInput" />-->
<!--           </form>-->

<!--           <input type="file" class="form-group"  @change="fileUpload('kualifikasi',$event.target.files)">-->
<!--            <input type="file" name="filetoupload" class="form-group" style= "width: 50%" @change="fileUpload('cv', $event.target.files)">-->
   </form></div>

    <div class="form-group" style="margin-bottom: 5%;">
    <form action="fileupload" method="post" enctype="multipart/form-data">
           <label class="col-sm-4 col-form-label"> Tugas </label>
           <input type="file" name="filetoupload" class="form-group" style= "width: 50%">
           <!-- <input type="text" class="form-group" name="Tugas"> -->
    </form></div>
    
    <router-link to="/lowongan">
            <button class="row btn btn-danger float-end" style="margin-right: 60px">Batal</button>
          </router-link>
          
          <div class="raw">
          <div class="col">
          <button id="completeButton" class="btn btn-success float-end" type="button" data-toggle="modal"
            data-target="#exampleModal" @click="refreshSubmitted" style="margin-right: 4px" >
            Simpan
          </button></div></div>
         
        

        <!-- DIV BESAR MODAL -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <!-- HEADER MODAL -->
              <div class="modal-header text-center" style="background-color: #3C77BF;">
                <h5 v-if="status == 0" id="exampleModalLabel">
                  confirmation page
                </h5>
                <h5 v-if="status == 1" id="exampleModalLabel">
                  Loading...
                </h5>
                <h5 v-if="status == 2" id="exampleModalLabel">
                  success page
                </h5>
                <h5 v-if="status == 3" id="exampleModalLabel">
                  failed page
                </h5>
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&#xD7;</span>
                </button>
              </div>
              <!-- BODY MODAL -->
              <div class="modal-body">
                <h5 v-if="status == 0" id="exampleModalLabel">
                  Apakah Anda yakin akan membuat lowongan baru ini?
                </h5>
                <h5 v-if="status == 1" id="exampleModalLabel">
                  Harap tunggu sebentar
                </h5>
                <h5 v-if="status == 2" id="exampleModalLabel">
                  Kandidat baru berhasil ditambahkan
                </h5>
                <h5 v-if="status == 3" id="exampleModalLabel">
                  Terjadi kesalahan pada sistem. Mohon lengkapi dan cek kembali data pada
                  formulir.
                </h5>
              </div>
              <!-- FOOTER MODAL -->
              <div class="modal-footer">
                <div v-if="status == 0">
                  <button class="btn btn-primary mr-4" type="submit">Ya</button>

                  <button class="btn btn-danger" type="button" data-dismiss="modal">
                    Tidak
                  </button>
                </div>
                <div v-if="status == 1"></div>
                <div v-if="status == 2">
                  <router-link to='/lowongan'><button class="btn btn-primary" data-dismiss="modal">
                      Ok
                    </button></router-link>
                </div>
                <div v-if="status == 3">
                  <button class="btn btn-primary" id="buttonFailed" type="button" data-dismiss="modal">
                    Ya
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END MODAL -->
        <!-- ------------------------------------------------ -->
        <br />
      </form>
</div></div>
</div>

</template>
<script>
import axios from "axios";
// import fileUpload from "@/components/fileUpload";

export default {
   name: 'tambah-lowongan',
   data (){
       return{
           listDivisi:[],
           listPosisi:[],
           listJenisLowongan:[],
           color : '#3C77BF',
           color1: "#2ECC71",
           paket: {
               id:null,
               status: "pending",
               jumlahLowongan: '',
               kualifikasi : null,
               lowonganBuka : "TRUE",
               tugas : "ada",
               deadlineTugas : null,
               idDivisi:Number,
               idPosisi: Number,
               idUsers: 1,
               idJenisLowongan: Number,
               emailaddr : ''
           },
         filekualifikasi : null,
         paketTugas:{
             id:null,
           nama: "",
           deadlineTugas: null
         },
            status: 0,
       };
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
       axios
      .get("http://localhost:4000/api/jenisLowongan/") //ganti APInya 
      .then((resp) => {
        console.warn(resp.data);
        this.listJenisLowongan =resp.data;
      });
       axios
      .get("http://localhost:4000/api/users/ceo/") //ganti APInya
      .then((resp) => {
        console.warn(resp.data);
        this.emailaddr =resp.data.email;
      });
  },
methods: {
  // fileUpload(fieldName, files) {
  //   let file = files[0]
  //   console.log(file)
  //   this.filekualifikasi=file;
  // },
  // props:["fieldName",'obj','directory'],
    saveLowongan(e) {
       this.status = 1;
      //  console.log(this.paket.kualifikasi);
      // this.paket.kualifikasi = this.filekualifikasi;
      //  console.log(this.paket.kualifikasi);
      //  console.log(this.paketTugas);
      // axios
      //     .post("http://localhost:4000/api/tugas", this.paketTugas)
      // .then((resp) => {
      //   if(resp.status==200){
      //     console.log(resp.data);
      //   }
      // })
      // .catch(err => {
      //   console.log(err)
      // });

        axios 
        .post("http://localhost:4000/api/lowongan",this.paket)
        .then((resp) => {
          if (resp.status == 200) {
              this.status = 2
            }
            console.warn(resp.data);
            // alert(resp.data)
        })
        .catch(err => {
            console.log(err)
            this.status = 3
        });

        e.preventDefault();

    },
     refreshSubmitted() {
        this.status = 0;
      },
}
}

//post method atau get
</script>
<style scoped>
html,
  body {
    font-family: 'Nunito', sans-serif;
  }
label {
    font-size: 20px;
    margin-left: 48px;
}

select {
 display: inline-block;
 width: 80%;
}
input {
 display: inline-block;
 width: 80%;
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