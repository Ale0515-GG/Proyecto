const accountSid = 'AC87661a0234caeaa92fe7560d770b5803';
const authToken = '[AuthToken]';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'Esta lalo contigo?',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+5214281701228'
    })
    .then(message => console.log(message.sid))
    .done();

const sendMessage = async(req,res)=>{
    try{
        const {} = req.body;

    }catch(error){
        console.log(error)
    }
}

module.exports ={
    sendMessage
}