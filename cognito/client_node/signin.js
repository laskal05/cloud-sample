global.fetch = require("node-fetch");
const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const config = require("./config");

const userPool = new AmazonCognitoIdentity.CognitoUserPool(config.poolData);
const userData = {
  Username: config.username,
  Pool: userPool
};

const authenticationData = {
  Username: config.username,
  Password: config.password
};
const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
  authenticationData
);

const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
cognitoUser.authenticateUser(authenticationDetails, {
  onSuccess: function(result) {
    // var accessToken = result.getAccessToken().getJwtToken();
    console.log(result);
  },

  onFailure: function(err) {
    console.error(err);
  },
  mfaRequired: function(codeDeliveryDetails) {
    var verificationCode = prompt("Please input verification code", "");
    cognitoUser.sendMFACode(verificationCode, this);
  }
});
