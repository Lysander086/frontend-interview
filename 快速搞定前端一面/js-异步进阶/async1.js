const src1 = 'http://www.imooc.com/static/img/index/logo_new.png'
const src2 = 'https://www.imooc.com/static/img/index/logo.png'

!(async function () {
  const img1 = await loadImg(src1)
  console.log(img1.height, img1.width)


})()
