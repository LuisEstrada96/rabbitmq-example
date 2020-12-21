const amqp = require("amqplib/callback_api");
const CONN = "amqp://localhost";

let CH;

amqp.connect(CONN, (err, conn) => {
    conn.createChannel((error, channel) => {
        CH = channel;
        consumer();
    })
})

function publishToQueue (queue, msg) {
    CH.sendToQueue(queue, Buffer.from(msg), { persistent: true } );
}

function consumer(){
    CH.consume('messages', ( msg ) => {
        handleConsume(msg)
        .then(()=>{
            CH.ack(msg);
        })
        .catch( err => CH.nack(msg))
    })
}

function handleConsume(payload){
    return new Promise(function (resolve, reject) { 
        setTimeout(() => {
            console.log('-------');
            console.log(`Msg: ${ payload.content }`)
            return resolve();
        }, 2000)
    });
}

var stdin = process.openStdin();

stdin.addListener("data", (data) => {
    publishToQueue('messages', data);
});

