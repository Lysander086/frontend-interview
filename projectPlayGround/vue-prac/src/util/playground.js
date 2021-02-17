async function test() {
  return Promise.resolve("res");
}

async function newTest () {
  return new Promise(resolve => {
    resolve("from new")
  })

}

!(async function () {
  let res = await newTest();
  console.log(res);
})();
