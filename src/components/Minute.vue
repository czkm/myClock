<!--  -->
<template>
  <div>
    <ul :style="{ transform: `rotate(${rotates * -6}deg)` }">
      <li v-for="(item, index) in minuteList" :key="index"
 :class="{ hover: index == rotates - 1  }"
      >{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'minute',
  props: ['minute'],
  data () {
    return {
      minuteList: [
        '零零分',
        '零一分',
        '零二分',
        '零三分',
        '零四分',
        '零五分',
        '零六分',
        '零七分',
        '零八分',
        '零九分',
        '零十分',
        '十一分',
        '十二分',
        '十三分',
        '十四分',
        '十五分',
        '十六分',
        '十七分',
        '十八分',
        '十九分',
        '二十分',
        '二十一',
        '二十二',
        '二十三',
        '二十四',
        '二十五',
        '二十六',
        '二十七',
        '二十八',
        '二十九',
        '三十分',
        '三十一',
        '三十二',
        '三十三',
        '三十四',
        '三十五',
        '三十六',
        '三十七',
        '三十八',
        '三十九',
        '四十分',
        '四十一',
        '四十二',
        '四十三',
        '四十四',
        '四十五',
        '四十六',
        '四十七',
        '四十八',
        '四十九',
        '五十分',
        '五十一',
        '五十二',
        '五十三',
        '五十四',
        '五十五',
        '五十六',
        '五十七',
        '五十八',
        '五十九'
      ],
      rotates: ''
    }
  },
  watch: {
    minute (val) {
      this.rotates = val
    }
  }
}
</script>
<style scoped  lang='scss'>
ul {
  z-index: 9;
  @for $i from 1 through 60 {
    li:nth-child(#{$i}) {
      transform: rotate(#{$i * 6 * 1deg}) translateX(300px);
    }
  }
}
</style>
