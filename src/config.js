const dev = {
  STRIPE_KEY: "pk_test_5Odino7pViaWOF0wTHyIffMj006ICrV7R7",
  s3: {
    REGION: "eu-central-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-16ot16o68s34c",
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://c3i8essb30.execute-api.eu-central-1.amazonaws.com/dev/",
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_V3S0CMvUR",
    APP_CLIENT_ID: "7p6725nljnsrh8e5si859q9sbs",
    IDENTITY_POOL_ID: "eu-central-1:eb6db68b-bc9c-4240-ab59-08c79628405e",
  },
};

const prod = {
  STRIPE_KEY: "pk_test_5Odino7pViaWOF0wTHyIffMj006ICrV7R7",
  s3: {
    REGION: "eu-central-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-156agbde6izpl",
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://ck2ife4eo7.execute-api.eu-central-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_R7SEiD5Ly",
    APP_CLIENT_ID: "2lns1n8eq36gagpnql08svmk08",
    IDENTITY_POOL_ID: "eu-central-1:54a33b80-b76b-4c64-90a8-2602c50990c1",
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
