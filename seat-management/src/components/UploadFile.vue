/* eslint-disable */ // eslint-disable-next-line
<template>
  <div>
    <label>File </label>
    <input
      ref="file"
      type="file"
      @change="onFileChanged($event)"
      accept="image/*"
    />
    <br />
    <button @click="submitFile()">OK</button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class UploadFile extends Vue {
  name: "UploadFile";

  fileUpload: "";
  //   onFileChanged() {
  //     this.fileUpload = this.$refs.file.files[0];
  //   }
  submitFile() {
    let formData = new FormData();
    formData.append("file", this.fileUpload);
    this.$emit("upload-file", formData);
  }
}
</script>

<style scoped></style>
