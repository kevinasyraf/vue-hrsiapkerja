<template xmlns:th="http://www.w3.org/1999/xhtml">
  <div class="container mt-5">
    <a href="@{/tambahlowongan}"><input type=button value='+ Tambah Lowongan'></a>
    <br><br>
    <select name="divisi" id="divisi">
      <option value="it">IT</option>
      <option value="hr">HR</option>
      <option value="finance">Finance</option>
    </select>
    <select name="posisi" id="posisi">
      <option value="be">Backend Engineer</option>
      <option value="fe">Frontend Engineer</option>
    </select>
    <select name="statusLowongan" id="statusLowongan">
      <option value="disetujui">Disetujui</option>
      <option value="menungguPersetujuan">Menunggu Persetujuan</option>
    </select>
    <a th:href="@{/tambahlowongan}" class="btn button2">Pencarian</a>
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
  },
  mounted() {
    this.retrieveLowongan();
  }
};
</script>