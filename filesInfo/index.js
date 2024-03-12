const fs = require('node:fs/promises');
const path = require('node:path');

const formatDateParam = (dateParam) => {
    return dateParam < 10 ? `0${dateParam}` : dateParam;
}

const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${formatDateParam(day)}.${formatDateParam(month)}.${year}`;
}

const getSize = async (filePath) => {

}

const readDirectoryData = async (directoryPath) => {
    try {
        const items = await fs.readdir(directoryPath);

        let result = 'имя файла | размер | дата создания\n';

        for (const item of items) {
            const itemPath = path.join(directoryPath, item);
            const stats = await fs.stat(itemPath);
            const fileName = item;
            const fileSize = stats.size;
            const fileCreationDate = formatDate(stats.birthtime);

            result += `${fileName} | ${fileSize} bytes | ${fileCreationDate}\n`;
        }
        console.log(result)
        return result;
    } catch (error) {
        return `Ошибка при чтении директории: ${error.message}`;
    }
}

readDirectoryData('./test')