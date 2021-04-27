<template>
<div class="container mt-5">
    <a class="btn btn-outline-warning" href="/tambahlowongan" role="button">Tambah Lowongan</a>
    <br><br>
    
    <div class="form-group" style="margin-bottom: 5%;"> 
        <label class="col-sm-4 col-form-label"> Jenis Lowongan<span style="color: red"></span> </label>
        <select v-model="detailLowongan.jenisLowongan">
            <option>  </option>
            <option value="1"> Menggantikan </option>
            <option value="2"> Menambah Baru </option>
        </select>
    </div>
    
    <div class="form-group" style="margin-top: 5%;">
           <label class="col-sm-4 col-form-label"> Posisi<span style="color: red"></span> </label>
            <select v-model="detailLowongan.idPosisi">
               <option v-for="item in listPosisi" v-bind:key="item.id" :value="item.id"> {{item.nama}} </option>
           </select>
           <button v-on:click="filterPosisi">Cari</button>
    </div>

    

    <br><br>
    <h2>Daftar Lowongan</h2>
    <br><br>
    
    <div class="table-responsive">
        <table class="table table-bordered" id="tabelLowongan" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>Divisi</th>
                    <th>Posisi</th>
                    <th>Jenis Lowongan</th>
                    <th>Jumlah Dibutuhkan</th>
                    <th>Tugas</th>
                    <th>Status Lowongan</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in lowongan" v-bind:key="item.id">
                            <td>{{item.idDivisi}}</td>
                            <td>{{item.idPosisi}}</td>
                            <td>{{item.jenisLowongan}}</td>
                            <td>{{item.jumlahLowongan}}</td>
                            <td>{{item.tugas}}</td>
                            <td>{{item.status}}</td>
                        </tr>
                    </tbody>
        </table>
    </div>

</div>
</template>

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

</style>

<script>
// eslint-disable-next-line no-unused-vars
import LowonganDataService from "../services/LowonganDataService";
import axios from "axios";
export default {
    name: "lowongan-list",
    data() {
        return {
            listPosisi: [],
            listJenisLowongan:[],
            detailLowongan: {
                id: Number,
                nama: String,
            },
            lowongan: [],
            currentLowongan: null,
            currentIndex: -1,
            jenisLowongan : '',
            posisi : '',
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
        filterJenisLowongan() {
            LowonganDataService.findByJenisLowongan(this.jenisLowongan).then(response => {
                this.lowongan = response.data;
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        },
        filterPosisi() {
            LowonganDataService.findByPosisi(this.posisi).then(response => {
                this.lowongan = response.data;
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        },
    },
    mounted() {
        this.retrieveLowongan();
        this.filterJenisLowongan();
        this.filterPosisi();
        axios.get("http://localhost:4000/api/posisi/") //ganti APInya 
        .then((resp) => {
            console.warn(resp.data);
            this.listPosisi =resp.data;
        });
    }
};
</script>