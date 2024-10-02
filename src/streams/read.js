import {createReadStream} from "node:fs";
import path from "node:path";

const read = async () => {
    const readable = createReadStream(path.join(import.meta.dirname, './files/fileToRead.txt'));

    readable.pipe(process.stdout);
};

await read();