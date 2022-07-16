var http = require('http')
var fs = require('fs')

const filePath = '/home/prolab773/Projects/nodejs-course-2022/npm-projects/4-streams/big.txt'

http
    .createServer((req,res) => {
        // const text = fs.readFileSync(filePath, 'utf-8')
        // res.end(text)
        const fileStream = fs.createReadStream(filePath, 'utf-8')
        fileStream.on('open', () => {
            fileStream.pipe(res)
        })
        fileStream.on('error', (err) => {
            res.end(err)
        })
    })
    .listen(5000)