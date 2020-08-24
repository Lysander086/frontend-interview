const xhr = new XMLHttpRequest()
xhr.open('POST', '/login', true)
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      // console.log(JSON.parse(xhr.responseText))
      alert(xhr.responseText)
    } else if (xhr.status === 404) {
      console.log('404 not found')
    }
  }
}

const postData = {
  userName: 'zs',
  password: 'xxx'
}

xhr.send(JSON.stringify(postData))


// 使用promise封装
function ajax(url, mappingMethod = 'GET') {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', '/login', true)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(xhr.responseText)
      } else if (xhr.status === 404) {
        console.log('404')
      }
    }
    xhr.send(null)
  })
}
