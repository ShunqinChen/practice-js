let User = require('../models/User')
/**
 * @Title: 遍历 测试
 * @Description:
 *
 * @Author Shunqin.Chen
 * @Date 2020年06月29日 17:19
 */


const data = [new User('Kent', 12), new User('Bob', 30), new User('Rose', 24)]
const dataNoOrder = [{ name: 'Kent' }, { age: 12 }, { sex: 'Female' }]

/**
 * for in 测试
 * */
const forIn = (objs) => {
  console.log(`Object arrays: ${objs}`)
  for (let i in objs) {
    console.log(`index: ${i}`)
    console.log(`obj item : ${JSON.stringify(objs[i])}`)
    console.log(`obj item name: ${objs[i]._name}`)
  }
}

/***
 * Map 遍历测试
 * */
const convertByMap = (objs) => {
  const names = objs.map(user => {
    return user._name
  })
  console.log(`Convert user list To name list ${names}, size:${names.length}`)
}

/**
 * 遍历不规则数组
 * */
const iterateNoOrder = (objs) => {
  objs.forEach((item) => {
    console.log(`item :${item}`)
    for (let key in item) {
      console.log(`item key:${key}. value:${item[key]}`)
    }
  })
}

const start = () => {
  forIn(data)
  convertByMap(data)
  iterateNoOrder(dataNoOrder)
}

module.exports = {
  start,
}