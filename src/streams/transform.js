import { Transform } from "node:stream";

const transform = async () => {
    const transform = new Transform({
        transform(chunk, encoding, callback) {
            // trim убирает переносы строк
            const reversedChunk = chunk.toString().trim().split('').reverse().join('');

            callback(null, reversedChunk + '\n');
        },
    });

    process.stdin.pipe(transform).pipe(process.stdout);
};

await transform();