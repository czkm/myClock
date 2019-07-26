<!--  -->
<template>
  <div>
  <ul :style="{ transform: `rotate(${rotates * -51.428}deg)` }">
      <li
      :class="{ hover: index == rotates - 1 }"
       v-for="(item, index) in weekList" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  props: ['Weekend'],
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
      ],
      rotates: ''
    }
  },
  watch: {
    Weekend (val) {
      this.rotates = val
    }
  }
}
</script>
<style scoped  lang='scss'>
ul {
  z-index: 5;
  @for $i from 1 through 7 {
    li:nth-child(#{$i}) {
      transform: rotate(#{$i * 360/7 * 1deg}) translateX(130rem);
    }
  }
}
</style>
