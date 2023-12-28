function Dog(name, breed) {
    this.name = name
    this.breed = breed
}

Dog.prototype.bark = function () {
    console.log('Woof!')
}

Dog.prototype.getInfo = function () {
    console.log('name:', this.name)
    console.log('breed:', this.breed)
}

const dog = new Dog('dog', 'labrador')

dog.bark()
dog.getInfo()

const counter = (defaultVal = 0) => {
    let value = defaultVal;
    return () => {
        console.log(++value)
    }
}

const increment = counter(3)

increment()
increment()
increment()
increment()
increment()
increment()
increment()

const getBeersGroupedByAbv = async () => {
    const response = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=50')
    const beers = await response.json()
    return beers.filter(beer => beer.abv > 7)
        .map((beer) => ({
            name: beer.name,
            description: beer.description,
            abv: beer.abv
        }))
        .reduce((acc, beer) => {
            const beersByAbv = acc[beer.abv] ?? []
            return {
                ...acc,
                [beer.abv]: [...beersByAbv, beer]
            }
        }, {});
}

getBeersGroupedByAbv().then((beers) => console.log(beers))
