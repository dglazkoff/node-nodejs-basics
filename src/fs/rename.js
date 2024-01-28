import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from "node:path";

const rename = async () => {
    try {
        const destFile = path.join(import.meta.dirname, './files/properFilename.md');

        if (existsSync(destFile)) {
            throw new Error('properFilename.md exists');
        }

        await fs.rename(path.join(import.meta.dirname, './files/wrongFilename.txt'), destFile)
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await rename();