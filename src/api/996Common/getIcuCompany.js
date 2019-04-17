import MarkdownIt from 'markdown-it'
import {Company, CompanyList} from '../schema'
import fetchData from './fetchData'

export default class IcuCompanyList extends CompanyList{
  constructor (name, url) {
    super (name)
    this.url = url
  }
  async getData () {
    const mdStr = await fetchData(this.url)
    this.list = parseList(mdStr)
  }
}

function parseList (mdStr) {
  const listStr = mdStr.match(/名单列表\s+---\n([\s\S]+)\|/)[1] // 把列表抓出来
  const body = listStr.trim().split('\n').slice(2)
  const list = []
  for (const line of body) {
    try {
      const [, postion,  nameMd, time, rule, evidenceMd] = line.split('|')
      const md = new MarkdownIt()
      const name = nameMd.match(/\[([\s\S]+?)\]/)[1]// 提取 [华为] 中的 华为名字
      const evidence = md.render(evidenceMd || '')
      list.push(new Company(postion, name, time, rule, evidence))
    } catch {
      console.log(line + '行匹配错误')
    }
  }
  return list
}