import plugin, { Data, type APrime, default as plugin2 } from 'cjs-types-mixed-declarations-fixture'
// const plugin = require('cjs-types-mixed-declarations-fixture')
import DefaultClass, { default as DefaultClass2 } from 'cjs-types-mixed-declarations-fixture/defaultclass'
import value, { default as value2, type A } from 'cjs-types-mixed-declarations-fixture/defaultconst'

const instance = new DefaultClass(
    { name: 'a' },
    { name: 'b' },
    { name: 'c' },
)

const b = value[0]

const a = Data[0]

const prime: APrime = {
    name: 'a',
}

const options = plugin({
    a: { name: 'a' },
    b: { name: 'b' },
    c: { name: 'c' },
})

console.log(value)
console.log(value[0])
console.assert(value[0] === 'a')

