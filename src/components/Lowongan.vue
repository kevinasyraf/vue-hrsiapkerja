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
            <div class="col">jenis Lowongan</div>
            <div class="col">
              <input type="text" class="form-control" id="jenisLowongan" v-model="lowonganJenisLowongan" readonly/>
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
              <input type="text" class="form-control" id="deadlineTugas" v-model="deadlineTugas" readonly/>
            </div>
          </div><br>
          <div class="row">
            <div class="col">kualifikasi</div>
            <div class="col">
              <input type="text" class="form-control" readonly/>
            </div>

          </div><br>
          <div class="row">
            <div class="col">Tugas</div>
            <div class="col">
              <input type="text" class="form-control" readonly/>
            </div>
          </div><br>
          <button type="button" class="btn btn-primary float-end mr-1">Kembali</button>
          <button @click="ditolakLowongan" type="button" class="btn btn-danger float-end">Ditolak</button>
          <button @click="disetujuiLowongan" type="button" class="btn btn-success float-end">Disetujui</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LowonganDataService from "../services/LowonganDataService";
import DivisiDataService from "../services/DivisiDataService";
import PosisiDataService from "../services/PosisiDataService";
// import axios from "axios";

export default {
  name: 'detail-lowongan',
  data() {
    return {
      lowonganStatus : '',
      lowonganJumlahLowongan : '',
      lowonganKualifikasi : '',
      lowonganKuota : '',
      lowonganBuka : '',
      lowonganTugas : '',
      deadlineTugas: '',
      lowonganJenisLowongan: '',
      idDivisi:Number,
      idPosisi:Number,
      listDivisi:[],
      listPosisi:[],
      message: '',
      color : '#3C77BF'
    };
  },
  methods: {
    getLowongan(id) {
      LowonganDataService.getOne(id)
          .then(response => {
            this.id = response.data.id;
            this.status = response.data.status;
            this.jenisLowongan = response.data.jenisLowongan;
            this.jumlahLowongan = response.data.jumlahLowongan;
            this.kualifikasi = response.data.kualifikasi;
            this.lowonganBuka = response.data.lowonganBuka;
            this.tugas = response.data.tugas;
            this.deadlineTugas = response.data.deadlineTugas;
            this.idDivisi = response.data.idDivisi;
            this.idUsers = response.data.idUsers;
            this.idPosisi = response.data.idPosisi;

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
    disetujuiLowongan(e){
      LowonganDataService.disetujuiLowongan(this.$route.params.id)
          .then((resp) => {
                console.warn(resp.data);
                // alert(resp.data)
                e.preventDefault();
                this.isSubmitted= true;
              }
          )
    },
    ditolakLowongan(e){
      LowonganDataService.ditolakLowongan(this.$route.params.id)
          .then((resp) => {
                console.warn(resp.data);
                // alert(resp.data)
                e.preventDefault();
                this.isSubmitted= true;
              }
          )
    }

  },
  mounted() {
    this.message = '';
    this.getLowongan(this.$route.params.id);
    this.getDivisi();
    this.getPosisi();
  },
};
//post method atau get
</script>

<style>
html, body {
  font-family: 'Nunito', sans-serif;
}
.card-header {
  color: #fff;
  font-weight: 700;
  font-size : 20px;
}
</style>