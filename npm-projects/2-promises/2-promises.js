const {readFile, writeFile, write} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

//example of creating Promise froms cratch
// const getText = (path) => {
//     return new Promise((resolve,reject) => {
//         readFile(path, 'utf-8', (err,data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }

// getText('/home/prolab773/Projects/nodejs-course-2022/Intro/content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

// const start = async() => {
//     try{
//         const first = await getText('/home/prolab773/Projects/nodejs-course-2022/Intro/content/first.txt');
//         const second = await getText('/home/prolab773/Projects/nodejs-course-2022/Intro/content/second.txt');
//         console.log(first,second)
//     } catch(error) {
//         console.log(error);
//     }
// }

// promisify functions
// const start = async() => {
//     try{
//         const first = await readFilePromise('/home/prolab773/Projects/nodejs-course-2022/Intro/content/first.txt', 'utf-8');
//         const second = await readFilePromise('/home/prolab773/Projects/nodejs-course-2022/Intro/content/second.txt', 'utf-8');
//         await writeFilePromise(
//             '/home/prolab773/Projects/nodejs-course-2022/Intro/content/result-mind-grenade.txt',
//             `THIS IS AWESOME : ${first}, ${second}`
//             )
//         console.log(first,second)
//     } catch(error) {
//         console.log(error);
//     }
// }

// fs.promises
const start = async() => {
    try{
        const first = await readFile('/home/prolab773/Projects/nodejs-course-2022/Intro/content/first.txt', 'utf-8');
        const second = await readFile('/home/prolab773/Projects/nodejs-course-2022/Intro/content/second.txt', 'utf-8');
        await writeFile(
            '/home/prolab773/Projects/nodejs-course-2022/Intro/content/result-mind-grenade.txt',
            `AWESOME : ${first}, ${second}`,{flag:'a'}
            )
        console.log(first,second)
    } catch(error) {
        console.log(error);
    }
}

start()