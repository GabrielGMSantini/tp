const AssistantV1 = require('ibm-watson/assistant/v1');
const {IamAuthenticator} = require('ibm-watson/auth');
const assistant = new AssistantV1({
    url:    'https://gateway.watsonplatform.net/assistant/api',
    version:    '2020-01-04',
    authenticator: new IamAuthenticator({apikey:'cm_PzyGNDknPKm8B_h2Ush1yiSuyAXg4W1AWlLGUuZ-R'})
});

module.exports={assistant};