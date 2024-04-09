const AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {
    try {
        const { email } = JSON.parse(event.body); // Assuming email is passed in the request body

        const { SNS_TOPIC_ARN } = process.env;

        const params = {
            Message: 'Thank you for your message. We have received it and we will work on it soon.', // Message to be sent in the email
            Subject: 'Message Received to SELLPHY', // Email subject
            TopicArn: SNS_TOPIC_ARN, // SNS Topic ARN
            MessageAttributes: {
                'email': {
                    DataType: 'String',
                    StringValue: email
                }
            }
        };

        await sns.publish(params).promise();

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                  "GET, PUT, PATCH, POST, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Authorization, Content-Type",
              },
            body: JSON.stringify({
                message: 'Email sent successfully'
            })
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                  "GET, PUT, PATCH, POST, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Authorization, Content-Type",
              },
            body: JSON.stringify({
                message: 'Error sending email'
            })
        };
    }
};
