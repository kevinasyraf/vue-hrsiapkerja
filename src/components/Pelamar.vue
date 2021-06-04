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
                            <select v-model="idLowongan" class="form-control" disabled>
                                <option v-for="item in listLowongan" v-bind:key="item.id" :value="item.id" > {{listDivisi[item.idDivisi - 1].nama}} </option>
                            </select>
                        </div>
                    </div><br>
                    <div class="row">
                        <div class="col">Posisi</div>
                        <div class="col">
                            <select v-model="idLowongan" class="form-control" disabled>
                                <option v-for="item in listLowongan" v-bind:key="item.id" :value="item.id" > {{listPosisi[item.idPosisi - 1].nama}} </option>
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
                            <select name="status" class="form-control form-select" v-model="pelamarStatus">
                                <option value="1" selected disabled hidden>Screening</option>
                                <option value="2">Interview</option>
                                <option value="3">Additional Assignment</option>
                                <option value="4">Rejected</option>
                                <option value="5">Negotiation</option>
                                <option value="6" selected disabled hidden>Declined</option>
                                <option value="7" selected disabled hidden>Hired</option>
                            </select>
                        </div>
                    </div><br>
                    <div class="row" v-if="pelamarStatus==3">
                        <div class="col">Kode Unik</div>
                        <div class="col">
                           <p>{{pelamarKodeUnik}}</p>
                        </div>
                    </div><br>
                    <div class="row" v-if="pelamarStatus==6 || pelamarStatus==7">
                        <div class="col">Catatan</div>
                        <div class="col">
                             <p>{{pelamarCatatan}}</p>
                        </div>
                    </div><br>
                    <div class="row">
                        <div class="col">CV</div>
                        <div class="col">
                            <textarea class="form-control" id="cv" rows="3" name="cv" v-model="cv" readonly/>
                        </div>
                    </div><br>
                    <div class="row">
                        <div class="col">Tugas 1</div>
                        <div class="col">
                            <textarea class="form-control" id="tugas1" rows="3" name="tugas1" v-model="submisi" readonly/>
                        </div>
                    </div><br>
                    <div class="row">
                        <div class="col">Tugas 2</div>
                        <div class="col">
                            <textarea class="form-control" id="tugas2" rows="3" name="tugas2" v-model="submisiTambahan" readonly/>
                        </div>
                    </div><br>
                    <a class="btn btn-primary float-end" style="margin-right: 30px" href="/pelamar" role="button">Kembali</a>
                    <a class="btn btn-success float-end" style="margin-right: 10px" role="button" data-toggle="modal" data-target="#ubahStatusModal">Simpan</a>


                    <div class="modal fade" id="ubahStatusModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                            <a role="button" class="btn btn-success" :href="'/pelamar/' + pelamarId" @click="updateStatus"
                            v-if="pelamarStatus==1 || pelamarStatus==2 || pelamarStatus==4 || pelamarStatus==5 ||
                            pelamarStatus==6 || pelamarStatus==7">Ya</a>
                            <a role="button" data-toggle="modal" data-target="#kodeUnikModal" data-dismiss="modal" class="btn btn-success" :href="'/pelamar/' + pelamarId" @click="createKodeUnik"
                            v-if="pelamarStatus==3">Ya</a>
                            <a role="button" class="btn btn-secondary" data-dismiss="modal">Tidak</a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="modal fade" id="kodeUnikModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header text-center" v-bind:style="{ backgroundColor: color}">
                                    <h5 class="modal-title w-100" id="exampleModalLongTitle">Kode Unik</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <h5>Kode Unik Tugas Tambahan Pelamar dengan ID {{pelamarId}} : {{uuid}} </h5>
                                </div>
                                <div class="modal-footer">
                                    <a role="button" class="btn btn-success" :href="'mailto:' + pelamarEmail">Kirim Email</a>
                                    <a role="button" class="btn btn-secondary" data-dismiss="modal">Tidak</a>
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
import DivisiDataService from "../services/DivisiDataService";
import PosisiDataService from "../services/PosisiDataService";
import { uuid } from 'vue-uuid' // Import uuid

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
         pelamarCatatan: '',
         pelamarKodeUnik: '',
         idLowongan: '',
         cv:'',
         submisi: '',
         listKesesuaian : [],
         listStatus : [],
         listLowongan: [],
         listDivisi: [],
         listPosisi: [],
         message: '',
         color : '#3C77BF',
         uuid: uuid.v1(),
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
             this.pelamarCatatan = response.data.catatan;
             this.pelamarKodeUnik = response.data.kodeUnik;
             this.idLowongan = response.data.idLowongan;
             this.cv = response.data.cv;
             this.submisi = response.data.submisi;
             this.submisiTambahan = response.data.submisiTambahan;
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

        getDivisi(){
            DivisiDataService.getAll()
                .then(response => {
                  this.listDivisi = response.data;
                })
                .catch(e => {
                  console.log(e);
            });
        },

        getPosisi(){
            PosisiDataService.getAll()
                .then(response => {
                    this.listPosisi = response.data;
                })
                .catch(e => {
                    console.log(e);
                });
        },

       updateStatus() {
             var data = {
               idStatus: this.pelamarStatus,
             };

             PelamarDataService.update(this.pelamarId, data)
               .then(response => {
                 console.log(response.data);
                 this.message = 'The tutorial was updated successfully!';
               })
               .catch(e => {
                 console.log(e);
               });
           },

        createKodeUnik() {
            var data = {
                idStatus: this.pelamarStatus,
                kodeUnik: this.uuid,
            };
            PelamarDataService.update(this.pelamarId, data)
            .then(response => {
                console.log(response.data);
                this.message = 'The tutorial was updated successfully!';
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
    this.getDivisi();
    this.getPosisi();
    this.updateStatus();
   }
};
//post method atau get
</script>

<style scoped>
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
.btn {
    padding: 4px 20px !important ;
    text-align: center;
    text-decoration: none;
    display: inline-block;
}
</style>