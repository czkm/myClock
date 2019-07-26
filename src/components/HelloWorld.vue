<template>
  <div class="home">
    <div class="year">{{year}}</div>
    <!-- 年月日 天干地支 时分秒 星期 -->
    <Month  :month="month"></Month>
    <Weekend :Weekend="Weekend"/>
        <Hour :hour="hour"></Hour>
    <Day :day="day"></Day>
    <Minute :minute="minute"></Minute>
    <Second :second="second"></Second>

<!-- <embed style="display:none" src="../../static/clock.mp3" hidden="true" autostart="true" loop="-1" > -->
  </div>
</template>

<script>
/* eslint-disable */
import Second from "@/components/Second.vue";
import Minute from "@/components/Minute.vue";
import Hour from "@/components/Hour.vue";
import Weekend from "@/components/Weekend.vue";
import Day from "@/components/Day.vue";
import Month from "@/components/Month.vue";

export default {
  name: "home",
  components: {
    Second,
    Minute,
    Hour,
    Weekend,
    Day,
    Month
  },
  data() {
    return {
      second: "",
      minute: "",
      hour: "",
      Weekend: "",
      day: "",
      month: "",
      year: "2019"
    };
  },
  methods: {
    start() {
      setInterval(() => {
        let data = new Date();
        this.year = data.getFullYear();
        this.second = data.getSeconds() + 1;
        this.minute = data.getMinutes() + 1;
        this.hour = data.getHours();
        this.Weekend = data.getDay();
        this.day = data.getDate();
        this.month = data.getMonth() + 1;
        // if (this.hour > 12) {
        //   this.apm = 2
        // } else {
        //   this.apm = 1
        // }
        // console.log(data)
      }, 1000);
    }
  },

  created() {
    this.start();
    console.log("别问 问就是没做移动端适配");
  }
};
</script>
<style lang="scss">
$rem: 32rem;
.home {
  ul,
  .year {
    color: #fff;
    list-style-type: none;
    padding: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 60rem;
    width: 60rem;
    font-size: 16rem;

    // transform-origin: center bottom;
    // transform-origin: top left;
    transition: 0.1s 0.1s ease-in;
    // background-color: red;

    li {
      position: absolute;
      height: 60rem;
      width: 60rem;
      color: #fff;
      text-align: center;
      line-height: 60rem;
      font-size: 14rem;
      // 高亮
      &.hover {
        text-shadow: #ff6666 0rem 0rem 10rem, #ff9900 0rem 0rem 20rem,
          #ff99cc 0rem 0rem 30rem, #66cccc 0rem 0rem 40rem,
          #ff99cc 0rem 0rem 70rem, #ccff66 0rem 0rem 80rem,
          #ff99cc 0rem 0rem 100rem;
      }
    }
  }
}
.year {
  z-index: 99;
  text-align: center;
  line-height: 60rem;
}
</style>
