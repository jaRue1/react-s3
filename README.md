# Upload Image with React to Aws s3

This project is example of using react to upload images to S3.

## Perquisites

1. Create Aws Account
2. Create IAM User with Admin Access and login as that user

## Callout

1. Note **all** previous perquisites must be completed before continuing to the next steps.

## S3 Config

1. Name Bucket
2. Choose Region
3. Disable ACL
4. Disable Block All Public Access
5. Click Create Bucket
6. Head to Permissions Tab and Copy the BucketPolicy.json file in this repo and add it to s3 bucket policy. Be sure to save your changes
7. Copy the CorsPolicy.json file and paste it into the Cross-origin resource sharing (CORS) section. Be sure to save your changes
8. Now your bucket is ready to go.

## Code

1. Clone this repo
2. Create an .env file using the .env.example as a reference
3. Fill in the env variables with necessary values.
