<template>
<div class ="container-fluid" style="margin: 88px,350px,350px">
    <div class="container">
        <div class="row">
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
        <div class="card-header bg-info text-center">
            <h3>Daftar Pelamar</h3>
        </div>
        <!-- <div class="card-body">
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
        </div> -->
        <div class="table-responsive">
            <table class="table table-bordered" id="tabelPelamar" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Email</th>
                        <th>No. Telepon</th>
                        <!-- <th>Divisi</th>
                        <th>Posisi</th>
                        <th>Kesesuaian</th> -->
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in pelamar" v-bind:key="item.id">
                            <td>{{item.nama}}</td>
                            <td>{{item.email}}</td>
                            <td>{{item.nomorTelepon}}</td>
                            <!-- <td>{{item.jumlahLowongan}}</td>
                            <td>{{item.tugas}}</td>
                            <td>{{item.status}}</td> -->
                        </tr>
                    </tbody>
        </table>
    </div>
    </div>
</div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import PelamarDataService from "../services/PelamarDataService";
export default {
    name: "pelamar-list",
    data() {
        return {
            pelamar: [],
            currentPelamar: null,
            currentIndex: -1,
        };
    },
    methods: {
        retrievePelamar() {
            PelamarDataService.getAll().then(response => {
                this.pelamar = response.data;
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        },
        retrieveDivisi() {
            PelamarDataService.retrieveDivisi(this.divisi).then(response => {
                this.lowongan = response.data;
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        },
    },
    mounted() {
        this.retrievePelamar();
        this.retrieveDivisi();
    }
};
</script>
