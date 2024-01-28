import fs from 'node:fs/promises'
import path from "node:path";

const list = async () => {
    try {
        const files = await fs.readdir(path.join(import.meta.dirname, './files'));
        console.log(files)
    } catch (err) {
        throw new Error('FS operation failed');
    }

};

await list();