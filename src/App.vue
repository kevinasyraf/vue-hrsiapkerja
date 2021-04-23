<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand fw-bolder" href="/#">
      <img src="./assets/logo-rsk.svg" alt="" width="40" height="40" class="d-inline-block">
      HR Siap Kerja
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/lowongan" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Lowongan
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/lowongan">Daftar Lowongan</a></li>
            <li><a class="dropdown-item" href="/tambahlowongan">Tambah Lowongan</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/pelamar" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pelamar
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/pelamar">Daftar Pelamar</a></li>
            <li><a class="dropdown-item" href="/tambahpelamar">Tambah Pelamar</a></li>
          </ul>
        </li>
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

.navbar {
  background-color: #ffc709;
}

@media all and (min-width: 992px) {
	.navbar .nav-item .dropdown-menu{ display: none; }
	.navbar .nav-item:hover .nav-link{   }
	.navbar .nav-item:hover .dropdown-menu{ display: block; }
	.navbar .nav-item .dropdown-menu{ margin-top:0; }
}
</style>
