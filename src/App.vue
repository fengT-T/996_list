<template>
  <div class="home">
    <ul class="tab tab-block">
      <li class="tab-item"
        :class="{'active': select === list.name}"
        v-for="list in apiList"
        :key="list.name">
        <a @click="select = list.name" >{{list.name}}</a>
      </li>
    </ul>
    <v-list
      v-for="list in apiList" :key="list.name"
      :companyList="list"
      v-show="select === list.name"></v-list>
  </div>
</template>

<script>
import List from './components/List.vue'
import apiList from './api'

export default {
  name: 'home',
  data () {
    return {
      select: '996',
      apiList
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
