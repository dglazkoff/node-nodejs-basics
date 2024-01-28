import fs from 'node:fs/promises';
import path from "node:path";

const remove = async () => {
    try {
        await fs.rm(path.join(import.meta.dirname, './files/fileToRemove.txt'))
    } catch (err) {
        console.log(err);
        throw new Error('FS operation failed')
    }
};

await remove();