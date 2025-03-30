// FOR REQUIRING THE DOTENV FILE AND CONFIG THEM
require('dotenv').config();


//  TWILIO APP DETAILS
const accounSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

//  CREATING A CLIENT
const client = require('twilio') (accounSid, authToken);

//  FUNCTION TO SEND SMS USING TWILIO
const sendSMS = async (body) => {
    let msgOption = {
        from: process.env.TWILIO_FROM_NUMBER,
        to: process.env.TWILIO_TO_NUMBER,
        body,
    };

    try {
        const message = await client.messages.create(msgOption);
        console.log("TWILIO Message send successfully.", message);
        return message; // IF  MESSAGE IS RETURN AS AN OBJECT
    }
    catch (error) {
        console.error("Error generated during sending messages.", error);
        throw error; // RETHROWING THE ERROR FOR HANDING IN THE MAIN SCRIPT
    }
};

module.exports = {
    sendSMS,
};


