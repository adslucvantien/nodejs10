const axios = require('axios');

const accessToken = 'EAAXqtY0WaAwBACPi4kBCDFwPVGIGfjil5zAZApY6jWzoSV5vR2dZBNZC0L6y9tRrSnyZBZAgUMx0o9ZCEzZCm1ZCWV1EUZCZBDbSIV2GoEK4KAnZBvgujM0Kw1ZCOnJYqEGrDZCJ5G2KYX5KthkrxZAjGWHb3BUTMgpAJtwWWK4Vy8X2vtnsvZAZAcqQguICN80tQKLLZCIOIVJX8eEm6v19z2AIjyeZCS';
const pageId = '103525336122933';
const message = 'Tran dau vong loai euro 2024';


// Graph API
axios.post(`https://graph.facebook.com/${pageId}/feed?access_token=${accessToken}`, {
  message: message
})
  .then(response => {
    console.log('Post created successfully:', response.data);
  })
  .catch(error => {
    console.error('Error creating post:', error.response.data.error);
  });
