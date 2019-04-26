<!--  -->
<template>
  <div>
    <ul>
      <li v-for="(item, index) in weekList" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      weekList: [
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六',
        '星期日'
      ]
    }
  }
}
</script>
<style scoped  lang='scss'>
ul {
  z-index: 5;
  @for $i from 1 through 7 {
    li:nth-child(#{$i}) {
      transform: rotate(#{$i * 360/7 * 1deg}) translateX(180px);
    }
  }
}
</style>
