<template>
  <div class ="container-fluid" style="margin: 88px,350px,350px">
    <div class="container">
      <div class ="col">
                <h1>Submisi Tugas</h1><br>
            </div>
      <h10> Anda bisa melakukan pengumpulan tugas pada form dibawah ini. 
            <br>Jangan lupa untuk memperhatikan penamaan file sesuai petunjuk yang telah dikirimkan pada email</h10>
        <div class="card mx-auto w-50" style="margin:5%">
            <div class="card-header text-center" style="background-color: #3C77BF">
            <div style="color:#ffff">
            <h3>Submisi Tugas</h3>
        </div></div>
        <!-- <div class="card-body" > -->
        <form @submit="saveTugas">
           <div class="row" style="margin-top:5%">
            <label class="col-sm-4 col-form-label">Status Submisi</label>
            <div class="col">
            </div>
          </div>

          <div class=" row">
            <label class="col-sm-4 col-form-label">Last modified</label>
            <div class="col">
              <!-- <input type="text" class="form-group" id="nama" required v-model="paket.nama" style= "width: 80%"  oninvalid="this.setCustomValidity('Please fill the name')" oninput="setCustomValidity('')"> -->
            </div>
          </div>
          <div class="row">
            <form action="fileupload" method="post" enctype="multipart/form-data">
              <label class="col-sm-4 col-form-label">Tugas</label>
              <input type="file" class="form-group"  @change="fileUpload('kualifikasi',$event.target.files)" style="width:50%" >

<!--              <input type="file" name="filetoupload" class="form-group" id="cv" style= "width: 50%">-->
            </form>
              </div>
        <!-- <input type="text" class="form-group" name="Tugas"> -->
        <!-- START MODAL -->
        <!-- ------------------------------------------------ -->
        <!-- BUTTON UNTUK MENAMPILKAN MODAL -->
          <div class="raw">
          <div class="col">
          <button id="completeButton" class="btn btn-success center-blok" type="button" data-toggle="modal"
            data-target="#exampleModal" @click="refreshSubmitted" style="margin-left: 45%" >
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
                  Apakah Anda yakin akan menyimpan data pelamar Ini?
                </h5>
                <h5 v-if="status == 1" id="exampleModalLabel">
                  Harap tunggu sebentar
                </h5>
                <h5 v-if="status == 2" id="exampleModalLabel">
                  Kandidat baru berhasil ditambahkan
                </h5>
                <h5 v-if="status == 3" id="exampleModalLabel">
                  Terjadi kesalahan pada sistem. Mohon lengkapi data pada
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
                  <router-link to='/submisitugas'><button class="btn btn-primary" data-dismiss="modal">
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
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "submisi-tugas",
    data() {
      return {
        color: "#3C77BF",
        color1: "#2ECC71",
        paket: {
          statusSubmisi:"not attempt",
          lastUpdated: "",
          tugas: "ada.pdf",
        },
        filesubmisi : null,
        status: 0,
      };
    },


    methods: {
      fileUpload(fieldName, files) {
        let file = files[0]
        console.log(file)
        this.filesubmisi=file;
      },
      props:["fieldName",'obj','directory'],
      saveTugas(e) {
        this.status = 1;
        this.paket.tugas= this.filesubmisi;
        console.log(this.paket);
        axios
          .post("http://localhost:4000/api/pelamars/", this.paket)
          .then((resp) => {
            if (resp.status == 200) {
              this.status = 2
            }
            console.warn(resp);
            // alert(resp.data)
            // this.isSubmitted = true;
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

</script>

<style>
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
  }
  h10{
        font-size: 11px;
  }
  .btn-success {
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin-right: 50% !important;
    margin: 32px 4px ;

  }
  .card-header {
    color: #fff;
    font-weight: 500;
    font-size: 20px;
  }

  .modal-title {
    color: #fff;
    font-weight: 500;
    font-size: 20px;
  }
  .exampleModalLabel{
    text-align: center !important;
  }
</style>