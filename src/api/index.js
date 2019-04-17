import IcuCompanyList from './996Common/getIcuCompany'

export default [
  new IcuCompanyList('996', 'https://raw.githubusercontent.com/996icu/996.ICU/master/blacklist/README.md'),
  new IcuCompanyList('955', 'https://raw.githubusercontent.com/996icu/996.ICU/master/whitelist/README.md'),
]