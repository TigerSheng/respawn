# Respawn Client
Website and front-end interface written in Vue.js.

## Initialize the Project

Install dependencies with `npm install`.

## Test the Project Locally

Run local deployment server with `npm run dev`.

## Deployment
 
Deployment script is already defined in `package.json`.
Run `npm run deploy` to deploy to AWS s3 bucket.

### Pre-requisite for Deployment

- Set up [AWS-CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) in your local environment
- Set up local named profile with AWS IAM credentials for s3 access:
	> **aws configure --profile YOUR_PROFILE_NAME**  


