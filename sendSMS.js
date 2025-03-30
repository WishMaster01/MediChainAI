require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const app = express();
app.use(cors());
app.use(bodyParser.json());

const sendSMS = async (to, body) => {
    try {
        const message = await client.messages.create({
            from: process.env.TWILIO_FROM_NUMBER,
            to: to,
            body: body,
        });
        console.log('TWILIO Message sent successfully.', message);
        return { success: true, message: 'SMS sent successfully.' };
    } catch (error) {
        console.error('Error generated during sending messages.', error);
        return { success: false, message: 'Error sending SMS.' };
    }
};

app.post('/send_sms', async (req, res) => {
    const { phoneNumber, message } = req.body;
    const result = await sendSMS(phoneNumber, message);
    res.json(result);
});

const port = 8000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

