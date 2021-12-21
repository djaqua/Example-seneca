const Seneca = require('seneca');


const app = new Seneca();

app.use('lilplugies/greeter_plugin', {recipient: 'world'});

app.add('exampleKey1:math,exampleKey2:sum', (msg, reply) => {
    reply( null, {answer: (msg.left + msg.right)} );
});




app.act({exampleKey1: 'math', exampleKey2: 'sum', left: 1, right: 2}, (err, result) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(result);
});

app.act('say:hi', Seneca.util.print);
app.act('say:bye', Seneca.util.print);
