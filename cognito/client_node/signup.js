global.fetch = require("node-fetch");
const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const { paid, free } = require("./config");
const config = process.env.MEMBER === "paid" ? paid : free;

/* Create object for User Pool */
const userPool = new AmazonCognitoIdentity.CognitoUserPool({
  UserPoolId: config.poolData.UserPoolId,
  ClientId: config.poolData.ClientId
});

/* Create Attribute */
let attributeList = [];
const dataEmail = {
  Name: "email",
  Value: config.email
};
attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail));

const dataPhoneNumber = {
  Name: "phone_number",
  Value: config.phone
};
attributeList.push(
  new AmazonCognitoIdentity.CognitoUserAttribute(dataPhoneNumber)
);

/* Signup */
userPool.signUp(
  config.username,
  config.password,
  attributeList,
  null,
  (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    const cognitoUser = result.user;
    console.log("user name is " + cognitoUser.getUsername());
  }
);
