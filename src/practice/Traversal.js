const forIn = (objs) => {
  console.log(`Object arrays: ${objs}`)
  for (let i in objs) {
    console.log(`index: ${i}`)
    console.log(`obj item : ${JSON.stringify(objs[i])}`)
    console.log(`obj item name: ${objs[i]._name}`)
  }
}

module.exports = {
  forIn,
}