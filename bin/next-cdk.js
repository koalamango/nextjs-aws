#!/usr/bin/env node

const cdk = require("@aws-cdk/core");
const { NextCDKStack } = require("../lib/next-cdk-stack");

const app = new cdk.App();
new NextCDKStack(app, "NextCDKStack");
