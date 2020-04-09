function sayHi() {
    console.log('Hi')
    console.log(this)
}

const person = {
    name: 'John Jude',
    age: 23,

    sayHello() {
        const { name, age } = this
        console.log(this)
        console.log(`the name is ${name} and the age is ${age}`)
    },

    imhere: () => {
        console.log(this)
    }
}

const outsideHello = person.sayHello