import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import path from "node:path";

const calculateHash = async () => {
    const hash = createHash('sha256');

    const input = createReadStream(path.join(import.meta.dirname, './files/fileToCalculateHashFor.txt'));
    input.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();