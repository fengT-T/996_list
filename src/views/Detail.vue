<template>
  <div class="container">
    <div class="detail">
      <h3>{{name}}</h3>
      <p>地点： {{postion}}</p>
      <p>制度描述： {{ rule}}</p>
      <span>证据内容：</span>
      <p v-html="evidence"></p>
      <p>曝光时间： {{time}}</p>
    </div>
    <div id="comments"></div>
  </div>
</template>
<script>
import 'gitment/style/default.css'
import Gitment from 'gitment'

export default {
  props: ['postion', 'name', 'time', 'rule', 'evidence'],
  mounted() {
    const gitment = new Gitment({
      owner: 'fengT-T',
      repo: '996_comment',
      oauth: {
        client_id: 'f17be8d11424c4d56a14',
        client_secret: '17a9b479170142ab4145666fac08de34285d6dfb',
      },
    })
    gitment.render(document.getElementById('comments'))
  }
}
</script>
<style lang="less">
.detail {
  margin: 0 auto;
}
</style>
