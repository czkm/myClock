<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {},
  methods: {
    isMobile() {
      console.log( document.documentElement.clientWidth)
      if ( document.documentElement.clientWidth  <= 800) {
        console.log("121231313123");
        return true; // 移动端
      } else {
        return false; // PC端
        console.log("456456456");
      }
    },

    setrem() {
      document.documentElement.style.fontSize =
        document.documentElement.clientWidth / 750 + "px";
    }
  },
  mounted() {
    let flag = this.isMobile();
    if (flag) {
    //   console.log(a);
    this.isMobile()
      this.setrem();
    } else {
      document.documentElement.style.fontSize = 1 + "px";
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  min-height: 0;
  min-width: 0;
}
*:focus {
  outline: none;
}
body {
  overflow: hidden;
  background: #000;
}
</style>
