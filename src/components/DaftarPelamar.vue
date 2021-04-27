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
                        <th>Divisi</th>
                        <th>Posisi</th>
                        <th>Kesesuaian</th>
                        <th>Status Pelamar</th>
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
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <a v-if="item.idStatus==2 || item.idStatus==3 || item.idStatus==4" :href="'/pelamar/' + item.id">{{item.idStatus}}</a>
                                <a v-if="item.idStatus==5" href="" data-toggle="modal" data-target="#exampleModalCenter">Negosiasi</a>
                                <a v-if="item.idStatus==6 || item.idStatus==7">{{item.idStatus}}</a>
                            </td>
                        </tr>
                    </tbody>
        </table>
                            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header text-center" v-bind:style="{ backgroundColor: color}">
                                            <h5 class="modal-title w-100" id="exampleModalLongTitle">Hasil Negosiasi</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <form>
                                                <div class="row">
                                                    <div class="col">Hasil Negosiasi</div>
                                                    <div class="col">
                                                        <select name="status" class="form-control" v-model="pelamarStatus">
                                                            <option value="7">Hired</option>
                                                            <option value="6">Decline</option>
                                                        </select>
                                                   </div>
                                                </div><br>
                                                <div class="row">
                                                    <div class="col">Catatan</div>
                                                    <div class="col">
                                                        <textarea class="form-control" id="message-text"></textarea>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <a role="button" class="btn btn-success" href="/pelamar" @click="updateStatus">Simpan</a>
                                            <a role="button" class="btn btn-danger" data-dismiss="modal">Tutup</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
            color : '#3C77BF',
            pelamarStatus : '',
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

        getPelamar(id) {
         PelamarDataService.get(id)
           .then(response => {
             this.pelamarStatus = response.data.idStatus;
             console.log(response.data);
           })
           .catch(e => {
             console.log(e);
           });
       },

        updateStatus() {
            var data = {
               id: this.pelamar.id,
               nama: this.pelamar.nama,
               email: this.pelamar.email,
               nomorTelepon:  this.pelamar.nomorTelepon,
               idKesesuaian: this.pelamar.idKesesuaian,
               idStatus: this.pelamarStatus,
             };
             PelamarDataService.update(this.pelamar.id, data)
               .then(response => {
                 console.log(response.data);
                 this.message = 'The pelamar was updated successfully!';
               })
               .catch(e => {
                 console.log(e);
               });
        },

    },
    mounted() {
        this.retrievePelamar();
        this.retrieveDivisi();
        this.updateStatus();
    }
};
</script>

<style>
html, body {
    font-family: 'Nunito', sans-serif;
}
.modal-title{
    color: #fff;
    font-weight: 700;
    font-size : 20px;
}
.btn-success{
    background-color: #2ECC71;
}
.btn-danger{
    background-color : #E74C3C;
}
</style>
