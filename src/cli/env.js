const parseEnv = () => {
    const rssVariables = Object.keys(process.env).filter(variable => variable.startsWith('RSS_'));
    console.log(rssVariables.map((variable) => `${variable}=${process.env[variable]}`).join('; '))
};

parseEnv();