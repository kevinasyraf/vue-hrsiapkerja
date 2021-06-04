<template>
  <div class ="container-fluid" style="margin: 88px,350px,350px">
    <div class="container">
      <div class="card mt-3 mx-auto w-50">
        <div class="card-header text-center" v-bind:style="{ backgroundColor: color}">
          Detail Lowongan
        </div>
        <div class="card-body" >
          <div class="row">
            <div class="col">Divisi</div>
            <div class="col">
              <select v-model="idDivisi" class="form-control" disabled>
                <option v-for="item in listDivisi" v-bind:key="item.id" :value="item.id" > {{item.nama}} </option>
              </select>
            </div>
          </div><br>
          <div class="row">
            <div class="col">Posisi</div>
            <div class="col">
              <select v-model="idPosisi" class="form-control" disabled>
                <option v-for="item in listPosisi" v-bind:key="item.id" :value="item.id" > {{item.nama}} </option>
              </select>
            </div>
          </div><br>
          <div class="row">
            <div class="col">Jenis Lowongan</div>
            <div class="col">
              <input type="text" class="form-control" id="jenisLowongan" v-model="listJenisLowongan[lowonganJenisLowongan - 1].nama" readonly/>
            </div>
          </div><br>
          <div class="row">
            <div class="col">Jumlah Dibutuhkan</div>
            <div class="col">
              <input type="text" class="form-control" id="jumlahLowongan" v-model="lowonganJumlahLowongan" readonly/>
            </div>
          </div><br>
          <div class="row">
            <div class="col">Waktu Pengerjaan</div>
            <div class="col">
              <!-- <input type="date" class="form-control" id="deadlineTugas" v-model="listTugas[deadlineTugas - 1].deadlineTugas" readonly/> -->
              <input type="datetime-local" class="form-control" id="deadlineTugas" v-model="lowongandeadlineTugas" readonly/>
            </div>
          </div><br>
          <div class="row">
            <div class="col">Kualifikasi</div>
            <div class="col">
              <!-- <input type="text" class="form-control" id="kualifikasi" v-model="lowonganKualifikasi" readonly/> -->
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="Kualifikasi" v-model="lowonganKualifikasi" readonly/>
            </div>

          </div><br>
          <div class="row">
            <div class="col">Tugas</div>
            <div class="col">
              <!-- <input type="text" class="form-control" id="tugas" v-model="lowonganTugas" readonly/> -->
               <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="tugas" v-model="lowonganTugas" readonly/>
            </div>
          </div><br>
          <button type="button" class="btn btn-primary float-end mr-1" @click="$router.push('/lowongan')">Kembali</button>
          <button v-if="showCEOBoard" @click="ditolakLowongan" data-toggle="modal" data-target="#exampleModalCenterTolak" type="button" class="btn btn-danger float-end">Ditolak</button>
          <button v-if="showCEOBoard" @click="disetujuiLowongan" data-toggle="modal" data-target="#exampleModalCenterSetuju" type="button" class="btn btn-success float-end">Disetujui</button>

          <div class="modal fade modal-setuju" id="exampleModalCenterSetuju" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header text-center" v-bind:style="{ backgroundColor: color}">
                  <h5 class="modal-title w-100" id="exampleModalLongTitle">Confirmation Page</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  Apakah Anda yakin akan menyetujui lowongan Ini?
                </div>
                <div class="modal-footer">
                  <a role="button" class="btn btn-success" :href="'/lowongan/' + lowonganId" @click="disetujuiLowongan()">Ya</a>
                  <a role="button" class="btn btn-secondary" data-dismiss="modal">Tidak</a>
                </div>
              </div>
            </div>
          </div>

          <div class="modal fade modal-tolak" id="exampleModalCenterTolak" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header text-center" v-bind:style="{ backgroundColor: color}">
                  <h5 class="modal-title w-100" id="exampleModalLongTitle">Confirmation Page</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  Apakah Anda yakin akan menolak lowongan Ini?
                </div>
                <div class="modal-footer">
                  <a role="button" class="btn btn-success" :href="'/lowongan/' + lowonganId" @click="ditolakLowongan">Ya</a>
                  <a role="button" class="btn btn-secondary" data-dismiss="modal">Tidak</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LowonganDataService from "../services/LowonganDataService";
