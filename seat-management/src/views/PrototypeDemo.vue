<template>
  <div class="home">
    <upload-file @upload-file="upload"></upload-file>
    <my-button
      v-for="seat in seats"
      class="seat in-active p-button-raised p-button-outlined"
      :class="{ active: seat.on }"
      :key="seat"
      :style="{ left: `${seat.x}px`, top: `${seat.y}px` }"
      :label="seat.seatNumber"
      @click="openModal(seat)"
    />
    <ModalInfo :v-if="isShow" :seat-info="seatInfo" @close="close" />
  </div>
</template>

<script lang="ts">
import ModalInfo from "@/components/ModalInfo.vue";
import { seatMap } from "../store/index";
import UploadFile from "@/components/UploadFile.vue";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { Seat } from "../../public/interface/seatMap.state";

export default {
  components: {
    ModalInfo,
    "upload-file": UploadFile,
  },
  setup() {
    const seatsMap = seatMap();
    const shap = ref();
    let seatInfo: Seat | any = null;
    let isShow = false;
    const upload = (file: any) => {
      shap.value = seatsMap.uploadFile(file);
    };
    const seats = computed(() => {
      return shap.value;
    });
    const openModal = (seat: any) => {
      console.log("show");

      isShow = true;
      seatInfo = seat;
    };
    const close = () => {
      isShow = false;
    };
    return { upload, seats, openModal, isShow, seatInfo };
  },
};
</script>
<style scoped>
.seat {
  position: absolute;
  min-width: 80px;
  min-height: 80px;
}
.active {
  background-color: aquamarine;
}
</style>
