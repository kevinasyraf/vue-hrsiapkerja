<template>
<div class ="container-fluid" style="margin: 88px,350px,350px">
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Nama" v-model="nama">
                </div>
            </div>
            <div class="col-sm">
                <select class="form-select" v-model="kesesuaian">
                    <option :value="''" selected disabled hidden>Kesesuaian</option>
                    <option v-for="kesesuaian in listKesesuaian" v-bind:key="kesesuaian.id" :value="kesesuaian.id"> {{kesesuaian.nama}} </option>
                </select>
            </div>
            <!-- <div class="col-sm">
                <select class="form-select" v-model="posisi">
                    <option :value="''" selected disabled hidden>Posisi</option>
                    <option v-for="posisi in listPosisi" v-bind:key="posisi.id" :value="posisi.id"> {{posisi.nama}} </option>
                </select>
            </div> -->
            <div class="col-sm">
                <button type="button" class="btn btn-success" v-on:click="findByNamaAndKesesuaian">Pencarian</button>
            </div>
        </div>
        <br>
        <h3 class="card-header fw-bolder primary-color text-center text-white">Daftar Pelamar</h3>
        <div class="table-responsive">
            <table class="table table-bordered" id="tabelPelamar" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Email</th>
                        <th>No. Telepon</th>
                        <!-- <th>Divisi</th> -->
                        <!-- <th>Posisi</th> -->
                        <th>Kesesuaian</th>
                        <th>Status Pelamar</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in pelamar" v-bind:key="item.id">
                        <td>{{numberOfIndex(index)}}</td>
                        <td>{{item.nama}}</td>
                        <td>{{item.email}}</td>
                        <td>{{item.nomorTelepon}}</td>
                        <!-- <td>{{item.divisi}}</td> -->
                        <!-- <td>{{item.posisi}}</td> -->
                        <td>{{listKesesuaian[item.idKesesuaian - 1].nama}}</td>
                        <td>
                            <a v-if="item.idStatus==1 || item.idStatus==3 || item.idStatus==4">{{listStatus[item.idStatus - 1].nama}}</a>
                            <a v-if="item.idStatus==2" href="" data-toggle="modal" data-target="#interviewModal" v-on:click="setCurrentPelamar(item.id)">Interview</a>
                            <a v-if="item.idStatus==5" href="" data-toggle="modal" data-target="#negosiasiModal" v-on:click="setCurrentPelamar(item.id)">Negotiation</a>
                            <a v-if="item.idStatus==6 || item.idStatus==7">{{listStatus[item.idStatus - 1].nama}}</a>
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
                                    <div class="col">Nama</div>
                                    <div class="col">
                                        <input class="form-control" type="text" readonly v-model="currentNamaPelamar">
                                    </div>
                                </div>
                                <br>
                                <div class="row">
                                    <div class="col">Waktu Interview</div>
                                    <div class="col">
                                        <input class="form-control" type="datetime-local" v-model="currentWaktuInterviewPelamar">
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <a role="button" class="btn btn-success" href="/pelamar" v-on:click="updateJadwalInterview">Simpan</a>
                            <a role="button" class="btn btn-danger" data-dismiss="modal">Tutup</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="negosiasiModal" tabindex="-1" role="dialog" aria-labelledby="negosiasiModalTitle" aria-hidden="true">
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
                                        <select name="status" class="form-control" v-model="currentStatus">
                                            <option value="7">Hired</option>
                                            <option value="6">Decline</option>
                                        </select>
                                    </div>
                                </div>
                                <br>
                                <div class="row">
                                    <div class="col">Catatan</div>
                                    <div class="col">
                                        <textarea class="form-control" id="message-text" v-model="currentCatatan"></textarea>
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
import PelamarDataService from "../services/PelamarDataService";
import KesesuaianDataService from "../services/KesesuaianDataService";
import StatusDataService from "../services/KesesuaianDataService";
export default {
    name: "pelamar-list",
    data() {
        return {
            pelamar: [],
            currentPelamar: null,
            currentIndex: -1,
            color: '#3C77BF',
            listStatus: [],
            listKesesuaian: [],
            listDivisi: [],
            nama: "",
            kesesuaian: "",
            waktuInterview: "",
            currentIdPelamar: -1,
            currentNamaPelamar: "",
            currentWaktuInterviewPelamar: "",
            currentStatus: "",
            currentCatatan: "",
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
        retrieveKesesuaian() {
            KesesuaianDataService.getAll().then(response => {
                this.listKesesuaian = response.data;
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        },
        retrieveStatus() {
            StatusDataService.getAll().then(response => {
                this.listStatus = response.data;
                console.log(response.data);
                console.log(this.listStatus);
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

       setCurrentPelamar(id) {
         PelamarDataService.get(id)
           .then(response => {
             this.currentPelamar = response.data;
             this.currentIdPelamar = response.data.id;
             this.currentNamaPelamar = response.data.nama;
             this.currentWaktuInterviewPelamar = response.data.waktuInterview;
             this.currentStatus = response.data.idStatus;
             this.currentCatatan = response.data.catatan;
             console.log(response.data);
           })
           .catch(e => {
             console.log(e);
           });
       },
        updateStatus() {
            var data = {
               idStatus: this.currentStatus,
               catatan: this.currentCatatan,
             };
             console.log(data)
             PelamarDataService.update(this.currentIdPelamar, data)
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
            var data = {
               waktuInterview: this.currentWaktuInterviewPelamar
             };
             console.log(data)
             PelamarDataService.update(this.currentIdPelamar, data)
               .then(response => {
                 console.log(response.data);
                 this.message = 'The pelamar was updated successfully!';
               })
               .catch(e => {
                 console.log(e);
               });
        },
        findByNamaAndKesesuaian() {
            PelamarDataService.findByNamaAndKesesuaian(this.nama, this.kesesuaian).then(response => {
                this.pelamar = response.data;
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        },
        numberOfIndex(index) {
            return index + 1;
        },
    },
    mounted() {
        this.retrievePelamar();
        this.retrieveKesesuaian();
        this.retrieveStatus();
        // this.retrieveDivisi();
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