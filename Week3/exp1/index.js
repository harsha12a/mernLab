const fs = require('fs')

let path = './sample.txt'

fs.readFile(path, 'utf-8', (err, data) => {
    try{
        console.log(data)
    }
    catch(e){
        console.log(e)
    }
})

fs.writeFile(path, 'Hello', (err) => {
    if(err) console.log(err)
    console.log('File written successfully')
})

fs.appendFile(path, ' World', (err) => {
    if(err) console.log(err)
    console.log('File appended successfully')
})

fs.unlink(path, (err) => {
    if(err) console.log(err)
    console.log('File deleted successfully')
})