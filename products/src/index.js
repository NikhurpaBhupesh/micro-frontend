import faker from 'faker'

let products = '';

const root = document.getElementById("root")

for (let index = 0; index < 10; index++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`
}

root.innerHTML = products

