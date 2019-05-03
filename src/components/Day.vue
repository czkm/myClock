<!--  -->
<template>
  <div>
    <ul :style="{ transform: `rotate(${rotates * -11.613}deg)` }">
      <li
      :class="{ hover: index == rotates - 1  }"
      v-for="(item, index) in dayList" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'day',
  props: ['day'],
  data () {
    return {
      dayList: [
        '一号',
        '二号',
        '三号',
        '四号',
        '五号',
        '六号',
        '七号',
        '八号',
        '九号',
        '十号',
        '十一号',
        '十二号',
        '十三号',
        '十四号',
        '十五号',
        '十六号',
        '十七号',
        '十八号',
        '十九号',
        '二十号',
        '二十一号',
        '二十二号',
        '二十三号',
        '二十四号',
        '二十五号',
        '二十六号',
        '二十七号',
        '二十八号',
        '二十九号',
        '三十号',
        '三十一号'
      ],
      rotates: ''
    }
  },

  watch: {
    day (val) {
      this.rotates = val
      console.log(this.rotates)
    }
  }
}
</script>
<style scoped  lang='scss'>
ul {
  z-index: 6;
  @for $i from 1 through 31 {
    li:nth-child(#{$i}) {
      transform: rotate(#{$i * 360/31 * 1deg}) translateX(180px);
    }
  }
}
</style>
