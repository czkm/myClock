<!--  -->
<template>
  <div>
    <ul :style="{ transform: `rotate(${rotates * -30}deg)` }">
      <li :class="{ hover: index == rotates - 1 }"
      v-for="(item, index) in monthList" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "month",
  props: ["month"],
  data() {
    return {
      monthList: [
        "一    月",
        "二    月",
        "三    月",
        "四    月",
        "五    月",
        "六    月",
        "七    月",
        "八    月",
        "九    月",
        "十    月",
        "十一月",
        "十二月"
      ],
      rotates: ""
    };
  },
  watch: {
    month(val) {
      this.rotates = val;
    }
  }
};
</script>
<style scoped  lang='scss'>
ul {
  z-index: 5;
  @for $i from 1 through 12 {
    li:nth-child(#{$i}) {
      transform: rotate(#{$i * 360/12 * 1deg}) translateX(80px);
    }
  }
}
</style>
