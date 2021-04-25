<template xmlns:th="http://www.w3.org/1999/xhtml">
  <div class="container mt-5">
    <a th:href="@{/tambahPelamar}" class="btn button">+ Tambah Pelamar</a>
    <br><br>
    <input type="text" id="nama" name="nama" placeholder="Nama">
    <select name="divisi" id="divisi">
      <option value="it">IT</option>
      <option value="hr">HR</option>
    </select>
    <select name="posisi" id="posisi">
      <option value="be">Backend Engineer</option>
      <option value="fe">Frontend Engineer</option>
    </select>
    <br><br>
    <h2>Daftar Pelamar</h2>
    <br><br>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>No</th>
        <th>Nama</th>
        <th>Email</th>
        <th>No Telepon</th>
        <th>Divisi</th>
        <th>Posisi</th>
        <th>Kesesuaian</th>
        <th>Status Pelamar</th>
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