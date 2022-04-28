<template>
  <div></div>
</template>

<script lang="ts">
import { computed, ref, watch } from "vue";
// import { seatMap } from "../store/index";

export default {
  name: "LineSeat",
  props: ["seatMap"],
  setup(props: any) {
    // const seatsMap = seatMap();
    // const seats: any = seatsMap.seats;
    // watch(seats, () => {
    //   console.log("check watch");

    //   return seats;
    // });
    // const a = computed(() => {
    //   return seats;
    // });
    // return { seats, a };
    const seats = ref(props.seatMap);
    const seatMapper = computed(() => {
      console.log("check");

      return seats;
    });
    return { seatMapper, seats };
  },
};
</script>
