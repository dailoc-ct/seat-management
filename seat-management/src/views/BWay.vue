<template>
  <div class="container">
    <upload-file @upload-file="upload"></upload-file>
    <div v-if="showMap" class="background">
      <template v-if="checkSeats">
        <button
          v-for="seat in seats"
          :key="seat.x"
          :style="{ left: seat.x, top: seat.y }"
          class="test-button"
        >
          A
        </button>
      </template>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import UploadFile from "@/components/UploadFile.vue";
import { result } from "../test-convert/convert-svg.ts";

@Options({
  components: {
    "upload-file": UploadFile,
  },
})
export default class BWay extends Vue {
  data() {
    return {
      seats: [],
      leftValue: "0px",
      topValue: "0px",
      showMap: false,
    };
  }
  async mounted() {
    await this.checkConvert();
  }

  get checkSeats() {
    return this.seats && this.seats.length > 0;
  }

  async upload(file) {
    console.log("check file", file);
    this.showMap = true;
  }
  async checkConvert() {
    const seatMap = result.svg[0].g[0].rect;
    await this.findSeat(seatMap);
  }
  async findSeat(seatMap) {
    const scaleX = 1642 / 1205;
    const scaleY = 1032 / 762;
    seatMap.map((seat) => {
      const object = seat._attributes;
      if (object.height === 80 && object.width === 80) {
        const positionValue = {
          x: object.x / scaleX + 10 + "px",
          y: object.y / scaleY + 78.4 + 8 + 45 + "px",
        };
        this.seats.push(positionValue);
      }
    });
  }
}
</script>
<style scoped lang="css">
.container {
  display: absolute;
}
.background {
  background-size: 100vh;
  height: 1205px;
  width: 762px;
  background-image: url("../svg/floor.svg");
}
.test-button {
  position: absolute;
  color: red;
}
</style>
