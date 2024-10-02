import {createReadStream, createWriteStream} from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import {pipeline} from "node:stream/promises";

const decompress = async () => {
    const readable = createReadStream(path.join(import.meta.dirname, './files/archive.gz'));
    const unzip = zlib.createUnzip();
    const destination = createWriteStream(path.join(import.meta.dirname, './files/fileToCompress.txt'));

    await pipeline(readable, unzip, destination);
};

await decompress();