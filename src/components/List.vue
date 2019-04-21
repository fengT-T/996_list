<template>
  <div class="list-container">
    <input type="text" class="form-input search" placeholder="公司信息搜索" v-model="filter">
    <div class="list">
      <transition-group name="list" tag="div">
        <div class="card box-shadow" v-for="(item, index) in companyListByFilter" :key="index">
          <div class="card-header">
            <div class="card-title h5">{{item.name}}</div>
            <div class="card-subtitle text-gray">{{item.postion}}	</div>
          </div>
          <div class="card-body">
            <p>制度描述： {{ item.rule}}</p>
            <p v-html="item.evidence"></p>
          </div>
          <div class="card-footer">
            <a class="c-hand" target="blank" :href="`https://utteranc.es/utterances.html?src=https://utteranc.es/client.js&repo=fengT-T/996_comment&issue-term=${item.name}&crossorigin=anonymous&theme=github-light&async=&url=https://fengt-t.github.io/996_list/&origin=https://fengt-t.github.io/996_list/&pathname=996_list&title=996List&description=${item.name}&og:title=996List`">评论</a>
            <span class="text-gray">{{item.time}}</span>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>
<script>
import { CompanyList } from  '../api/schema'

export default {
  props: {
    companyList: {
      type: CompanyList,
      required: true,
    }
  },
  data () {
    return {
      loading: true,
      filter: ''
    }
  },
  computed: {
    companyListByFilter () {
      return this.companyList.list.filter(company =>
        Object.values(company).some(value =>
          value.includes(this.filter)))
    }
  },
  async mounted() {
    await this.companyList.getData()
    this.loading = false
  }
}
</script>
<style lang="less">
.list-container {
  .search {
    width: 25%;
    margin: 0 auto;
    min-width: 300px;
  }
  .listenter, .list-leave-to {
    transform: translateY(-30px);
    opacity: 0;
  }
  .list-leave-active, .list-enter-active{
    transition: all .3s cubic-bezier(.6,.15,.3,.8);
  }
  .list-move {
    transition: transform 1s;
  }
  .list>div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0px 15px;
    
    .card {
      width: 300px;
      border: none;
      margin: 20px;
      border-radius: 6px;
      transition: all 250ms cubic-bezier(.02, .01, .47, 1);
      word-break: break-all;
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
}

</style>
