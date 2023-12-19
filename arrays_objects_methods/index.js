const prices = [100, 150, 200, 250]

const mapPriceToString = prices.map((price) => price + ' р')

const users = [
    ['alex', 32],
    ['tomas', 17],
    ['olga', 14],
    ['andre', 24]
]

const filteredUsers = users.filter((user) => {
    const age = user[1]
    return age > 18
})

const goods = [
    {title: 'пицца', price: 200},
    {title: 'баранина', price: 300},
    {title: 'креветки', price: 400}
]

const total = goods.reduce((acc, good) => acc + good.price, 0)
