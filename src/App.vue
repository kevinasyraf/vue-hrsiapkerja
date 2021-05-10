<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link class="navbar-brand fw-bolder" to="/#">
      <img src="./assets/logo-rsk.svg" alt="" width="40" height="40" class="d-inline-block">
      HR Siap Kerja
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav">
          <li class="nav-item dropdown">
          <router-link class="nav-link dropdown-toggle" to="/lowongan" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Lowongan
          </router-link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><router-link class="dropdown-item" to="/lowongan">Daftar Lowongan</router-link></li>
            <li><router-link class="dropdown-item" to="/tambahlowongan">Tambah Lowongan</router-link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <router-link class="nav-link dropdown-toggle" to="/pelamar" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pelamar
          </router-link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><router-link class="dropdown-item" to="/pelamar">Daftar Pelamar</router-link></li>
            <li><router-link class="dropdown-item" to="/tambahpelamar">Tambah Pelamar</router-link></li>
          </ul>
        </li>
        </div>
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
html, body {
  font-family: 'Nunito', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0000;
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
