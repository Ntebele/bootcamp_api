export default function enoughAirtime(usage,airtimeAvailable){
    var usageItems=usage.split(',');
    var calls=0;
    var smses=0;
    var bundles=0;
    for(var i=0; i<usageItems.length;i++){
      if(usageItems[i].trim()=="call"){
        calls=calls+1.88;
      }else if(usageItems[i].trim()=="data"){
        bundles=bundles+12;
      }else if(usageItems[i].trim()=="sms"){
        smses=smses+0.75;
      }
    }
    var totalusage=calls+bundles+smses;
    airtimeAvailable=airtimeAvailable-totalusage;
    if(airtimeAvailable<=0)
      return "R0.00"
     else
       return "R"+airtimeAvailable.toFixed(2);
  }
