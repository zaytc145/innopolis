const path = require('node:path');
const fs = require('node:fs/promises');

const DIST_FOLDER_NAME = 'dist'

const makeDirectory = async () => {
    const folderPath = path.join('./', DIST_FOLDER_NAME);
    try {
        await fs.access(folderPath);
        console.log('Directory already exists');
    } catch (err) {
        if (err.code === 'ENOENT') {
            await fs.mkdir(folderPath);
        }
    }

}

makeDirectory()