import fs from "node:fs/promises";
import path from "node:path";

const read = async () => {
    try {
        const fileContent = await fs.readFile(path.join(import.meta.dirname, './files/fileToRead.txt'), 'utf8');
        console.log(fileContent)
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();