export default function fetchData(url){
  if (url === 'https://feathub.com/LinXueyuanStdio/996.ICU') {
    return import('./996.ICU')
  } else if (url === 'https://feathub.com/formulahendry/955.WLB') {
    return import('./955.WLB')
  }
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url + '?format=json')
    xhr.responseType = 'json'
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 400) {
        resolve(xhr.response)
      } else {
        reject(xhr)
      }
    }
    xhr.onerror = reject
    xhr.send()
  })
}