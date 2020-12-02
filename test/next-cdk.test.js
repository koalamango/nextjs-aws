const { expect, matchTemplate, MatchStyle } = require("@aws-cdk/assert");
const cdk = require("@aws-cdk/core");
const NextDynamodb = require("../lib/next-cdk-stack");

test("Empty Stack", () => {
  const app = new cdk.App();
  const stack = new NextDynamodb.NextCDKStack(app, "MyTestStack");
  expect(stack).to(
    matchTemplate(
      {
        Resources: {},
      },
      MatchStyle.EXACT
    )
  );
});
