import React, { useState } from 'react';

const App = () => {
  // STATE VARIABLE TO STORE THE PHONE NUMBER ENTERED BY THE USER.
  const [phoneNumber, setPhoneNumber] = useState('');
  // STATE VARIABLE TO STORE THE MESSAGE ENTERED BY THE USER.
  const [message, setMessage] = useState('');
  // STATE VARIABLE TO STORE THE RESPONSE MESSAGE FROM THE SERVER.
  const [responseMessage, setResponseMessage] = useState('');

  // ASYNC FUNCTION TO SEND SMS TO THE SERVER.
  const sendSMS = async () => {
    try {
      // MAKING A POST REQUEST TO THE SERVER ENDPOINT.
      const response = await fetch('http://127.0.0.1:8000/send_sms', {
        method: 'POST',
        // SETTING THE CONTENT TYPE OF THE REQUEST HEADER.
        headers: {
          'Content-Type': 'application/json',
        },
        // CONVERTING THE PHONE NUMBER AND MESSAGE TO JSON AND SENDING IT IN THE REQUEST BODY.
        body: JSON.stringify({ phoneNumber, message }),
      });

      // PARSING THE JSON RESPONSE FROM THE SERVER.
      const data = await response.json();
      // SETTING THE RESPONSE MESSAGE STATE WITH THE MESSAGE RECEIVED FROM THE SERVER.
      setResponseMessage(data.message);
    } catch (error) {
      // HANDLING ANY ERRORS THAT OCCUR DURING THE FETCH REQUEST.
      console.error('Error sending SMS:', error);
      // SETTING THE RESPONSE MESSAGE STATE TO INDICATE AN ERROR.
      setResponseMessage('Error sending SMS.');
    }
  };

  return (
    <div>
      {/* INPUT FIELD FOR PHONE NUMBER. */}
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        // UPDATING THE PHONE NUMBER STATE WHEN THE INPUT VALUE CHANGES.
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      {/* INPUT FIELD FOR MESSAGE. */}
      <input
        type="text"
        placeholder="Message"
        value={message}
        // UPDATING THE MESSAGE STATE WHEN THE INPUT VALUE CHANGES.
        onChange={(e) => setMessage(e.target.value)}
      />
      {/* BUTTON TO TRIGGER THE SEND SMS FUNCTION. */}
      <button onClick={sendSMS}>Send SMS</button>
      {/* DISPLAYING THE RESPONSE MESSAGE FROM THE SERVER. */}
      <p>{responseMessage}</p>
    </div>
  );
};

export default App;
