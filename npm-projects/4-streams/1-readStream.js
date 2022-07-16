//uncomment to write big file
//
const filePath = '/home/prolab773/Projects/nodejs-course-2022/npm-projects/4-streams/big.txt'
// const { writeFileSync } = require('fs')
// for (let i = 0; i < 100000; i++) {
//     writeFileSync(`${filePath}`, `hello, world ${i}\n`, { flag: 'a'})
// }

const { createReadStream } = require('fs')



// default 54kb
// last buffer - remainder
// highWaterMark - control size
//const stream = createReadStream(`${filePath}`, {highWaterMark:90000})
//const stream= createReadStream(`${filePath}`, { encoding: 'utf-8'})
const stream = createReadStream(`${filePath}`, {
    highWaterMark: 90000, 
    encoding: 'utf-8'
})

stream.on('data', (result) =>{
    console.log(result)
})

stream.on('error', (err) => {
    console.log(err)
})
