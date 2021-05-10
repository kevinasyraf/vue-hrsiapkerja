<template>
<div class ="container-fluid" style="margin: 88px,350px,350px">
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <select class="form-select">
                    <option :value="''" selected disabled hidden>Divisi</option>
                    <option value="1">Menggantikan</option>
                    <option value="2">Menambah Baru</option>
                </select>
            </div>
            <div class="col-sm">
                <select class="form-select">
                    <option :value="''" selected disabled hidden>Posisi</option>
                    <!-- <option v-for="posisi in listPosisi" v-bind:key="posisi.id" :value="posisi.id"> {{posisi.nama}} </option> -->
                </select>
            </div>
            <div class="col-sm">
                <select class="form-select">
                    <option selected>Status Lowongan</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-success">Pencarian</button>
            </div>
        </div>
        <br>
        <h3 class="card-header fw-bolder primary-color text-center text-white">Daftar Pelamar</h3>
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
                        <th>Status Pelamar</th>
                        <th>Aksi</th>
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
                        <td>
                            <a v-if="item.idStatus==1 || item.idStatus==3 || item.idStatus==4" :href="'/pelamar/' + item.id">{{status[item.idStatus - 1]}}</a>
                            <a v-if="item.idStatus==2" href="" data-toggle="modal" data-target="#interviewModal">Interview</a>
                            <a v-if="item.idStatus==5" href="" data-toggle="modal" data-target="#exampleModalCenter">Negosiasi</a>
                            <a v-if="item.idStatus==6 || item.idStatus==7">{{status[item.idStatus - 1]}}</a>
                        </td>
                        <td>
                            <router-link class="btn btn-success" :to="'/pelamar/' + item.id" type="button">Detail</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <div class="modal fade" id="interviewModal" tabindex="-1" role="dialog" aria-labelledby="interviewTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header text-center" v-bind:style="{ backgroundColor: color}">
                            <h5 class="modal-title w-100" id="exampleModalLongTitle">Jadwal Wawancara</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="row">
                                    <div class="col">Waktu Interview</div>
                                    <div class="col">
                                        <!-- <input class="form-control" type="text" v-model="idPelamar" readonly> -->
                                        <input class="form-control" type="datetime-local" value="" id="example-datetime-local-input" v-model="waktuInterview">
                                        <p>{{waktuInterview}}</p>
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
                                </div>
                                <br>
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
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import PelamarDataService from "../services/PelamarDataService";

export default {
    name: "pelamar-list",
    data() {
        return {
            pelamar: [],
            currentPelamar: null,
            currentIndex: -1,
            color: '#3C77BF',
            pelamarStatus: '',
            status: ["Screening", "Interviewed", "Additional Assignment", "Negotiation", "Rejected", "Declined", "Hired"],
            divisi: [],
            waktuInterview: "",
            currentIdPelamar: -1,
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
        // retrieveDivisi() {
        //     PelamarDataService.retrieveDivisi(this.divisi).then(response => {
        //         this.divisi = response.data;
        //         console.log(response.data);
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     });
        // },

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
               waktuInterview: this.waktuInterview
             };
             console.log(data)
             PelamarDataService.update(data)
               .then(response => {
                 console.log(response.data);
                 this.message = 'The pelamar was updated successfully!';
               })
               .catch(e => {
                 console.log(e);
               });
        },

        showModalInterview(id) {
            this.currentIdPelamar = id;
            this.$root.$emit("bv::show::modal", "#interviewModal");
            // ('#interviewModal').modal('show');
        },

        updateJadwalInterview(){
            axios.put('api/pelamar/{this.currentIdPelamar}',
            {
                waktuInterview: this.waktuInterviewPelamar
            })
        }

    },
    mounted() {
        this.retrievePelamar();
        // this.retrieveDivisi();
        this.updateStatus();
        // this.currentIdPelamar = this.idPelamar;
        // this.waktuInterview = this.waktuInterviewPelamar;
    },
    // props: ['idPelamar', 'waktuInterviewPelamar']
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
.primary-color {
    background-color: #3C77BF;
}
</style>
