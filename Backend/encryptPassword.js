const AWS = require('aws-sdk');
const kms = new AWS.KMS();
const dynamodb = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = "Users";

exports.handler = async (event) => {
    try {
        let { email, password } = event; // Assuming the password and email are passed in the event payload

        // Check if event.body is a string and parse it
        if (event.body && typeof event.body === "string") {
            const eventData = JSON.parse(event.body);
            email = eventData.email;
            password = eventData.password;
        }

        // Retrieve user from DynamoDB
        const user = await getUserByEmail(email);

        // Check if user exists and password is correct
        if (user && await verifyPassword(password, user.password)) {
            return { 
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, PUT, PATCH, POST, DELETE, OPTIONS",
                    "Access-Control-Allow-Headers": "Authorization, Content-Type",
                },
                body: JSON.stringify({ message: 'Login successful' }) 
            };
        } else {
            return { 
                statusCode: 401,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, PUT, PATCH, POST, DELETE, OPTIONS",
                    "Access-Control-Allow-Headers": "Authorization, Content-Type",
                },
                body: JSON.stringify({ message: 'Invalid email or password' }) 
            };
        }
    } catch (error) {
        console.error('Error:', error);
        return { 
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, PUT, PATCH, POST, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Authorization, Content-Type",
            },
            body: JSON.stringify({ message: 'Internal server error' }) 
        };
    }
};

async function verifyPassword(plainPassword, encryptedPassword) {
    // Decrypt password using KMS
    const decryptedPassword = await decryptPassword(encryptedPassword, process.env.KMS_KEY_ARN);

    // Compare passwords
    return plainPassword === decryptedPassword;
}

async function decryptPassword(encryptedPassword, kmsKeyArn) {
    const params = {
        CiphertextBlob: Buffer.from(encryptedPassword, 'base64'),
        KeyId: kmsKeyArn 
    };

    const decryptedData = await kms.decrypt(params).promise();
    return decryptedData.Plaintext.toString();
}

async function getUserByEmail(email) {
    const params = {
        TableName: TABLE_NAME,
        Key: { Email: email }
    };

    const { Item } = await dynamodb.get(params).promise();
    return Item;
}
