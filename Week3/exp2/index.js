const readline = require('readline')
const calc = require('./calc')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const perform = (choice, a, b) => {
    switch (choice) {
        case 1:
            return calc.add(a, b)
        case 2:
            return calc.sub(a, b)
        case 3:
            return calc.mul(a, b)
        case 4:
            return calc.div(a, b)
        default:
            return 'Invalid choice'
    }
}

const start = () => {
    rl.question('Enter a number: ', (choice) => {
        choice = parseFloat(choice)
        if(choice == 5){
            console.log('Exiting calc. Bye!')
            rl.close()
            return
        }
        rl.question('Enter a no.: ', (a1) => {
            const a = parseFloat(a1)
            rl.question('Enter a no.: ', (b1)=>{
                const b = parseFloat(b1)
                console.log(perform(choice , a , b))
                start()
            })
        })
    })
}

start()