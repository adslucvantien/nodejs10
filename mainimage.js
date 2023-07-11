const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const accessToken = 'EAAXqtY0WaAwBACPi4kBCDFwPVGIGfjil5zAZApY6jWzoSV5vR2dZBNZC0L6y9tRrSnyZBZAgUMx0o9ZCEzZCm1ZCWV1EUZCZBDbSIV2GoEK4KAnZBvgujM0Kw1ZCOnJYqEGrDZCJ5G2KYX5KthkrxZAjGWHb3BUTMgpAJtwWWK4Vy8X2vtnsvZAZAcqQguICN80tQKLLZCIOIVJX8eEm6v19z2AIjyeZCS';
const pageId = '103525336122933';
const message = 'Hello world 2023 - LVT - V1';
const imagePath = 'myimage.png';

const imageData = fs.readFileSync(imagePath);


const formData = new FormData();
formData.append('message', message);
formData.append('source', imageData, { filename: 'myimage.png' });


axios.post(`https://graph.facebook.com/${pageId}/photos?access_token=${accessToken}`, formData, {
  headers: formData.getHeaders()
})
  .then(response => {
    console.log('Post created successfully:', response.data);
  })
  .catch(error => {
    console.error('Error creating post:', error.response.data.error);
  });
