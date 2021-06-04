<template>

  <input type="file" @change="fileUpload(fieldName,$event.target.files)">

</template>

<script>
import S3 from 'aws-s3';
export default {
  computed: {
    config(){
      return {
        bucketName: 'rsk-hrsiapkerja',
        dirName: this.directory,
        region: 'ap-southeast-1',
        accessKeyId: "AKIA3F5YAG375STJAMGH",
        secretAccessKey: "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",
        s3Url: this.baseURL
      }
    },
    baseURL(){
      return 'uploadFile'
    },
    S3Client(){
      return new S3(this.config);
    },
    newFileName(){
      return Math.random().toString().slice(2)
    },
    url(){
      return `${this.baseURL}/${this.directory}/${this.newFileName}`;
    }
  },
  name: "fileUpload",
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
    props:["fieldName",'obj','directory']

  }
}
</script>

<style scoped>

</style>