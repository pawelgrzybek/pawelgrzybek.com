---
title: "I built a thing - JAMstack commenting system using AWS CDK, API Gateway, Lambda and DynamoDB"
summary: "A few months ago, I made a change in the way how I handle comments on this website. This solution worked for me like a charm, and many of you asked me to open source this solution. There you go!"
photo: "2021-05-25.jpg"
---

A few months ago, I made a change in the way how I handle comments on this website. I elaborated a bit more on this one in ["Bye-bye, Disqus! I built my commenting system using AWS serverless stack and Netlify build hooks!"](/bye-bye-disqus-i-built-my-commenting-system-using-aws-serverless-stack-and-netlify-build-hooks/). This solution worked for me like a charm, and many of you asked me to open source this solution. Here you go!

![JAMstack CDK comments architecture diagram](/photos/2021-05-25-1.png)

[JAMstack CDK comments](https://github.com/pawelgrzybek/jamstack-cdk-comments) is built on top of the [AWS CDK](https://aws.amazon.com/cdk/) framework, and you can deploy it to your AWS account in minutes! The stack consists of [API Gateway](https://aws.amazon.com/api-gateway/), [AWS Lambda](https://aws.amazon.com/lambda/) and [Amazon DynamoDB](https://aws.amazon.com/dynamodb/).

As always, your feedback is really appreciated. Let’s make the web a better, faster and more privacy-oriented place together. Hopefully that helps. Enjoy 💬
