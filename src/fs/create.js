import fs from 'node:fs/promises'
import path from 'path'

const create = async () => {

    fs.open(path.join(import.meta.dirname, './files/fresh.txt'), 'wx')
        .then((fd) => fs.writeFile(fd, 'I am fresh and young'))
        .catch((err) => {
            if (err) {
                if (err.code === 'EEXIST') {
                    throw new Error('FS operation failed');
                }

                throw err;
            }
        });
};

await create();