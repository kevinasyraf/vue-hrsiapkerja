<template>
<div class ="container-fluid" style="margin: 88px,350px,350px">
    <div class="container">
        <div class="card mt-3 mx-auto w-50">
            <div class="card-header text-center" v-bind:style="{ backgroundColor: color}">
                Detail Pelamar
            </div>
            <div class="card-body" >
                    <div class="row">
                        <div class="col">Nama</div>
                        <div class="col">
                            <input type="text" class="form-control" id="nama" v-model="pelamarName" readonly/>
                        </div>
                    </div><br>
                    <div class="row">
                        <div class="col">Email</div>
                        <div class="col">
                            <input type="text" class="form-control" id="email" v-model="pelamarEmail" readonly/>
                        </div>
                    </div><br>
                    <div class="row">
                        <div class="col">Nomor Telepon</div>
                        <div class="col">
                            <input type="text" class="form-control" id="noTelepon" v-model="pelamarNoTlp" readonly/>
                        </div>
                    </div><br>
                    <div class="row">
                        <div class="col">Divisi</div>
                        <div class="col">
                            <input type="text" class="form-control" readonly/>
                        </div>
                    </div><br>
                    <div class="row">
                        <div class="col">Posisi</div>
                        <div class="col">
                            <input type="text" class="form-control" readonly/>
                        </div>
                    </div><br>
                    <div class="row">
                        <div class="col">Kesesuaian</div>
                        <div class="col">
                            <select v-model="pelamarKesesuaian" class="form-control" disabled>
                                <option v-for="item in listKesesuaian" v-bind:key="item.id" :value="item.id" > {{item.nama}} </option>
                            </select>
                        </div>

                    </div><br>
                    <div class="row">
                        <div class="col">Status Pelamar</div>
                        <div class="col">
                            <select name="status" class="form-control" v-model="pelamarStatus">
                                <option v-for="item in listStatus" v-bind:key="item.id" :value="item.id"> {{item.nama}} </option>
                            </select>
                        </div>
                    </div><br>
                    <div class="row">
                        <div class="col">CV</div>
                        <div class="col">

                        </div>
                    </div><br>
                    <div class="row">
                        <div class="col">Tugas 1</div>
                        <div class="col">

                        </div>
                    </div><br>
                    <div class="row">
                        <div class="col">Tugas 2</div>
                        <div class="col">

                        </div>
                    </div><br>
                    <button type="button" class="btn btn-primary float-end">Kembali</button>
                    <button type="button" class="btn btn-success float-end mr-1">Simpan</button>
                </div>
            </div>
    </div>
</div>
</template>

<script>
import PelamarDataService from "../services/PelamarDataService";
import KesesuaianDataService from "../services/KesesuaianDataService";
import StatusDataService from "../services/StatusDataService";
import ApplyDataService from "../services/ApplyDataService";

export default {
   name: 'pelamar',
   data() {
       return {
         pelamarName : '',
         pelamarEmail : '',
         pelamarNoTlp : '',
         pelamarKesesuaian : '',
         pelamarStatus : '',
         listKesesuaian : [],
         listStatus : [],
         listApply : [],
         message: '',
         color : '#3C77BF'
       };
   },
   methods: {
       getPelamar(id) {
         PelamarDataService.get(id)
           .then(response => {
             this.pelamarName = response.data.nama;
             this.pelamarEmail = response.data.email;
             this.pelamarNoTlp = response.data.nomorTelepon;
             this.pelamarKesesuaian = response.data.idKesesuaian;
             this.pelamarStatus = response.data.idStatus;
             console.log(response.data);
           })
           .catch(e => {
             console.log(e);
           });
       },

       getKesesuaian(){
        KesesuaianDataService.getAll()
            .then(response => {
                this.listKesesuaian = response.data;
            })
            .catch(e => {
                console.log(e);
            });
       },

       getStatus(){
        StatusDataService.getAll()
            .then(response => {
                this.listStatus = response.data;
            })
            .catch(e => {
                console.log(e);
            });
        },

        getApply(){
            ApplyDataService.getAll()
                .then(response => {
                    this.listApply = response.data;
                })
                .catch(e => {
                    console.log(e);
            });
       },

   },
   mounted() {
    this.message = '';
    this.getPelamar(this.$route.params.id);
    this.getKesesuaian();
    this.getStatus();
   }
};
//post method atau get
</script>

<style>
html, body {
    font-family: 'Nunito', sans-serif;
}
.card-header {
    color: #fff;
    font-weight: 700;
    font-size : 20px;
}
</style>