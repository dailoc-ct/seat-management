<template>
  <div class="container">
    <button
      class="seat"
      v-for="seat in seats"
      :key="seat"
      :style="{ left: `${seat.x}px`, top: `${seat.y}px` }"
    >
      {{ seat.seatNumber }}
    </button>
  </div>
</template>

<script lang="ts">
import { ref, computed, onUpdated } from "vue";
import { Seat } from "../../public/interface/seatMap.state";
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
  height: 100vh;
  display: absolute;
}
.seat {
  min-width: 50px;
  min-height: 50px;
  background: red;
  position: absolute;
}
</style>
