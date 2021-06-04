<template>

  <input type="file" @change="fileUpload(fieldName,$event.target.files)">

</template>

<script>
import S3 from 'aws-s3';
import axios from "axios";
export default {
  name: "upload",
  methods:{
    fileUpload(fieldName, files) {
      let file = files[0]
      console.log(file);
      this.isLoading = true
      this.S3Client
          .uploadFile(file, this.newFileName).finally(()=>{
        this.isLoading = false
      })
    },
    props:["fieldName",'obj','directory'],
    savePelamar(e) {
      console.log(this.paket);
      axios
          .post("https://polar-mountain-10123.herokuapp.com/api/file/", this.paket)
          .then((resp) => {
            if (resp.status == 200) {
              this.status = 2
            }
            console.warn(resp);
            // alert(resp.data)
            // this.isSubmitted = true;
          })
          .catch(err => {
            console.log(err)
            this.status = 3
          });

      e.preventDefault();
    },

  }
}
</script>

<style scoped>

</style>