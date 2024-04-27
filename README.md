## Shop Ease

Shopease dedicated to facilitating the purchase of mobile phones with a user-friendly interface and robust security measures. The program is designed to offer a smooth and convenient shopping experience to a wide variety of users, including both tech enthusiasts and casual shoppers. We will examine the features and functionalities of this platform in this report, highlighting its main goals, intended audience, and performance standard.
This project uses multiple AWS services and is a cloud-native solution. The development of a safe, effective backend system and a responsive front-end application are included in the project's scope to guarantee a consistent user experience from start to finish

## Componenent Description


### Amazon Lambda: 
Functions: Amazon Lambda functions are used to handle requests and manage backend logic. They oversee connections with other AWS services like DynamoDB and run code in response to triggers (such HTTP requests via API Gateway) that will be made from the users end.
Application: Lambda functions are used to perform CRUD actions on orders and items. In order to store and retrieve data, they interact with DynamoDB, process data, and respond to user requests through API gateway.

### AWS API Gateway 
Functions: API Gateway is to provide as a point of entry for the frontend to access backend services. It controls the RESTful endpoints and forwards HTTP requests to the relevant Lambda functions. 
Application: A primary API is created and managed using API Gateway: It handles every backend logic namely authorization,getting Items, submitting order etc. It guarantees effective and safe communication between the Lambda functions and the front end as well as operation with different services provided in AWS[5].

### Amazon DynamoDB: 
Functions: DynamoDB is a NoSQL database service that offers smooth scaling along with quick and reliable performance. Application data is stored and retrieved via it. 
Application: There are multiple tables which are used for storing information that is authentication,orders,contact information, orders history information[4].

### Amazon S3 (Simple Storage Service) 
Functions: Offer web-based, scalable, fast object storage services for analytics, archiving, and backup data. 
Application: Utilized to store documents like images and bills and invoice etc.

### Amazon SNS (Simple Notification Service):
Functions: Facilitate the delivery of messages to clients and endpoints who have subscribed to them. It is a email notifications and pub/sub messaging solution that is completely managed and configurable from the server side.
Application: Used to notify users of updates to their Query, including changes in status or critical alerts.

### AWS Key Management Service (KMS):
Function: The completely managed service AWS KMS makes it simple to generate and manage the encryption keys that are used to encrypt data. It offers a reliable and safe method for handling encryption keys, enabling the encryption of private information and shielding it from unwanted access.
Application: Used to encrypt user passwords in order to protect their privacy and security. Passwords are protected using industry-standard encryption techniques when utilizing AWS KMS, lowering the possibility of data breaches and illegal access to user accounts

### Elastic Cloud Compute (EC2): 
Function: EC2 enables the deployment and administration of server instances in the AWS cloud by offering scalable computing capability. 
Application: Serves as the front-end application's host. The built-in React application is served by an EC2 instance, allowing users to access it online[6].

## Security Groups:
Functions: As a virtual firewall, regulating incoming and outgoing traffic, for example. 
Application: Configured to control access to EC2 instances and other services and permit traffic on specified ports (such as HTTP/HTTPS for web access and SSH for secure admin access).


## System Architecture
![Picture1](https://github.com/Kapadiatathya/TermAssignment/assets/72372720/ab2bfa8a-63a0-488f-b3a5-b59fb8eaa48a)



![Picture2](https://github.com/Kapadiatathya/TermAssignment/assets/72372720/9a82982e-4947-4617-93d1-fa83f5f56ad9)

