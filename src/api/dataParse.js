import MarkdownIt from 'markdown-it'

export class Company {
  constructor(line) {
    const [, postion,  nameMd, time, rule, evidenceMd]
     = line.split('|')
    const md = new MarkdownIt()
    Object.assign(this, {
      postion,  nameMd, time, rule, evidenceMd,
      name: nameMd.match(/\[([\s\S]+?)\]/)[1], // 提取 [华为] 中的 华为名字
      evidence: md.render(evidenceMd)
    })
  }
}

export default function parseList (mdStr) {
  const listStr = mdStr.match(/名单列表\s+---\n([\s\S]+)\|/)[1] // 把列表抓出来
  const body = listStr.trim().split('\n').slice(2)
  return body.map(bodyStr => new Company(bodyStr))
} 
