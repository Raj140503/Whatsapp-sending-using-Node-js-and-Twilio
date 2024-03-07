const accountSid = '...............'; Add your own accountSid from Twilio
const authToken = '................'; Add your own authToken from Twilio
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'Hola amigo!',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+919689492748'
    })
    .then(message => console.log(message.sid))
    .catch(error => console.error(error));
