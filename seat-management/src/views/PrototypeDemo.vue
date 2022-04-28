<template>
  <div class="home">
    <upload-file @upload-file="upload"></upload-file>
    <LineSeat :seats="seats" />
  </div>
</template>

<script lang="ts">
import LineSeat from "@/components/LineSeat.vue"; // @ is an alias to /src
import { seatMap } from "../store/index";
import { Seat } from "../../public/interface/seatMap.state";
import UploadFile from "@/components/UploadFile.vue";
import { computed, onBeforeMount } from "@vue/runtime-core";

export default {
  components: {
    LineSeat,
    "upload-file": UploadFile,
  },
  setup() {
    const seatsMap = seatMap();
    let seats: Seat[] = [];
    // onBeforeMount(() => {
    //   seatsMap.fetch();
    // if (seatsMap.seats) {
    //   seatsLine = seatsMap.seats.filter((seat) => seat.line);
    //     console.log(seatsLine);
    //   }
    // });
    const upload = (file: any) => {
      seatsMap.uploadFile(file);
      if (seatsMap.seats)
        seatsMap.seats.map(async (seat) => {
          seats.push({ ...seat, y: seat.y });
        });
    };
    return { seats, upload };
  },
};
</script>
