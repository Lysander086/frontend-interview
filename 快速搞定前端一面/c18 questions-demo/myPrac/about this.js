const User = {
  count: 1,
  getCount: function () {
    return this
  }
}

console.log('User.getCount(): ', User.getCount())
const func = User.getCount
console.log('func(): ', func())
