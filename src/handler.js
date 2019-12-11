'use strict';

module.exports.helloHack = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello from Hack9 lambda',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
