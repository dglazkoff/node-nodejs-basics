import { fork } from 'node:child_process';
import path from "node:path";

const spawnChildProcess = async (args) => {
    fork(path.join(import.meta.dirname, './files/script.js'), args);
};

// Put your arguments in function call to test this functionality
await spawnChildProcess( ['someArgument1', 'someArgument2']);
