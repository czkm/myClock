<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
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
