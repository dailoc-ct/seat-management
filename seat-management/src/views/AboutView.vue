<template>
  <div class="container">
    <div class="background">
      <strong
        class="test-button"
        :style="{ left: leftValue, top: topValue }"
        :key="left"
      >
        o
      </strong>
    </div>
  </div>
</template>

<script>
import { result } from "../test-convert/convert-svg.ts";
export default {
  async created() {
    await this.checkConvert();
  },
  data() {
    return {
      leftValue: "0px",
      topValue: "0px",
    };
  },
  // computed: {
  //   leftValue() {
  //     return this.left;
  //   },
  //   topValue() {
  //     return this.top;
  //   },
  // },
  methods: {
    async checkConvert() {
      const seatMap = result.svg.g.path;
      await this.findSeat(seatMap);
    },
    async findSeat(seatMap) {
      // seatMap.map(ele=>{

      // })
      const scaleX = 2463 / 1080;
      const scaleY = 1212 / 530;
      const object = seatMap[101]._attributes.d;
      const MValue = object
        .slice(object.indexOf("M") + 2, object.indexOf("L") - 1)
        .split(" ");
      console.log(scaleX, scaleY, MValue[0] / scaleX, MValue[1] / scaleY);
      this.leftValue = MValue[0] / scaleX + "px";
      this.topValue = MValue[1] / scaleX + 78.4 + 8 + "px";
    },
  },
};
</script>
<style scoped lang="css">
.container {
  display: absolute;
}
.background {
  background-size: 1080px;
  height: 530px;
  width: 1080px;
  background-image: url("../svg/example.drawio.svg");
}
.test-button {
  position: absolute;
  color: red;
}
</style>
