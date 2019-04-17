export default function fetchData(url){
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
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