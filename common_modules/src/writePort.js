const fs = require('node:fs/promises');

const createPortFile = async () => {
    const portVal =  process.env.PORT;
    const text = `environment variable PORT = ${portVal}`
    try {
        await fs.writeFile('./dist/port.txt', text)
    } catch (err) {
        console.log(err)
    }
}

createPortFile()