---
title: "Build your first AWS Lambda app"
description: ""
photo: 2019-03-18.jpg
draft: true
---

After years of frontend experience, through building AR / VR applications I recently landed on a backend side. Luckily enough I ended up being a part of a team of super talented people working on serverless microservices on [AWS (Amazon Web Services) platform](https://aws.amazon.com/). Having no previous experience in this field, let me share with you some of my early explorations and utilize this knowledge to build a little serverless app.

## Prerequisites

If you don't have one, go ahead and [create AWS account](https://portal.aws.amazon.com/billing/signup). Credit card is needed to set one up, but you can be assured that you won't be charged a single penny for the stuff that I will go through as the [AWS free tier](https://aws.amazon.com/free/) is pretty generous.

AWS Lambda supports multiple languages (JavaScript, Python, Ruby, Java, Go and C#) so tiny little understanding of any of these is necessary. I will be using JavaScript in this tutorial.

Familiarity with command line, code editor and some REST client will help to create, deploy and test our application. If you don't have a preference, I highly recommend [Visual Studio Code](https://code.visualstudio.com/) and [Insomnia](https://insomnia.rest/) — both of these tools are free, easy to use and very feature-full.

![Screenshot of AWS account, Visual Studio Code and Insomnia website](/photos/2019-03-18-1.jpg)

## Stack

AWS platform contains hundreds services categorized in tens different types. We are going to use only few of them with no need to ever visiting the (not the most intuitive) web interface — we will do it like a pro. We are going to use [AWS Command Line Interface](https://aws.amazon.com/cli/) to manage all the services. Lets have a closer look at what we need.

![AWS services in use](/photos/2019-03-18-2.jpg)

### Amazon Simple Storage Service (Amazon S3)

[Amazon S3](https://aws.amazon.com/s3/) being the oldest tool of entire platform, allows user to store objects of any kind inside ["buckets"](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html). You can use it to store source files of your website, securely keep some private documents or like a [photo backup solution](https://pawelgrzybek.com/my-amazon-s3-photo-backup-solution/).

We are going to use this service to store bundled zip file containing project files.

### AWS Lambda

[AWS Lambda](https://aws.amazon.com/lambda/) is a computing power provider that removes the overhead of server maintenance — thats the reason of calling it a "serverless" functions. Lambda functions are stateless and can be invoked using multiple triggers, for example: database stream, API request or event emited by other AWS service. Lambdas are very cost effective because we pay only for computation duration — never for idle time.

We are going to use this service to compute final output based on the input sent with a `POST` request. To create REST APIs we are going to use…

### Amazon API Gateway

[Amazon API Gateway](https://aws.amazon.com/api-gateway/) allows users to to create, maintain, and secure APIs. It is extremely easy to use. Creating endpoints and attaching HTTP verbs (`GET`, `POST`, `PUT`, `PATCH`, and `DELETE`) to it has never been easier.

We are going to use this service to define an endpoint that triggers lambda function with defined payload (body of a `POST` request). 

### AWS Cloud​Formation

[AWS Cloud​Formation](https://aws.amazon.com/cloudformation/) is the best! Infrastructure as code, also referred to as IaC allows user to describe and provision all the infrastructure resources.

We are going to use this service to describe all the resources for the app inside single YAML file (JSON format is supported if you prefer it). A "stack" of services created using Cloud​Formation is very easy to deploy, update or delete.

## AWS CLI setup

Although it is possible to do everything that we need using AWS console (website interface) I highly suggest using [AWS CLI](https://aws.amazon.com/cli/). It is very powerful, fast and easy to use command line tool. If you read some of my previous articles, you know that [I love Homebrew](https://pawelgrzybek.com/homebrew-the-best-friend-of-the-macos-user/) so I am going to use it to install AWS CLI. Installation instruction for other operating systems are provided on an [official AWS CLI website](https://aws.amazon.com/cli/).

```
brew install awscli
```

A new `aws` command is ready to use but it has no clue how to speak to our account. To do it we need to configure this CLI. Before doing so, please make sure that you have a [IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html) with programmatic access and sufficient privileges created. If thats the case, you should have your `aws_access_key_id` and `aws_secret_access_key` that enables you to grant programmatic access. Configure your default account using `aws configure` command.

![Configure AWS CLI tool](/photos/2019-03-18-3.jpg)

This setup creates a `.aws` directory in you user root location with two files: `credentials` and `config`. You can add as many user as you want using `configure` command. To find out more about creating new users and particular options, visit ["Configuring the AWS CLI"](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) section on official documentation.


## Build a serverless greetings app

Send your name and get some greetings back. I know — it is a dumb example but the concepts and tools that we are going to use are great base for your million dollar serverless project.

![Screenshot of an app example inside Insomnia REST client](/photos/2019-03-18-4.jpg)

Let's create a directory, and place two files in it — `index.js` and `template.yaml`. JavaScript file is to describe a business logic and `template.yaml` is needed to define the resources of AWS stack.

```bash
mkdir hi && cd hi && touch index.js templaye.yaml
```

```
hi/
├── index.js
└── template.yaml
```

### Create lambda function

[Lambda function signature in Node.js](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html) is straight forward — it takes three arguments: `event` for data provided from the trigger, `context` that stores an information about execution environment and optional `callback` function very commonly used in Node.js. It is similar in other runtimes supported by AWS Lambda, but please look for details regarding your programing langueg of choice on an [official AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html).

The `handler` function for our greetings app is as simple as that.

```js
// index.js

exports.handler = event => {
  const { name } = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: `Hi ${name}`
  };
};
```

Please, spare your comments about error handling strategies, syntax and stylistic details. I am here not to teach you programming but help you to create your first serverless app.

### Create CloudFormation template

Despite the fact it looked like a black magic for me at first, today one of my favorite parts of AWS are CloudFormation templates. A simple file that describes a whole architecture, easy to deploy, update and delete. [Anatomy of CloudFormation template](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html) is simple and becomes as complex as your projects needs to be.

```yaml
# template.yaml

Transform: AWS::Serverless-2016-10-31
Resources:
  Greetings:
    Type: AWS::Serverless::Function
    Properties:
      Handler: index.handler
      Runtime: nodejs8.10
      Events:
        HelloWorldApi:
          Type: Api
          Properties:
            Path: /
            Method: POST

```

[`Transform` section](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html) defines macros that AWS CloudFormation uses to process your template. `AWS::Serverless-2016-10-31` means that the template is written in the [AWS Serverless Application Model (AWS SAM)](https://docs.aws.amazon.com/serverless-application-model/index.html#lang/en_us) syntax. It simplifies the declaration of a Lambda function and its execution role a lot. Without this transformation, CloudFormation templates are much more verbose.

[`Resources` section](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html) is the only required section that defines stack resources and their properties. In our case the the only resource is a `AWS::Serverless::Function` described by `Greetings` logical ID. Properties define a path to a `handler`, runtime and event that triggers an invocation.

### Package serverless app

One of the AWS services that I mentioned we are going to use is S3. We need a bucket to store bundled application files. AWS CLI `mb` command comes handy when we need to create one (`mb` probably stands for "make bucket"). Keep in mind that the name of every bucket in S3 must be unique. I have one called `pawelgrzybek-cloudformation` where I store all my cloudformation stacks.

```
aws s3 mb s3://YOUR_BUCKET_NAME
```

Everything ready — time to package things up. AWS CLI comes with a helpful command that bundles all the resources in a zip file, sends it to S3, adds a bucket location path to output template file and returns a copy of it. We are going to use a new file (`packaged.yaml`) to deploy an app in a further step.

```
aws cloudformation package --template-file template.yaml --output-template-file packaged.yaml --s3-bucket YOUR_BUCKET_NAME
```

![AWS CLI — CloudFormation package output](/photos/2019-03-18-5.jpg)

![AWS Console S3 — Confirmation that package has been uploaded sucesfully](/photos/2019-03-18-6.jpg)

### Deploy serverless app

## package &  deploy

```
aws s3 mb s3://pawelgrzybek-cloudformation
```

```
aws cloudformation package --template-file template.yaml --s3-bucket pawelgrzybek-cloudformation --output-template-file packaged.yaml
```

```
aws cloudformation describe-stack-events --stack-name STACK_NAME
```

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
