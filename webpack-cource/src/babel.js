async function start() {
    await Promise.resolve('async is working')
}

start().then(console.log)

class Util {
    static id = Date.now()
}

console.log(Util.id)

import('lodash').then(_ => {
console.log('Lodash', _.random(0,100,true))
})