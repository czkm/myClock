<!--  -->
<template>
  <div>
    <ul :style="{ transform: `rotate(${rotates * -15}deg)` }">
      <li
       :class="{ hover: index == rotates - 1 }"
       v-for="(item, index) in hourlist" :key="index" >{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hour',
  props: ['hour'],
  data () {
    return {
      hourlist: [
        '零一时',
        '零二时',
        '零三时',
        '零四时',
        '零五时',
        '零六时',
        '零七时',
        '零八时',
        '零九时',
        '十零时',
        '十一时',
        '十二时',
        '十三时',
        '十四时',
        '十五时',
        '十六时',
        '十七时',
        '十八时',
        '十九时',
        '二十时',
        '二十一时',
        '二十二时',
        '二十三时',
        '二十四时'
      ],
      rotates: ''
    }
  },
  watch: {
    hour (val) {
      this.rotates = val
    }
  }
}
</script>
<style scoped  lang='scss'>
ul {
  z-index: 8;
  @for $i from 1 through 24 {
    li:nth-child(#{$i}) {
      transform: rotate(#{$i *15 * 1deg}) translateX(240px);
    }
  }
}
</style>
