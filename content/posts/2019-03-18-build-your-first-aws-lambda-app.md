---
title: "Build your first AWS Lambda app"
description: ""
photo: 2019-03-18.jpg
draft: true
---

After years of frontend experience, through building AR / VR applications I recently landed on a backend side. Luckily enough I ended up being a part of a team of super talented people working on serverless microservices on [AWS (Amazon Web Services) platform](https://aws.amazon.com/). Having no previous experience in this field, let me share with you some of my early explorations and utilize this knowledge to build a little serverless dumb app.

## Prerequisites

If you don't have one, go ahead and [create AWS account](https://portal.aws.amazon.com/billing/signup). Credit card is needed to set one up, but you can be assured that you won't be charged a single penny for the stuff that I will go through as the [AWS free tier](https://aws.amazon.com/free/) is pretty generous.

AWS Lambda supports multiple languages (JavaScript, Python, Ruby, Java, Go and .NET) so tiny little understanding of any of these is necessary. I will use JavaScript in this tutorial.

Familiarity with command line, code editor and some REST client will help to write and test our application. If you don't have a preference, I highly recommend [Visual Studio Code](https://code.visualstudio.com/) and [Insomnia](https://insomnia.rest/) — both of these tools are free and easy to use but superb powerful in the same time.

![Screenshot of AWS account, Visual Studio Code and Insomnia website](/photos/2019-03-18-1.jpg)

## Example app — simple project but complicated architecture (for a good reason)

Send your name and get some greetings back. I know — it is not an ambitious example but the concepts and tools that we are going to use are a great base for your million dollar project. Apart from previously mentioned AWS Lambdas we are going to use few other services of this platform. We are not going to click around the AWS interface though — we will do it like a pro.

Sounds overkill? Because it probably is for such a simple dumb app, but take my word on that — it will pay back on a bigger scale project.

### AWS services in use

- s3
- lambda
- gateway api
- dont need to care about each of them individually now — cloudformation can help us with it
- (https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html)

## setup credentials and region for aws cli

- aws acount
- get secret key and secret token from AIM page
- show command
- describe what it does (.dotfiles)
- https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html#cli-quick-configuration

## lambda function and build one

- https://docs.aws.amazon.com/lambda/latest/dg/programming-model-v2.html
- function signature
- takes and 3 args
- triggered by event source, typically other aws service
- can have multiple sources
- can be run in multiple runtimes (https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html) - node, python, ruby, java, go, .net and you can even create your own runtime but it is more advanced subject that we are not going to explore

## package &  deploy

- describe what is happening
- `aws s3 mb s3://my-bucket`
- make a connection to s3 bucket and converts the package.yaml file to the one with legit URLs
- `aws cloudformation package` (https://docs.aws.amazon.com/cli/latest/reference/cloudformation/package.html)
- zip the whole project and sends it to s3
- `aws cloudformation deploy` (https://docs.aws.amazon.com/cli/latest/reference/cloudformation/deploy/index.html)
- "The --capabilities CAPABILITY_IAM option is necessary to authorise your stack to create IAM roles, which SAM applications do by default."

## test with rest api client

- quick test using insomnia / postman
- it is not tooo ambitious, but i am not here to teach you programing but aws

## tools to make your life easier

- server less is big
- tons of great tools around to help you with that
- SAM CLI
- Serverless Framework
- Terraform
