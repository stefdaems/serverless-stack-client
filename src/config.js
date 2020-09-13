export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "eu-central-1",
    BUCKET: "stef-notes-app-upload",
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://0olxwy8ah8.execute-api.eu-central-1.amazonaws.com/prod/",
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_4LNManKed",
    APP_CLIENT_ID: "638pko6gnkgsmr931ub0n8gtra",
    IDENTITY_POOL_ID: "eu-central-1:a3364b19-3558-48f9-adc4-06f693bff1f4",
  },
  STRIPE_KEY: "pk_test_5Odino7pViaWOF0wTHyIffMj006ICrV7R7",
};
