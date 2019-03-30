<template>
  <div class="list">
    <div class="head">
      <span style="width: 20%">排名</span>
      <span style="width: 60%">标题</span>
      <span style="width: 20%">赞同数</span>
    </div>
    <div class="body">
      <div class="line" v-for="(item, index) in list" :key="item.id">
        <div style="width: 15%">{{index + 1}}</div>
        <div style="width: 70%">
          <a :href="url + '?page=' + Math.ceil(index / 25)" target="blank">{{item.name | clearDesc}}</a>
        </div>
        <div style="width: 15%">{{item.score}}</div>
      </div>
    </div>
    <div class="loading" v-show="loading"></div>
  </div>
</template>
<script>
import fetchData from '../api/fetchData'

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
    this.list = (await fetchData(this.url)).features
    this.loading = false
  }
}
</script>
<style lang="less">
.list {
  display: flex;
  box-shadow: 0 0 30px 0 rgba(0,0,0,.05);
  border-radius: 8px;
  max-width: 1000px;
  flex-wrap: wrap;
  margin: 0 auto;
  .progress {
    transition: all .5s ease;
    height: 2px;
    background-color: #5b5777;
  }
  .head {
    width: 100%;
    display: flex;
    font-size: 20px;
    padding: 20px 0px;
  }
  .body {
    width: 100%;
    .line {
      color: #5b5777;
      display: flex;
      width: 100%;
      padding: 8px 0px;
    }
  }
}
.loading {
    animation: loading .5s infinite linear;
    border: .1rem solid #5755d9;
    border-radius: 50%;
    border-right-color: transparent;
    border-top-color: transparent;
    content: "";
    display: block;
    height: 1.6rem;
    left: 50%;
    margin-left: -.4rem;
    margin-top: -.4rem;
    position: absolute;
    top: 50%;
    width: 1.6rem;
    z-index: 1;
}
@keyframes loading{
  0% {
    transform:rotate(0)
  }
  100% {
    transform:rotate(360deg)
  }
}
</style>
