import { parentPort } from 'node:worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

parentPort.on('message', (value) => {
    sendResult(value)
})

const sendResult = (value) => {
    const result = nthFibonacci(value)

    parentPort.postMessage(result);
    process.exit();
};