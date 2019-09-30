const { S3 } = require('aws-sdk');
const request = require('request-promise')

const putImageIntoS3 = async (image) => {
  fetch('https://camo.githubusercontent.com/8c8f0df77ffabb98139f121843ffd67ce8a7f1b7/68747470733a2f2f7777772e632d76696c6c652e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031392f30392f436174732d363630783333352e6a7067')
  encoding:null

};

exports.main = async (event, context, callback) => {
  const body = await request(putImageIntoS3)
  const upload = await s3.upload({

    Bucket : 'nombre_Bucket',
    key : path,
    Body : body,


  }).promise()

	} catch (err) {
    		callback(null, `Function has failed but retry was canceled. ${err}`);
  	}
};
