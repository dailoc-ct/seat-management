<template>
  <div class="workspace">
    <my-button
      v-for="seat in seatMap"
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
  name: "LineMap",
  props: ["seats"],
  setup(props: any) {
    const seatMap = computed(() => {
      return props.seats;
    });
    return { seatMap };
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
