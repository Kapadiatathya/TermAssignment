const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  console.log("Received event:", JSON.stringify(event, null, 2));

  try {
    let eventData = event;

    // Check if event.body is a string and parse it
    if (event.body && typeof event.body === "string") {
      eventData = JSON.parse(event.body);
    }
    console.log(eventData)

    const dataContact = {
      TableName: "ContactUs",
      Item: eventData,
    };

    await dynamoDB.put(dataContact).promise();
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, PUT, PATCH, POST, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Authorization, Content-Type",
      },
      body: JSON.stringify({ message: "Your Email Has been recorded!" }),
    };
  } catch (error) {
    console.error("Error processing request:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST",
      },
      body: JSON.stringify({ error: error.message || "An error occurred" }),
    };
  }
};