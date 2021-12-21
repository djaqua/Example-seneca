
module.exports = function greeter_plugin(options) {
    
    const {
        recipient,
    } = options;

    this.add('say:hi', (msg, reply) => {
        reply({response: `Hello, ${recipient}!`});
    });

    this.add('say:bye', (msg, reply) => {
        reply({response: `Goodbye, ${recipient} :)`});
    });

};
