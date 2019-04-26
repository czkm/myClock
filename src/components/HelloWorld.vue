<template>
  <div class="home">
    <!-- <Second :second="second" />
    <Minute :minute="minute" />
    <Hour :hour="hour" />
    <Apm :apm="apm" />
    <Week :week="week" />
    <Day :day="day" />-->
    <!-- <Month :month="month" />
    <Setting />-->
    <div class="year">2019</div>
    <!-- 年月日 天干地支 时分秒 星期 -->
    <Month></Month>
    <Day></Day>
    <Hour></Hour>
    <Minute></Minute>
    <Second></Second>

    <!-- <Weekend></Weekend> -->
  </div>
</template>

<script>
import Second from '@/components/Second.vue'
import Minute from '@/components/Minute.vue'
import Hour from '@/components/Hour.vue'
// import Apm from "@/components/Apm.vue";
import Weekend from '@/components/Weekend.vue'
import Day from '@/components/Day.vue'
import Month from '@/components/Month.vue'
// import Setting from '@/components/setting'

export default {
  name: 'home',
  components: {
    Second,
    Minute,
    Hour,
    // Apm,
    Weekend,
    Day,
    Month
    // Setting
  },
  data () {
    return {
      second: '',
      minute: '',
      hour: '',
      apm: '',
      Weekend: '',
      day: '',
      month: ''
    }
  },
  methods: {
    start  () {
      setInterval(() => {
        let data = new Date()
        this.second = data.getSeconds()
        this.minute = data.getMinutes()
        this.hour = data.getHours()
        this.week = data.getDay()
        this.day = data.getDate()
        this.month = data.getMonth() + 1
        // if (this.hour > 12) {
        //   this.apm = 2
        // } else {
        //   this.apm = 1
        // }
        // console.log(data)
      }, 1000)
    }
  },
  created () {
    this.start()
  }
}
</script>
<style lang="scss">
.home {
  ul,
  .year {
    list-style-type: none;
    padding: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 60px;
    width: 60px;
    transform-origin: top left;
    transition: 0.1s 0.1s ease-in;
    background-color: red;

    li {
      position: absolute;
      height: 60px;
      width: 60px;
      color: #fff;
      text-align: center;
      line-height: 60px;
      font-size: 14px;
    }
  }
}
.year {
  z-index: 99;
  text-align: center;
  line-height: 60px;
}
</style>
