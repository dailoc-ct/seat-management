<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <SeatMap :v-if="showMap" :seat-map="seats" />
  </div>
</template>

<script lang="ts">
// import { Options, Vue } from "vue-class-component";
import SeatMap from "@/components/SeatMap.vue"; // @ is an alias to /src
import { seatMap } from "../store/index";
import { onBeforeMount, computed } from "vue";
import { Seat } from "../../public/interface/seatMap.state";

// @Options({
//   components: {
//     SeatMap,
//   },
// })
export default {
  components: {
    SeatMap,
  },
  setup() {
    const seatsMap = seatMap();
    const seats: Seat[] = [];
    onBeforeMount(() => {
      seatsMap.fetch();
      if (seatsMap.seats)
        seatsMap.seats.map(async (seat) => {
          seats.push({ ...seat, y: seat.y + 286.4 });
        });
    });
    return { seats };
  },
};
</script>
