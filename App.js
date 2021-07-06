const myModule=require('./Log')
const getConstants=require('./Constants')

getConstants.ProductID='UMA'
 console.log(getConstants.ProductID)
 console.log(getConstants.ClientID)

console.log(myModule.info("this is a basic information"))
console.log(myModule.warning("This is a gentle warning"))
console.log(myModule.error("This is error"))
