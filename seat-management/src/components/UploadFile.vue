/* eslint-disable */
<template>
  <div>
    <label>File </label>
    <input
      ref="files"
      id="files"
      type="file"
      @change="onFileChanged()"
      accept="image/*"
    />
    <br />
    <button @click="submitFile()">OK</button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class UploadFile extends Vue {
  private fileUpload: string | unknown = "";
  submitFile() {
    let formData = new FormData();
    formData.append("file", this.fileUpload as string);
    this.$emit("upload-file", formData);
  }
  onFileChanged() {
    this.fileUpload = this.$refs.files;
  }
}
</script>

<style scoped></style>
