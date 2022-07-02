const { readFile, writeFile, write } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf-8', (err,result)=>{
    if(err){
        console.log(err)
        return
    }
    //console.log(result)
    const first = result
    readFile('./content/second.txt', 'utf-8', ()=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-sync.txt',
            `Here is the result : ${first}, ${second}`,
            {flag: 'a'}
            , (err, result)=> {
                if(err){
                    console.log(err)
                    return
                }
                console.log('done with this task')
            })
    })
})
console.log('starting nect task')
