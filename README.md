# Next.js + AWS CDK

The `cdk.json` file tells the CDK Toolkit how to execute your app. The build step is not required when using JavaScript.

## Useful commands

- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template

## Next.js

- Run `yarn dev` to start the Next app at http://localhost:3000

## DynamoDB + REST API

### Testing

```bash
// Create
$ curl -X PUT http://localhost:3000/api/item -d '{"content": "test"}' -H "Content-type: application/json"
// Read
$ curl http://localhost:3000/api/item\?id\=[ItemID]
// Update
$ curl -X POST http://localhost:3000/api/item -d '{"content": "updated", "id": "[ItemID]"}' -H "Content-type: application/json"
// Delete
$ curl -X DELETE http://localhost:3000/api/item\?id\=[ItemID]
```
