<!--  -->
<template>
  <div>
    <ul :style="{ transform: `rotate(${rotates * -6}deg)` }">
      <li
       :class="{ hover: index == rotates - 1  }"
       v-for="(item, index) in secondList" :key="index">
 {{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'second',
  props: ['second'],
  data () {
    return {
      secondList: [
        '零零秒',
        '零一秒',
        '零二秒',
        '零三秒',
        '零四秒',
        '零五秒',
        '零六秒',
        '零七秒',
        '零八秒',
        '零九秒',
        '零十秒',
        '十一秒',
        '十二秒',
        '十三秒',
        '十四秒',
        '十五秒',
        '十六秒',
        '十七秒',
        '十八秒',
        '十九秒',
        '二十秒',
        '二十一',
        '二十二',
        '二十三',
        '二十四',
        '二十五',
        '二十六',
        '二十七',
        '二十八',
        '二十九',
        '三十秒',
        '三十一',
        '三十二',
        '三十三',
        '三十四',
        '三十五',
        '三十六',
        '三十七',
        '三十八',
        '三十九',
        '四十秒',
        '四十一',
        '四十二',
        '四十三',
        '四十四',
        '四十五',
        '四十六',
        '四十七',
        '四十八',
        '四十九',
        '五十秒',
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
    second (val) {
      this.rotates = val
    }
  }
}
</script>
<style scoped  lang='scss'>
ul {
  z-index: 10;
  @for $i from 1 through 60 {
    li:nth-child(#{$i}) {
      transform: rotate(#{$i * 6 * 1deg}) translateX(360rem);
    }
  }
}
</style>
