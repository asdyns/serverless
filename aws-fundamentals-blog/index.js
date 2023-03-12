exports.handler = async (event, context) => {
    const name = process.env.AWS_LAMBDA_FUNCTION_NAME;
    const memory = process.env.AWS_LAMBDA_FUNCTION_MEMORY_SIZE;
    const loggroup = process.env.AWS_LAMBDA_LOG_GROUP_NAME;
    console.log(`Function '${name}' has '${memory}' MB of memory and logs are going to ${loggroup}`);
    return { name, memory, loggroup };
}