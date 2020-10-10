const doesContain = require('./validator')
const strengthCalculator = require('./counter')
let arguments = process.argv[2]
let strength = 0
let errorMsgArr = []
let statusArr = []
statusArr = doesContain(['letter', 'uppercase', 'lowercase', 'specialcharecter', 'space', 'number'], 'This is the longest password in the history along with special charecters @@##')
console.log('statusArr',statusArr)
strength = strengthCalculator(statusArr)
console.log('strength',strength)
