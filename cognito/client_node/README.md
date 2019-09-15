# client_node
This directory that is written by Node.js has sample codes to singin or signup via Cognito.

## Getting Started
Please execute the following command. config.json needs five information.
- valid email
- valid username
- valid password including numbers, special character and uppercase/lowercase letters
- valid userPoolId
- valid ClientId

```
$ npm install
$ cat << EOF > config.json
  {
    "free": {
      "email": "<email>",
      "phone": "+8100000000000",
      "username":"<username>",
      "password":"<password>",
      "poolData": {
        "UserPoolId": "<userPoolId>",
        "ClientId": "<ClientId>"
      }
    },
    "paid": {
      "email": "<email>",
      "phone": "+8100000000000",
      "username":"<username>",
      "password":"<password>",
      "poolData": {
        "UserPoolId": "<userPoolId>",
        "ClientId": "<ClientId>"
      }
    }
  }
EOF

$ MEMBER=paid node signup.js # if you singup paid member
$ MEMBER=paid node signin.js # if you signin paid member
$ MEMBER=free node signup.js # if you singup free member
$ MEMBER=free node signin.js # if you signin free member
```
