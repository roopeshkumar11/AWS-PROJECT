import json
import boto3
import os

# Initialize the SNS client
sns_client = boto3.client('sns')

def lambda_handler(event, context):
    # Extract any necessary data from the event
    message = "Data-upload-successfully"
    
    # Get SNS topic ARN from environment variable
    sns_topic_arn = os.environ['SNS_TOPIC_ARN']
    
    # Publish message to SNS
    response = sns_client.publish(
        TopicArn=sns_topic_arn,
        Message=message
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('Message sent to SNS topic!')
    }
