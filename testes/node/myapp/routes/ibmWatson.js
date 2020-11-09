var express = require('express');
var router = express.Router();

const ibmWatson = require('../lib/ibmWatsonCredentials');
router.post('/assistant',function(req,res,next){
  var{ text, contextDialog} = req.body;
  context = JSON.parse(contextDialog);
  const params = {
    input: {text},
    workspaceId: 'cd935174-842c-4b4c-a319-43d84ca641be',
    context
  };
  ibmWatson.assistant.message(
    params,
    function(err,response){
        if(err)
          res.json({status: 'ERRO', data: err.toString()});
        else
          res.json({status:'OK',data:response});
    }
  );
});
module.exports=router;