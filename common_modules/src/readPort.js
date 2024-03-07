const fs = require('node:fs/promises');

const readPortFile = async () => {
    try {
        const data = await fs.readFile('./dist/port.txt', 'utf8')
        console.log(data);
    } catch (err) {
        console.log(err)
    }
}

readPortFile()