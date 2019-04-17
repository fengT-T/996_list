import MarkdownIt from 'markdown-it'
import {Company, CompanyList} from '../schema'
import fetchData from './fetchData'
import targetBlank from '../../lib/markitLink'
export default class IcuCompanyList extends CompanyList{
  constructor (name, url) {
    super (name)
    this.url = url
  }
  async getData () {
    const mdStr = await fetchData(this.url)
    this.list = parseList(mdStr, this.url)
  }
}

function parseList (mdStr, url) {
  const relatePath = url.match(/^.*\//)[0]
  const listStr = mdStr.match(/名单列表\s+---\n([\s\S]+)\|/)[1] // 把列表抓出来
  const body = listStr.trim().split('\n').slice(2)
  const list = []
  for (const line of body) {
    try {
      const [, postion,  nameMd, time, rule, evidenceMd] = line.split('|')
      const md = new MarkdownIt()
      targetBlank(md)
      const name = nameMd.match(/\[([\s\S]+?)\]/)[1]// 提取 [华为] 中的 华为名字
      let evidence = md.render(evidenceMd || '')
      evidence = evidence.replace(/(<a href=")(.*?)("[\s\S]+?)/g, (_, p1, p2, p3) => {
        if (!/^\/|http:\/\/|https:\/\//.test(p2)) {
          p2 = relatePath + p2
        }
        return p1 + p2 + p3
      })
      list.push(new Company(postion, name, time, rule, evidence))
    } catch {
      console.log(line + '行匹配错误')
    }
  }
  return list
}