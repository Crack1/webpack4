require("babel-runtime/regenerator")
require('./main.css')
require('./index.html')

var a = async (args) => {
  const {
    a,
    b
  } = args
  await console.log('test ')
  console.log('test 22222')
}

a({
  a: 1,
  b: 2
})
