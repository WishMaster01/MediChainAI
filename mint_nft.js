require('dotenv').config(); // LOAD ENVIRONMENT VARIABLES FROM .ENV FILE
const express = require('express'); // IMPORT EXPRESS.JS FRAMEWORK
const cors = require('cors'); // IMPORT CORS MIDDLEWARE FOR HANDLING CROSS-ORIGIN REQUESTS
const {
    Client,
    PrivateKey,
    AccountId,
    TokenCreateTransaction,
    TokenType,
    TokenSupplyType,
    TokenNftInfoQuery,
    TokenMintTransaction,
    Hbar,
    AccountInfoQuery,
    AccountBalance,
    AccountBalanceQuery
} = require('@hashgraph/sdk'); // IMPORT HEDERA HASHGRAPH SDK

const app = express(); // CREATE AN EXPRESS APPLICATION INSTANCE
app.use(cors()); // APPLY CORS MIDDLEWARE TO HANDLE CROSS-ORIGIN REQUESTS
app.use(express.json()); // APPLY JSON PARSER MIDDLEWARE TO PARSE JSON REQUEST BODIES

// RETRIEVE ACCOUNT ID AND PRIVATE KEY FROM ENVIRONMENT VARIABLES
const accountIdString = process.env.MY_ACCOUNT_ID;
const privateKeyString = process.env.MY_PRIVATE_KEY;

// CONVERT ACCOUNT ID AND PRIVATE KEY STRINGS TO HEDERA SDK OBJECTS
const accountId = AccountId.fromString(accountIdString);
const privateKey = PrivateKey.fromStringED25519(privateKeyString);

// CREATE A HEDERA CLIENT INSTANCE FOR TESTNET AND SET OPERATOR ACCOUNT
const client = Client.forTestnet().setOperator(accountId, privateKey);

// API ENDPOINT TO MINT AN NFT
app.post('/api/mint-nft', async (req, res) => {
    try {
        // RETRIEVE TOKEN ID AND METADATA FROM REQUEST BODY
        const tokenId = req.body.tokenId;
        const metadata = [Buffer.from(req.body.metadata)];

        // CREATE A TOKEN MINT TRANSACTION
        const mintTx = new TokenMintTransaction()
            .setTokenId(tokenId)
            .setMetadata(metadata)
            .freezeWith(client); // FREEZE THE TRANSACTION

        // EXECUTE THE TRANSACTION AND GET THE TRANSACTION RECEIPT
        const mintSubmit = await mintTx.execute(client);
        const mintRx = await mintSubmit.getReceipt(client);

        // CHECK IF THE TRANSACTION WAS SUCCESSFUL
        if (mintRx.status.toString() === 'SUCCESS') {
            // RETRIEVE THE SERIAL NUMBER OF THE MINTED NFT
            const serial = mintRx.serials[0].toString();
            console.log(`NFT Minted Successfully with serial: ${serial}`);
            // SEND A SUCCESS RESPONSE WITH THE SERIAL NUMBER
            res.json({ success: true, serial: serial });
        } else {
            // SEND AN ERROR RESPONSE IF THE TRANSACTION FAILED
            console.error(`NFT Minting status failed: ${mintRx.status}`);
            res.status(500).json({ success: false, error: mintRx.status.toString() });
        }
    } catch (error) {
        // HANDLE ANY ERRORS THAT OCCUR DURING THE TRANSACTION
        console.error("Error Occured: ", error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// API ENDPOINT TO GET ACCOUNT BALANCE
app.get('/api/account-balance', async (req, res) => {
    try {
        // CREATE AN ACCOUNT BALANCE QUERY
        const balanceQuery = new AccountBalanceQuery().setAccountId(accountId);
        // EXECUTE THE QUERY AND GET THE ACCOUNT BALANCE
        const accountBalance = await balanceQuery.execute(client);
        // SEND A SUCCESS RESPONSE WITH THE ACCOUNT BALANCE
        res.json({ success: true, balance: accountBalance.hbars.toString() });
    } catch (error) {
        // HANDLE ANY ERRORS THAT OCCUR DURING THE QUERY
        console.error("Error Occured: ", error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// START THE EXPRESS SERVER ON PORT 5000
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
