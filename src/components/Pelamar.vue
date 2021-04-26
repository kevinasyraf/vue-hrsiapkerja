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

                            <select v-model="pelamarId" class="form-control" disabled>
                                <option v-for="item in listLowongan" v-bind:key="item.id" :value="item.id"> {{item.idDivisi}} </option>
                            </select>
                        </div>
                    </div><br>
                    <div class="row">
                        <div class="col">Posisi</div>
                        <div class="col">

                            <select v-model="pelamarId" class="form-control" disabled>
                                <option v-for="item in listLowongan" v-bind:key="item.id" :value="item.id" > {{item.posisi}} </option>
                            </select>
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
                    <button type="button" class="btn btn-success float-end mr-1" data-toggle="modal" data-target="#exampleModalCenter">Simpan</button>

                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                          <div class="modal-header text-center" v-bind:style="{ backgroundColor: color}">
                            <h5 class="modal-title w-100" id="exampleModalLongTitle">Confirmation Page</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">

                            Apakah Anda yakin akan mengubah status pelamar Ini?
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-success">Ya</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Tidak</button>
                          </div>
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
import StatusDataService from "../services/StatusDataService";
import LowonganDataService from "../services/LowonganDataService";


export default {
   name: 'pelamar',
   data() {
       return {
         pelamarId : '',
         pelamarName : '',
         pelamarEmail : '',
         pelamarNoTlp : '',
         pelamarKesesuaian : '',
         pelamarStatus : '',
         listKesesuaian : [],
         listStatus : [],
         message: '',
         color : '#3C77BF'
       };
   },
   methods: {
       getPelamar(id) {
         PelamarDataService.get(id)
           .then(response => {
             this.pelamarId = response.data.id;
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

       getLowongan(){
        LowonganDataService.getAll()
            .then(response => {
                this.listLowongan = response.data;
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
    this.getLowongan();
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
.modal-title{
    color: #fff;
    font-weight: 700;
    font-size : 20px;
}
.btn-success{
    background-color: #2ECC71;
}
.btn-primary{
    background-color: #3C77BF;
}
.btn-secondary{
    background-color : #E74C3C;
}
</style>