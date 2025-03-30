
// FOR SENDING MESSAGES TO THE PATIENT

async function main() {
    try {
        const message = await sendSMS('This is a test SMS message by MediChain AI TEAM.');
        console.log('SMS sent:', message);
    } 
    catch (error) {
        console.error('Failed to send SMS:', error);
    }
}

main();

