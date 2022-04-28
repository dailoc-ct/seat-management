<template>
  <div class="container">
    <my-button
      v-for="seat in seats"
      class="seat in-active p-button-raised p-button-outlined"
      :class="{ active: seat.on }"
      :key="seat"
      :style="{ left: `${seat.x}px`, top: `${seat.y}px` }"
      :label="seat.seatNumber"
    />
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
export default {
  name: "SeatMap",
  props: ["seatMap"],
  setup(props: any) {
    const seats = computed(() => {
      return props.seatMap;
    });
    return { seats };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  border: solid 2px #000;
  display: absolute;
  background-image: url("../svg/floor.svg");
  background-size: 100vh;
  height: 1205px;
  width: 762px;
}
.seat {
  min-width: 60px;
  min-height: 40px;
  position: absolute;
}
.active {
  background-color: aquamarine;
}
.un-active {
  background-color: azure;
}
</style>
