---
title: "List resources across all regions using the AWS CLI"
summary: "Today, I needed to list all AWS CloudFormation stacks across all locations under my account. It wasn't as straightforward as I initially thought because the AWS CLI doesn't have a single command to do that."
photo: "2023-09-10.jpg"
---

Today, I needed to list all AWS CloudFormation stacks across all locations under my account. It wasn't as straightforward as I initially thought because the AWS CLI doesn't have a single command to do that. The `--region all` global flag would be nice. Luckily, with a little bit of Bash scripting, we can get the job done.

## List of all active regions

The first part of the puzzle is to obtain the list of all active regions.

```bash
aws account list-regions --region-opt-status-contains ENABLED ENABLED_BY_DEFAULT
```

## List resources in all regions

The second part is to loop the output of the previous command using the command to list resources in a specific region. In my case, I needed to list CloudFormation stacks, which can be done with the following command:

```bash
for region in $(aws account list-regions --region-opt-status-contains ENABLED ENABLED_BY_DEFAULT --query "Regions[].{Region: RegionName}" --output text)
do 
  echo "Region: $region"
  aws cloudformation list-stacks --region=$region 
done
```

With just a few adjustments, you can replace `aws cloudformation list-stacks` with any other command for different types of resources. Allow me to provide you with some examples.

- `aws dynamodb list-tables` - to list DynamoDB tables
- `aws lambda list-functions` - to list Lambda functions
- `aws rds describe-db-instances` - to list RDS databases

Quick and easy copy/pasta type of post 🍝 