import DivisiDataService from "../services/DivisiDataService";
import PosisiDataService from "../services/PosisiDataService";
import JenisLowonganDataService from "../services/DivisiDataService";
import TugasDataService from "../services/PosisiDataService";
import userservice from "../services/user.service";
import moment from "moment";
// import axios from "axios";
 // import axios from "axios";

export default {
  name: 'detail-lowongan',
  data() {
    return {
      lowonganId : Number,
      lowonganStatus : '',
      lowonganJumlahLowongan : '',
      lowonganKualifikasi : '',
      lowonganBuka : '',
      lowonganTugas : '',
      lowongandeadlineTugas: null,
      lowonganJenisLowongan: '',
      idDivisi:Number,
      idPosisi:Number,
      idJenisLowongan:Number,
      listDivisi:[],
      listPosisi:[],
      listJenisLowongan:[],
      message: '',
      color : '#3C77BF',
      listTugas: [],
      emailaddr: '',
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showCEOBoard() {
      if (this.currentUser && this.currentUser.role) {
        return this.currentUser.role == "CEO";
      }

      return false;
    },
  },
  methods: {
    getLowongan(id) {
      LowonganDataService.getOne(id)
          .then(response => {
            this.lowonganId = response.data.id;
            this.lowonganStatus = response.data.status;
            this.lowonganJenisLowongan = response.data.idJenisLowongan;
            this.lowonganJumlahLowongan = response.data.jumlahLowongan;
            this.lowonganKualifikasi = response.data.kualifikasi;
            this.lowonganBuka = response.data.lowonganBuka;
            this.lowonganTugas = response.data.tugas;
            this.lowongandeadlineTugas = moment(response.data.deadlineTugas).format('YYYY-MM-DDTHH:mm');
            this.idDivisi = response.data.idDivisi;
            this.idUsers = response.data.idUsers;
            this.idPosisi = response.data.idPosisi;
            this.idJenisLowongan= response.data.idJenisLowongan;

            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    getDivisi(){
      DivisiDataService.getAll()
          .then(response => {
            this.listDivisi = response.data;
          })
          .catch(e => {
            console.log(e);
          });
    },
    getPosisi(){
      PosisiDataService.getAll()
          .then(response => {
            this.listPosisi = response.data;
          })
          .catch(e => {
            console.log(e);
          });
    },
    getJenisLowongan(){
      JenisLowonganDataService.getAll()
          .then(response => {
            this.listJenisLowongan = response.data;
          })
          .catch(e => {
            console.log(e);
          });
    },
    getTugas(){
      TugasDataService.getAll()
          .then(response => {
            this.listTugas = response.data;
          })
          .catch(e => {
            console.log(e);
          });
    },
    disetujuiLowongan(){
      this.getUser()

      var data = {
        emailaddr: this.emailaddr
      };
      LowonganDataService.disetujuiLowongan(this.$route.params.id, data)
          .then(response => {
            console.log(response.data);
            this.message = 'The tutorial was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
    },
    ditolakLowongan(){
      this.getUser()
      var data = {
        emailaddr: this.emailaddr
      }
      LowonganDataService.ditolakLowongan(this.$route.params.id, data)
          .then(response => {
            console.log(response.data);
            this.message = 'The tutorial was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
    },
    getUser(){
      userservice.get(this.idUsers)
          .then(response => {
            console.log(response.data);
            this.emailaddr = response.data.email;
            console.log(response.data.email);
            console.log("response.data.email " + this.emailaddr);
          })
          .catch(e => {
            console.log(e);
          });
    }

  },
  mounted() {
    this.message = '';
    this.getLowongan(this.$route.params.id);
    this.getDivisi();
    this.getPosisi();
    this.getJenisLowongan();
    this.getTugas();
    this.getUser();
  },
};
//post method atau get
</script>

<style scoped>
html, body {
  font-family: 'Nunito', sans-serif;
}
.card-header {
  color: #fff;
  font-weight: 700;
  font-size : 20px;
}
.modal-title{
  color: #fff;
  font-weight: 700;
  font-size : 20px;
}
</style>