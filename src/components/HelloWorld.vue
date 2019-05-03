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
      year: ""
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
    height: 60px;
    width: 60px;
    // transform-origin: center bottom;
    // transform-origin: top left;
    transition: 0.1s 0.1s ease-in;
    // background-color: red;

    li {
      position: absolute;
      height: 60px;
      width: 60px;
      color: #fff;
      text-align: center;
      line-height: 60px;
      font-size: 14px;
      // 高亮
      &.hover {
        text-shadow: #ff6666 0px 0px 10px, #ff9900 0px 0px 20px,
          #ff99cc 0px 0px 30px, #66cccc 0px 0px 40px, #ff99cc 0px 0px 70px,
          #ccff66 0px 0px 80px, #ff99cc 0px 0px 100px;
      }
    }
  }
}
.year {
  z-index: 99;
  text-align: center;
  line-height: 60px;
}
</style>
