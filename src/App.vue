<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-warning">
      <a class="navbar-brand mb-0 h1" href="#">HR Siap Kerja</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <!-- <a class="nav-item nav-link active" href="#">Lowongan<span class="sr-only">(current)</span></a> -->
          <a class="nav-item nav-link" href="#">Lowongan</a>
          <a class="nav-item nav-link" href="#">Lamaran</a>
          <!-- <a class="nav-item nav-link disabled" href="#">Disabled</a> -->
        </div>
      </div>
      <div class="navbar-nav mr-auto">
        <a class="navbar-brand mb-0" href="#">Nama - Divisi</a>
        <button type="button" class="btn btn-danger btn-md">Keluar</button>

      </div>
    </nav>
    
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Nunito;
  font-size: 14px;
  line-height: 1.42857143;
  color: #7a7a7a;
  text-align: center;
  margin-top: 60px;
}
</style>
