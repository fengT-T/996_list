<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="less">
.box-shadow {
  box-shadow: 0 0.25rem 1rem rgba(48,55,66,.15);
}

</style>
