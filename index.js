async function handler(event, context) {
    console.info(`Received event: ${JSON.stringify(event)}`);
    console.info(`Received context: ${JSON.stringify(context)}`)
    return { Status: 'Ok!' };
}

modules.exports = { handler }