<template>
  <div class ="container-fluid" style="margin: 88px,350px,350px">
    <div class="container">
        <div class="card mx-auto w-50" style="margin:5%">
            <div class="card-header text-center" style="background-color: #3C77BF">
            <div style="color:#ffff">
            <h3>Tambah Pelamar</h3>
        </div></div>
        <!-- <div class="card-body" > -->
        <form @submit="savePelamar">
           <div class="row" style="margin-top:5%">
            <label class="col-sm-4 col-form-label">Lowongan<span class="text-danger">*</span> </label>
            <div class="col">
              <select required v-model="paket.idLowongan">
                <option v-for="item in listLowongan" v-bind:key="item.id" :value="item.id"> {{listDivisi[item.idDivisi - 1].nama + ' ' +'-' + ' ' + listPosisi[item.idPosisi - 1].nama}} </option>
              </select>
            </div>
          </div>

          <div class=" row">
            <label class="col-sm-4 col-form-label">Nama<span class="text-danger">*</span> </label>
            <div class="col">
              <input type="text" class="form-group" id="nama" required v-model="paket.nama" style= "width: 80%"  oninvalid="this.setCustomValidity('Please fill the name')" oninput="setCustomValidity('')">
            </div>
          </div>

          <div class="row">
            <label class="col-sm-4 col-form-label">Email<span class="text-danger">*</span> </label>
            <div class="col">
              <input type="email" class="form-group" id="email" v-model="paket.email" style= "width: 80%">
            </div>
          </div>

          <div class="row">
            <label class="col-sm-4 col-form-label">Nomor Telepon<span class="text-danger">*</span> </label>
            <div class="col">
              <input type="number" min="0" class="form-group" id="nomorTelepon" required v-model="paket.nomorTelepon" style= "width: 80%">
            </div>
          </div>

          <div class="row">
            <label class="col-sm-4 col-form-label">kesesuaian<span class="text-danger">*</span> </label>
            <div class="col">
              <select required v-model="paket.idKesesuaian">
                <option v-for="item in listKesesuaian" v-bind:key="item.id" :value="item.id"> {{item.nama}} </option>
              </select>
            </div>
          </div>

          <!-- <div class="row">
            <form action="fileupload" method="post" enctype="multipart/form-data">
              <label class="col-sm-4 col-form-label"> CV </label>
                <input type="file" name="filetoupload" class="form-group" id="cv" style= "width: 50%"></form>
              </div> -->
              
       <div class="row" style="margin-top:2%">
           <label class="col-sm-4 col-form-label"> CV <span class="text-danger">*</span> </label>
             <div class="col">
           <!-- <input type="textarea" class="form-group" name="cv" required v-model="paket.cv"  style= "width: 80%" oninvalid="this.setCustomValidity('Please fill link of CV')" oninput="setCustomValidity('')"> -->
           <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="cv" required v-model="paket.cv"  style= "width: 80%" oninvalid="this.setCustomValidity('Please fill the link of CV')" oninput="setCustomValidity('')"></textarea>
       </div></div>

        <!-- <input type="text" class="form-group" name="Tugas"> -->
        <!-- START MODAL -->
        <!-- ------------------------------------------------ -->
        <!-- BUTTON UNTUK MENAMPILKAN MODAL -->
       
          
          <router-link to="/pelamar">
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
                  <router-link to='/pelamar'><button class="btn btn-primary" data-dismiss="modal">
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
    name: "tambah-pelamar",
    data() {
      return {
        listKesesuaian: [],
        listLowongan: [],
        listPosisi: [],
        listDivisi:[],
        color: "#3C77BF",
        color1: "#2ECC71",
        paket: {
          nama:"",
          email: "",
          nomorTelepon: "",
          cv: "",
          idStatus: 1,
          idKesesuaian: Number,
          idLowongan: Number,
        },
        status: 0,
      };
    },

    mounted() {
      axios
        .get("http://localhost:4000/api/kesesuaian/") //ganti APInya
        .then((resp) => {
          console.warn(resp.data);
          this.listKesesuaian = resp.data;
        });
         axios
        .get("http://localhost:4000/api/lowongan/") //ganti APInya
        .then((resp) => {
          console.warn(resp.data);
          this.listLowongan = resp.data;
        });
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
      savePelamar(e) {
        this.status = 1;
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
    //   validateEmail() {
    //     if (this.paket.email == null || this.paket.email == '' || (!this.reg.test(this.paket.email))) {
    //       var email = document.getElementById("email");
    //       email.setCustomValidity("Masukan email yang benar");
    //       email.reportValidity();
    //     }
    //   }
    // },
  }
  }

</script>

<style scoped>
  html,
  body {
    font-family: 'Nunito', sans-serif;
  }
  label {
    font-size: 16px;
    margin-left: 48px;
  }

  select {
    display: inline-block;
    width: 80%;
  }
  input {
    display: inline-block;
  }
  .btn {
    padding: 4px 12px !important;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
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