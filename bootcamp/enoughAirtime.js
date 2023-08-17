export default function enoughAirtime(str,airtime){
  const newArrayList=str.split(",");
  let call=1.88;
  let data=12;
  let sms=0.75;
  let total=0;
  let costs=0;
  for(let i=0;i<newArrayList.length;i++){
   if(newArrayList[i].includes("sms")){
     total+=sms;
     costs=airtime-total;
   }
    else if(newArrayList[i].includes("call")){
     total+=call;
     costs=airtime-total
   }
    else if(newArrayList[i].includes("data")){
     total+=data;
     costs=airtime-total
   }
  }
   if(costs<0){
   return "R0.00"
   }
  else{
   return "R"+costs.toFixed(2);
  }
}