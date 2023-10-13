const accountSid = 'AC87661a0234caeaa92fe7560d770b5803';
const authToken = '[AuthToken]';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'mensaje',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+5214281701228'
    })
    .then(message => console.log(message.sid))
    .done();

const sendMessage = async(req,res)=>{
    try{
        const { number, message } = req.body;

        const response = await client.messages.create({
           body: message, 
           from: 'whatsapp:+5214281701228', //numero de la clinica   
           to: `whatsapp:${number}` 
        });

        console.log(response);

        res.json({
            msg: 'Mensaje enviado correctamente'
        });

    }catch(error){
        console.log(error);
        res.status(500).json({
            msg: 'Error al enviar mensaje'
        });
    }
}

module.exports ={
    sendMessage
}