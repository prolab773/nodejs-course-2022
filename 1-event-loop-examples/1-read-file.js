const { readFile } =  require('fs')

console.log('started a first task')
// CHECK FILE PATH!!!!
readFile('/home/prolab773/Projects/nodejs-course-2022/Intro/content/first.txt','utf-8', (err,result) => {
    if(err){
        console.log(err)
        return
    }
    console.log(result);
    console.log('completed first task');
})
console.log('starting next task');