let User = require('../models/User')

const data = [new User('Kent', 12), new User('Bob', 30), new User('Rose', 24)]

const forIn = (objs) => {
  console.log(`Object arrays: ${objs}`)
  for (let i in objs) {
    console.log(`index: ${i}`)
    console.log(`obj item : ${JSON.stringify(objs[i])}`)
    console.log(`obj item name: ${objs[i]._name}`)
  }
}

const convertByMap = (objs) => {
  const names = objs.map(user => {
    return user._name
  })
  console.log(`Convert user list To name list ${names}, size:${names.length}`)
}

const start = () => {
  forIn(data)
  convertByMap(data)
}

module.exports = {
  start,
}