<template xmlns:th="http://www.w3.org/1999/xhtml" xmlns="http://www.w3.org/1999/html">
  <div class="container mt-5">
    <a class="btn btn-outline-warning" href="/tambahlowongan" role="button">Tambah Lowongan</a>
    <br><br>

    <div class="form-group" style="margin-top:5%">
      <label class="col-sm-4 col-form-label"> Jenis Lowongan</label>
      <select v-model="detailLowongan.jenis_lowongan">
        <option v-for="item in listJenisLowongan" v-bind:key="item.id" :value="item.id"> {{item.nama}} </option>
      </select>
    </div>

<!--    <div class="input-group mb-3">-->
<!--      <input type="text" class="form-control" placeholder="Search by posisi"/>-->
<!--      <div class="input-group-append">-->
<!--        <button class="btn btnprimary" type="button" @click="filterByPosisi">-->
<!--          Filter-->
<!--        </button>-->
<!--      </div>-->
<!--    </div>-->

    <div class="dropdown">
      <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Posisi
        <span class="caret"></span></button>
      <ul class="dropdown-menu">
        <input class="form-control" id="myInput" type="text" placeholder="Cari...">
        <li><a href="#">IT</a></li>
      </ul>
    </div>

    <br><br>
    <h2>Daftar Lowongan</h2>
    <br><br>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>No</th>
        <th>Divisi</th>
        <th>Posisi</th>
        <th>Jenis Lowongan</th>
        <th>Jumlah Dibutuhkan</th>
        <th>Tugas</th>
        <th>Status Lowongan</th>
      </tr>
      </thead>
    </table>
  </div>
</template>

{

<style>
.button{
  background-color: #4E9755;
  color: white;
}
select {
  min-width: 15ch;
  max-width: 30ch;
  border: 1px solid var(--select-border);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
}
.button2{
  background-color: #2ECC71;
  color: white;
}
h2 {
  padding: 10px;
  background-color: #3C77BF;
  margin: 0;
  color: white;
  text-align: center;
}
</style>

<script>
import LowonganDataService from "../services/LowonganDataService";

export default {
  name: "lowongan-list",
  data() {
    return {
      listJenisLowongan:[],
      detailLowongan: {
        id:Number,
        nama: String,
      },
      lowongan: [],
      currentLowongan: null,
      currentIndex: -1,
    };
  },
  methods: {
    retrieveLowongan() {
      LowonganDataService.getAll()
          .then(response => {
            this.lowongan = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    filterJenisLowongan() {
      LowonganDataService.findByJenisLowongan(this.jenis_lowongan)
          .then(response => {
            this.lowongan = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    filterPosisi() {
      LowonganDataService.findByPosisi(this.posisi)
          .then(response => {
            this.lowongan = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
  },
  mounted() {
    this.retrieveLowongan();
  }
};
</script>