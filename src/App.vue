<template>
  <div class="home">
    <ul class="tab tab-block">
      <li class="tab-item" :class="{'active': select === '996'}">
        <a @click="select = '996'" >996</a>
      </li>
      <li class="tab-item" :class="{'active': select === '955'}">
        <a @click="select = '955'">955</a>
      </li>
    </ul>
    <v-list
      url="https://raw.githubusercontent.com/996icu/996.ICU/master/blacklist/README.md"
      v-show="select === '996'"></v-list>
    <v-list
      url="https://raw.githubusercontent.com/996icu/996.ICU/master/whitelist/README.md"
      v-show="select === '955'"></v-list>
  </div>
</template>

<script>
import List from './components/List.vue'

export default {
  name: 'home',
  data () {
    return {
      select: '996'
    }
  },
  components: {
    'v-list': List
  }
}
</script>

<style lang="less">
.home>.tab {
  margin: 15px auto 20px auto;
  cursor: pointer;
  line-height: 1.7;
  width: 300px;
  .tab-item {
    a {
      transition: all .3s ease;
    }
  }
}

.box-shadow {
  box-shadow: 0 0.25rem 1rem rgba(48,55,66,.15);
}
</style>
