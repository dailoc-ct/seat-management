<template>
  <img :src="imgSvg" />
</template>

<script>
import imgSvg from "../svg/floor.svg";

export default {
  data() {
    return {
      imgSvg,
    };
  },
};
</script>
