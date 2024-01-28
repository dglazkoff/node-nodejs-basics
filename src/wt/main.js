import { Worker } from 'node:worker_threads'
import path from 'node:path'
import os from "node:os";

const mapPromiseStatus = {
    'fulfilled': 'resolved',
    'rejected': 'error',
}

const performCalculations = async () => {
    const cpuNumb = os.cpus().length;
    const START_NUMBER = 10;

    const workerPromises = Array.from({ length: cpuNumb }, (value, index) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(path.join(import.meta.dirname, './worker.js'));

            worker.postMessage(START_NUMBER + index);
            worker.on('message', resolve);
            worker.on('error', reject);
        })
    });

    const results = await Promise.allSettled(workerPromises);
    console.log(results.map(result => ({
        status: mapPromiseStatus[result.status],
        data: result.status === 'fulfilled' ? result.value : null
    })));
};

await performCalculations();