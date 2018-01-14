const express = require('express');
const app = express();
const promise = require('promise');

/**
 * This is Serverless Lambda function which can
 * run on localhost and deploy on Lambda function!
*/

app.get('/hello', (request,response)=>{
    return new promise((resolve, reject)=>{
        if(5+5 === 10) {
            resolve("true");
        } else {
            reject("Error is 5+5 is not equal to 10!")
        }
    }).then((msg) => console.log('The answer is : ',msg ))
    .catch((err)=> console.log('The error message is : ', err));
});

app.listen(3000);

module.exports = {
    app: app,
}