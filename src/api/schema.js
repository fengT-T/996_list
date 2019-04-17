export class Company {
  constructor(postion, name, time, rule, evidence) {
    Object.assign(this, {
      postion, name, time, rule, evidence
    })
  }
}

export class CompanyList {
  constructor (name) {
    Object.assign(this, {list: [], name})
  }

  async getData () {
    throw new Error("you should rewrite this function");
  }
}