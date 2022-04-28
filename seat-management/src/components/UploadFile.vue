/* eslint-disable */
<template>
  <div>
    <label>File </label>
    <input ref="files" id="files" type="file" @change="onFileChanged" />
    <br />
    <button @click="submitFile()">OK</button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class UploadFile extends Vue {
  private fileUpload: any = null;
  submitFile() {
    const formData = new FormData();
    formData.append("image", this.fileUpload, this.fileUpload.name || "unkown");
    this.$emit("upload-file", formData);
  }
  onFileChanged(event: any) {
    this.fileUpload = event.target.files[0];
  }
}
</script>

<style scoped></style>
