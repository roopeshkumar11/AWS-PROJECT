import json
import boto3
import base64

s3 = boto3.client('s3')
BUCKET_NAME = 'image-store-from-user'

def lambda_handler(event, context):
    try:
        # Extract the file content and file name from the request body
        body = json.loads(event['body'])
        file_content = base64.b64decode(body['file_content'])
        file_name = body['file_name']
        
        # Upload the file to S3
        s3.put_object(Bucket=BUCKET_NAME, Key=file_name, Body=file_content)
        
        return {
            'statusCode': 200,
            'body': json.dumps('File uploaded successfully!')
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps(f'Error uploading file: {str(e)}')
        }
