<template>
  <div>
    {{ seatWatch }}
    <div v-if="seatInfo" class="visible">
      <h3>Seat Info</h3>
      <prim-input type="text" v-model="seat.line" />
      <prim-input type="text" v-model="seat.seatNumber" />
      <prim-input type="text" v-model="seat.x" />
      <prim-input type="text" v-model="seat.y" />
    </div>
  </div>
</template>
<script lang="ts">
import { computed, ref, watch } from "vue";
export default {
  name: "ModalInfo",
  props: ["seatInfo"],
  setup(props: any) {
    const seat = ref(props.seatInfo);
    console.log("here");
    const seatWatch = computed(() => {
      return props.seatInfo;
    });
    watch(
      props.seatInfo,
      (seat) => {
        console.log("seat");

        seatWatch;
      },
      { deep: true }
    );
    return { seat, seatWatch };
  },
};
</script>
<style scoped>
.visible {
  z-index: 1000000;
}
</style>
