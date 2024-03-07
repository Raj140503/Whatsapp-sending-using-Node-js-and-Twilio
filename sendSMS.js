const accountSid = 'ACe9386551619f8edc6c0d6077727bf303';
const authToken = '7aee99c35cffe8b4c94ac23372049106';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'Hola amigo!',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+919689492748'
    })
    .then(message => console.log(message.sid))
    .catch(error => console.error(error));
