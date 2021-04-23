<template>
<div class ="container-fluid" style="margin: 88px,350px,350px">
    <div class="container">
        <div class="row">
            <div class="col-sm">
              <input type="text" class="form-control" placeholder="Nama">
            </div>
            <div class="col-sm">
              <button class="form-control btn btn-outline-secondary dropdown-toggle text-left" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Divisi</button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
            <div class="col-sm">
              <button class="form-control btn btn-outline-secondary dropdown-toggle text-left" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Posisi</button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-success">Pencarian</button>
            </div>
        </div>

        <br>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-outline-secondary">Semua</button>
          <button type="button" class="btn btn-outline-secondary">Rekomendasi</button>
          <button type="button" class="btn btn-outline-secondary">Dipertimbangkan</button>
          <button type="button" class="btn btn-outline-secondary">Tidak Rekomendasi</button>
        </div>
        <div class="card-header bg-info text-center">
            <h3>Daftar Pelamar</h3>
        </div>
        <div class="card-body">
            <table class="table">
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
                <tbody>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
export default {
   name: 'pelamar'
}
//post method atau get
</script>