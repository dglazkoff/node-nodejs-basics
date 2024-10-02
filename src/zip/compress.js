import zlib from 'node:zlib';
import { createReadStream, createWriteStream} from "node:fs";
import { pipeline } from 'node:stream/promises';
import path from "node:path";

const compress = async () => {
    const readable = createReadStream(path.join(import.meta.dirname, './files/fileToCompress.txt'));
    const gzip = zlib.createGzip();
    const destination = createWriteStream(path.join(import.meta.dirname, './files/archive.gz'));

    await pipeline(readable, gzip, destination);
};

await compress();