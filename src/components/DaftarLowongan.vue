<template>
<div class="container">
    <router-link class="btn btn-success" to="/tambahlowongan" role="button">Tambah Lowongan</router-link>
    <br>
    <br>
    <div class="row">
        <div class="col-sm">
            <select class="form-select" v-model="divisi">
                <option :value="''" selected disabled hidden>Divisi</option>
                <option v-for="divisi in listDivisi" v-bind:key="divisi.id" :value="divisi.id"> {{divisi.nama}} </option>
            </select>
        </div>
        <div class="col-sm">
            <select class="form-select" v-model="posisi">
                <option :value="''" selected disabled hidden>Posisi</option>
                <option v-for="posisi in listPosisi" v-bind:key="posisi.id" :value="posisi.id"> {{posisi.nama}} </option>
            </select>
        </div>
        <div class="col-sm">
            <button type="button" class="btn btn-success" v-on:click="findByDivisiAndPosisi">Pencarian</button>
        </div>
    </div>
    <br>
    <h3 class="card-header fw-bolder primary-color text-center text-white">Daftar Lowongan</h3>
    <div class="table-responsive">
        <table class="table table-bordered" id="tabelLowongan" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Divisi</th>
                    <th>Posisi</th>
                    <th>Jenis Lowongan</th>
                    <th>Jumlah Dibutuhkan</th>
                    <th>Tugas</th>
                    <th>Status Lowongan</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in lowongan" v-bind:key="item.id">
                    <td>{{numberOfIndex(index)}}</td>
                    <td>{{listDivisi[item.idDivisi - 1].nama}}</td>
                    <td>{{listPosisi[item.idPosisi - 1].nama}}</td>
                    <td>{{listJenisLowongan[item.idJenisLowongan - 1].nama}}</td>
                    <td>{{item.jumlahLowongan}}</td>
                    <td>{{item.tugas}}</td>
                    <td>{{item.status}}</td>
                    <td>
                        <router-link class="btn btn-success" :to="'/pelamar/' + item.id" type="button">Detail</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</div>
</template>

<style>
html, body {
    font-family: 'Nunito', sans-serif;
}

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

.button2 {
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

.primary-color {
    background-color: #3C77BF;
}

</style>

<script>
// eslint-disable-next-line no-unused-vars
import LowonganDataService from "../services/LowonganDataService";
import PosisiDataService from "../services/PosisiDataService";
import DivisiDataService from "../services/DivisiDataService";
import JenisLowonganDataService from "../services/JenisLowonganDataService";

export default {
    name: "lowongan-list",
    data() {
        return {
            listPosisi: [],
            listJenisLowongan:[],
            listDivisi:[],
            detailLowongan: {
                id: Number,
                nama: String,
            },
            lowongan: [],
            currentLowongan: null,
            currentIndex: -1,
            jenisLowongan: '',
            posisi: '',
            divisi: '',
        };
    },
    methods: {
        retrieveLowongan() {
            LowonganDataService.getAll().then(response => {
                this.lowongan = response.data;
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        },
        retrievePosisi() {
            PosisiDataService.getAll().then(response => {
                this.listPosisi = response.data;
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        },
        retrieveDivisi() {
            DivisiDataService.getAll().then(response => {
                this.listDivisi = response.data;
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        },
        retrieveJenisLowongan() {
            JenisLowonganDataService.getAll().then(response => {
                this.listJenisLowongan = response.data;
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        },
        findByDivisiAndPosisi() {
            LowonganDataService.findByDivisiAndPosisi(this.divisi, this.posisi).then(response => {
                this.lowongan = response.data;
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
        this.retrieveLowongan();
        this.retrievePosisi();
        this.retrieveDivisi();
        this.retrieveJenisLowongan();
    }
};
</script>