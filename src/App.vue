<template>
  <div id="app">
    <div class="tab">
      <span
        @click="select = '996'"
        :class="{'active': select === '996'}">996</span>
      <span
        @click="select = '955'"
        :class="{'active': select === '955'}">955</span>
    </div>
    <v-list
      url="https://feathub.com/LinXueyuanStdio/996.ICU"
      v-show="select === '996'"></v-list>
    <v-list
      url="https://feathub.com/formulahendry/955.WLB"
      v-show="select === '955'"></v-list>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import List from './components/List.vue'

export default {
  name: 'app',
  data () {
    return {
      select: '996'
    }
  },
  components: {
    HelloWorld, 'v-list': List
  }
}
</script>

<style lang="less">
.tab {
  margin: 15px 0px 20px 0px;
  cursor: pointer;
  line-height: 1.7;
  span {
    margin: 0px 20px;
    cursor: pointer;
    font-size: 20px;
    position: relative;
    &.active:before {
      width: 60px;
    }
    &:before {
      width: 0px;
      height: 2px;
      background: #5b3cc4;
      position: absolute;
      content: "";
      top: 30px;
      left: 50%;
      transform: translate(-50%);
      transition: all .3s ease;
    }
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 15px auto 30px auto;
}
a {
  text-decoration: none;
  color: #5b5777;
}
</style>
