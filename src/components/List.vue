<template>
  <div class="list">
    <div class="card box-shadow" v-for="(item, index) in list" :key="index">
      <div class="card-header">
        <div class="card-title h5">{{item.name}}</div>
        <div class="card-subtitle text-gray">{{item.postion}}	</div>
      </div>
      <div class="card-body">
        <p>制度描述： {{ item.rule}}</p>
        <p v-html="item.evidence"></p>
      </div>
      <div class="card-footer">
        <router-link class="c-hand" :to=" { path: `/detail`, query: item}">更多</router-link>
        <span class="text-gray">{{item.time}}</span>
      </div>
    </div>
    <div v-show="loading" class="loading loading-lg"></div>
  </div>
</template>
<script>
import fetchData from '../api/fetchData'
import parseList from '../api/dataParse'

export default {
  props: {
    url: {
      type: String,
      required: true,
    }
  },
  data () {
    return {
      list: [],
      progess: 0,
      loading: true
    }
  },
  filters: {
    clearDesc(value) {
      return value.replace(/[\（\(][\s\S]*?[\）\)]/g, '')
    }
  },
  async mounted() {
    const text = (await fetchData(this.url))
    this.list = parseList(text)
    this.loading = false
  }
}
</script>
<style lang="less">
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .card {
    width: 300px;
    border: none;
    margin: 20px;
    border-radius: 6px;
    transition: all 250ms cubic-bezier(.02, .01, .47, 1);
    .card-body {
      max-height: 200px;
      overflow: hidden;
    }
    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &:hover {
      box-shadow: 0px 1rem 2rem 0px rgba(48, 55, 66, 0.15);
      transform: translate(0,-5px);
      transition-delay: 0s !important;
    }
  }
 
}
.loading {
  margin-top: 15%;
}
</style>
