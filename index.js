import express from 'express';

import wordLength from './bootcamp/wordLength.js';
import longestWord from './bootcamp/longestWord.js';
import enoughAirtime from './bootcamp/enoughAirtime.js';
import shortestWord from './bootcamp/shortestWord.js';
import totalPhoneBill from './bootcamp/totalPhoneBill.js'



const app = express();
app.use(express.json());
app.use(express.static('public'))


app.get('/api/word_game', function(req, res){

    const sentence = req.query.sentence;

     if (!sentence) {
        res.json({
            error:'please type in a sentence to analyze'
        })
     }

     res.json({

        "longestWord": longestWord(sentence),
        "shortestWord": shortestWord(sentence),
        "Sum":wordLength(sentence)
      

});

});


app.get('/api/phonebill/prices',function (req,res){
    const strbill=req.query.strbill;
    console.log(req.query)
    res.json({
        "bill": totalPhoneBill(strbill)

    })

 })

app.post('/api/phonebill/total',function(req,res){
    const bill=req.body.bill;
    res.json({
        "status":'Success',
        "total":totalPhoneBill(bill)
    })
})

app.post('/api/phonebill/prices',function (req,res){
    const type=req.body.type;
    const price=req.body.price;
    res.json({
        "status":"success",
        "message":`${type} was set to ${price}`
    })
})

app.get('/api/enoughAirtime', (req, res) => {
    const usage = req.query.usage;
    const available = req.query.available;
  
    if(!usage || !available){
      res.json({
        error: 'Please enter usage and available airtime.'
      });
    };
    res.json({
      'total': enoughAirtime(usage,available)
    });
  });
  
  app.post('/api/enoughAirtime', (req, res) => {
    const usage = req.body.usage;
    const available = req.body.available;
    res.json({
      message : 'success',
      result : enoughAirtime(usage,available)
    });
  });

 
const PORT = 1010;
app.listen(PORT, function(){

    console.log('api started on port', PORT)

})