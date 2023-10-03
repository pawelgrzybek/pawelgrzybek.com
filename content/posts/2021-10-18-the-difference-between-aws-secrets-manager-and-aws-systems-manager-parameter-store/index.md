---
title: "The difference between AWS Secrets Manager and AWS Systems Manager Parameter Store"
summary: "The AWS platform offers two services for storing sensitive configuration data. Besides many similarities, there are a few subtle differences and understanding them will help you pick a service which is right for you. By using one over the other, you can also save money."
---

The AWS platform offers two services for storing sensitive configuration data, [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html) and [AWS Systems Manager Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html). Besides many similarities, there are a few subtle differences and understanding them will help you pick a service which is right for you. By using one over the other, you can also save money — I did, and that's why I'm sharing this with you.

## Similarities

They are both designed to store sensitive data like passwords, DB connection strings, resource IDs etc. We can control both of them using AWS Console and access them programmatically (AWS CLI, SDKs and CloudFormation). If configured accordingly, they both can use the exact encryption mechanism. Let’s look at the differences then.

## Differences

- [Secrets rotation](#secrets-rotation)
- [Cross-account access](#cross-account-access)
- [Data encryption](#data-encryption)
- [Limits](#limits)
- [Price](#price)
- [Password Generation](#password-generation)

### Secrets rotation

AWS Secrets Manager can automatically rotate credentials on the desired schedule. AWS Secrets Manager can do it without writing a single line of code for many services: [Amazon Relational Database Service (Amazon RDS)](https://aws.amazon.com/rds/), [Amazon DocumentDB](https://aws.amazon.com/documentdb/) and [Amazon Redshift](https://aws.amazon.com/redshift/). This also can be achieved for any other secret by delegating this task to the Lambda function. Automated data rotation is not possible using AWS Systems Manager Parameter Store.

### Cross-account access

AWS Identity and Access Management (IAM) identity-based policies allow us granular control over our secrets. AWS Secrets Manager will enable us to attach resource-based IAM policies that grant cross-account access. Unfortunately, there is no way to attach resource-based IAM policy for AWS Systems Manager Parameter Store (Standard type).

### Data encryption

AWS Systems Manager Parameter Store allows us to store data in plain text (`String` and `StringList` type) or encrypted (`SecureString` type). AWS Secrets Manager doesn’t allow opt-out of encryption, and all data stored using this service will be encrypted using [AWS Key Management Service (AWS KMS)](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html). 

### Limits

AWS Systems Manager Parameter Store allows us to store up to 10,000 parameters, and each of them can be up to 4kb. AWS Secrets Manager will enable us to store up to 40,000 parameters, and each of them can be up to 64kb.

### Price

AWS Systems Manager Parameter Store comes with no additional cost (Standard type). However, AWS Secrets Manager costs $0.40 per secret per month, and data retrieval costs $0.05 per 10,000 API calls.

### Password generation

AWS Secrets Manager allows us to generate random data during the creation phase. It is so handy to be able to create it and reference it in the same CloudFormation stack. AWS Systems Manager Parameter Store doesn’t allow us to generate random data — we need to do it manually using console or AWS CLI.

## When to pick one over the other

Hopefully, the things you learned today will allow you to make a more thoughtful decision to pick one over the other. My simplified rule of thumb is to always go with AWS Systems Manager parameters if you don’t care about secrets rotation and cross-account access. Hopefully, that helped you out. Until next time, stay secure 👋
