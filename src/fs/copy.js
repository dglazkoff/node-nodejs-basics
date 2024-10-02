import fs from 'node:fs/promises'
import path from "node:path";

const copy = async () => {
    try {
        const baseDir = path.join(import.meta.dirname, './files');
        const files = await fs.readdir(baseDir);

        const targetDir = path.join(import.meta.dirname, './files_copy');
        await fs.mkdir(targetDir);

        for (const file of files) {
            await fs.copyFile(path.join(baseDir, file), path.join(targetDir, file), fs.constants.COPYFILE_EXCL)
        }
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await copy();
