---
title: "Build your first AWS Serverless app"
description: "After years spent working on frontend development, through building AR / VR applications, I recently ended up in a team of talented people building serverless microservices on the AWS platform. Let me share with you some of my experiences."
photo: 2019-03-19.jpg
draft: true
---

After years of frontend experience, through building AR / VR applications I recently landed a backend-focused role. Luckily I've found myself being a part of a team of super talented people working on serverless microservices on the [AWS (Amazon Web Services) platform](https://aws.amazon.com/). Having no previous experience in this field, let me share with you what I've learnt during my initial exploration into this arena and build a little serverless app with you.

## Prerequisites

If you don't have one, go ahead and [create an AWS account](https://portal.aws.amazon.com/billing/signup). A credit card is needed to set one up, but be assured that you won't be charged a single penny for the stuff that I will go through here as the [AWS free tier](https://aws.amazon.com/free/) is pretty generous.

AWS Lambda supports multiple languages (JavaScript, Python, Ruby, Java, Go and C#) so a rudimental understanding of any of these is necessary. I will be using JavaScript in this tutorial.

Familiarity with the command line, a code editor and a REST client will help you to create, deploy and test your application. If you don't have a preference, I highly recommend [Visual Studio Code](https://code.visualstudio.com/) and [Insomnia](https://insomnia.rest/) — both of these tools are free, easy to use and very feature-full.

![Screenshot of AWS account, Visual Studio Code and Insomnia website](/photos/2019-03-19-1.jpg)

## Stack

The AWS platform contains hundreds of services which are categorisd into tens of different types. We are going to use only a few of them without needing to ever visit the not-so-intuitive web interface — we'll do it like the pros! We are going to use the [AWS Command Line Interface](https://aws.amazon.com/cli/) to manage all the services. Lets have a closer look at what we need.

![AWS services in use](/photos/2019-03-19-2.jpg)

### Amazon Simple Storage Service (Amazon S3)

[Amazon S3](https://aws.amazon.com/s3/), being the oldest tool on the platform, allows the user to store objects of any kind inside ["buckets"](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html). You can use it to store the source files of your website, securely hold some private documents or as a [photo backup solution](https://pawelgrzybek.com/my-amazon-s3-photo-backup-solution/).

We are going to use this service to store a bundled zip file containing some project files.

### AWS Lambda

[AWS Lambda](https://aws.amazon.com/lambda/) is a computing power provider that removes the overhead of server maintenance — that's the reason why its functions are termed "serverless". Lambda functions are stateless and can be invoked using multiple triggers, for example: a database stream, an API request or an event emited by other AWS services. Lambdas are very cost effective because we pay only for the computational duration — not for any idle time.

We are going to use this service to compute the final output based on the input sent within a `POST` request. To create the REST APIs we are going to use…

### Amazon API Gateway

[Amazon API Gateway](https://aws.amazon.com/api-gateway/) allows users to create, maintain, and secure APIs. It is extremely easy to use. Creating endpoints and attaching the HTTP verbs (`GET`, `POST`, `PUT`, `PATCH`, and `DELETE`) to it has never been easier.

We are going to use this service to define an endpoint that triggers a lambda function with a defined payload: the body of a `POST` request.

### AWS Identity and Access Management (IAM)

Having an account doesn't give you access to whatever you want, only the things that your role allows you to do. [AWS Identity and Access Management](https://aws.amazon.com/iam/) is a service to manage only that — access to AWS services and resources.

We are going to use this service to create an account that allows us to manage AWS services using a CLI (programmatic access). Implicitly a new role that allows a Lambda function interact with other services will be created.

### AWS Cloud​Formation

[AWS Cloud​Formation](https://aws.amazon.com/cloudformation/) is the best! Infrastructure as code, also referred to as IaC, allows the user to describe and provision all of the infrastructure resources.

We are going to use this service to describe all of the resources for the app inside a single YAML file (JSON format is supported as well). A "stack" of services created using Cloud​Formation is very easy to deploy, update and delete.

## AWS CLI setup

Although it is possible to do everything that we need using the AWS console (website interface) I strongly suggest using [AWS CLI](https://aws.amazon.com/cli/). It is a very powerful, fast and easy-to-use command line tool. If you have read some of my previous articles, you know that [I love Homebrew](https://pawelgrzybek.com/homebrew-the-best-friend-of-the-macos-user/) so I am going to use it to install AWS CLI. Installation instructions for other operating systems are provided on the [official AWS CLI website](https://aws.amazon.com/cli/).

```
brew install awscli
```

A new `aws` command is ready to use but it doesn't yet know how to speak to our account. To fix this we need to configure the CLI. Before doing so, please make sure that you have a [IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html) with programmatic access and sufficient privileges created. If this is in place, you should have your `aws_access_key_id` and `aws_secret_access_key` that enables you to grant programmatic access. Configure your default account using the `aws configure` command.

![Configure AWS CLI tool](/photos/2019-03-19-3.jpg)

This setup creates a `.aws` directory in your user root location with two files: `credentials` and `config`. You can add as many users as you want using the `configure` command. To find out more about creating new users and particular options, visit the ["Configuring the AWS CLI"](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) section on the official documentation.

## Build a serverless greetings app

The function of this app will be to send your name and get some kind of greeting back. I know, it's a dumb example, but the concepts and tools that we are going to use are a great basis for your million dollar, serverless project.

![Screenshot of an app example inside Insomnia REST client](/photos/2019-03-19-4.jpg)

Let's create a directory and place two files in it — `index.js` and `template.yaml`. The JavaScript file describes the business logic and `template.yaml` is needed to define the resources of the AWS stack.

```bash
mkdir hi && cd hi && touch index.js template.yaml
```

```
hi/
├── index.js
└── template.yaml
```

### Create the lambda function

[A Lambda function signature in Node.js](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html) is straight forward. It takes three arguments: `event` for the data provided from the trigger, `context` which stores information about the execution environment and an optional `callback` function very commonly used in Node.js. The structure is similar in other runtimes supported by AWS Lambda, but please check for details regarding your programming language of choice on the [official AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html).

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

<<<<<<< HEAD
Please, spare your comments about error handling strategies, syntax and stylistic details. I am here not to teach programming but help you to create your first serverless app.
=======
Please, spare your comments about error handling strategies, syntax and stylistic details. I am here not to teach you best practice programming but help you to create your first serverless app.
>>>>>>> 4d39c0e2fd164bb9d54b68ef39782ec8767ea1f8

### Create the CloudFormation template

Despite the fact it looked like black magic for me at first, today one of my favourite parts of AWS are the CloudFormation templates. A simple file that describes the whole architecture that's easy to deploy, update and delete. The [anatomy of a CloudFormation template](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html) is simple and becomes as complex as your projects needs to be.

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

The [`Transform` section](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html) defines the macros that AWS CloudFormation uses to process your template. `AWS::Serverless-2016-10-31` means that the template is written in the [AWS Serverless Application Model (AWS SAM)](https://docs.aws.amazon.com/serverless-application-model/index.html#lang/en_us) syntax. It simplifies the declaration of a Lambda function and its execution role. Without this transformation, CloudFormation templates are much more verbose.

The [`Resources` section](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html) is the only required section and defines stack resources and their properties. In our case the only resource is a `AWS::Serverless::Function` described by a `Greetings` logical ID. Properties define the path to a `handler`, runtime and event that triggers an invocation.

### Package the serverless app

One of the AWS services that I mentioned we are going to use is S3. We need a bucket to store the bundled application files. The AWS CLI `mb` command comes in handy when we need to create one (`mb` probably stands for "make bucket"). Keep in mind that the name of every bucket in S3 must be unique. I have one called `pawelgrzybek-cloudformation` where I store all of my cloudformation stacks.

```
aws s3 mb s3://YOUR_BUCKET_NAME
```

Now everything's ready it's time to package things up. The AWS CLI comes with a helpful command that bundles all the resources in a zip file, sends it to S3, adds a bucket location path to the output template file and returns a copy of it. We are going to use a new file (`packaged.yaml`) to deploy the app in a further step.

```
aws cloudformation package --template-file template.yaml --output-template-file packaged.yaml --s3-bucket YOUR_BUCKET_NAME
```

![AWS CLI — CloudFormation package output](/photos/2019-03-19-5.jpg)

![AWS Console S3 — Confirmation that package has been uploaded successfully](/photos/2019-03-19-6.jpg)

### Deploy serverless app

Now all the files are on a S3 bucket and we have a `packaged.yaml` file that contains the information about its resources. Great, time to deploy the stack.

```
aws cloudformation deploy --template-file packaged.yaml --capabilities CAPABILITY_IAM --stack-name hi
```

![AWS CLI — CloudFormation deploy output](/photos/2019-03-19-7.jpg)

Behind the scenes CloudFormation creates the IAM role — thanks to SAM template enhancements we don't need to do it ourselves. To authorise a stack to do so, we need to add `--capabilities CAPABILITY_IAM`. The `--stack-name` allows us to create a custom name for the stack — the name of my stack is "hi". Confirm the deployment of the stack in the AWS CloudFormation stack section.

![AWS Console CloudFormation Stacks — Confirmation that package has been deployed successfully](/photos/2019-03-19-8.jpg)

The stacks resources tab clearly shows us all of the resources that have been created to deploy the app and link the services together: Lambda function, API Gateway, IAM role and a bunch of permission and deployment-related stuff that the SAM transformation created for us.

![AWS Console CloudFormation Stack — Resources tab](/photos/2019-03-19-9.jpg)

### Test the serverless app

The API defined as an event for our `Greetings` Lambda function implicitly created an endpoint and two stages for it: "Prod" (default) and "Stage". We can find more details about the created endpoint in the Amazon API Gateway Stages tab. One of the things that we can find here is a URL to hit that in turn invokes a function. The page for the individual Lambda function is another place where we can find information about the URL endpoint that works as a function trigger.

![AWS Gateway API — find and endpoint that triggers Lambda function](/photos/2019-03-19-10.jpg)

It is finally time to test our app. Let's do it using your REST API client of choice by passing a JSON body with a `name` key.

![The result of our first serverless application](/photos/2019-03-19-11.jpg)

The [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html) allows us to [test Lambda functions locally](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-local-invoke.html) but this is out of the scope of this article. I may publish a separate article about working with the AWS Serverless Application Model Framework one day.

## All done!

It has been quite a long ride, but I hope it has helped you to get an idea about building serverless apps on the AWS platform. Extending this project with additional parts is just a matter of adding new resources to a `template.yaml` file. Need a database? [Amazon DynamoDB](https://aws.amazon.com/dynamodb/) is a great option. Need to be notified via SMS about some changes on your S3 bucket? [Amazon Simple Notification Service](https://aws.amazon.com/sns/) is your best friend. Would you like to take your smart home to the next level? You should have a look at the [AWS IoT](https://aws.amazon.com/iot/). The sky is the limit.

Although the AWS platform is not the only provider that let's you build serverless apps, it is the one that I ended up using and liking a lot. Feel free to have a look at the extremely nice to use [Serverless framework](https://serverless.com/), [Netlify Functions](https://www.netlify.com/features/functions/) that are great and easy abstractions on top of the AWS Lambdas or [Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/) that are equally powerful.

Let me know your thoughts and feel free to share some serverless article ideas that you would like to read about next time. If there is anything unclear I am more than happy to help you out — the comments section is all yours. Have fun!
