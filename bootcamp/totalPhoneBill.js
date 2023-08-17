export default function totalPhoneBill(items){
  const callNsms = items.split(",");
  let Total=0;
  let call=2.75
  let sms=0.65
  const newArray=[];
  //console.log(callNsms)
  for (let i=0 ; i<callNsms.length;i++){
   newArray.push(callNsms[i].trim());
    
    //console.log(newArray)
    
    if(newArray[i].includes("call")){
      Total+=call
      
    }else if(newArray[i].includes("sms")){
      Total+=sms}
   //console.log(newArray)
  //return "R"+Total;
  }
    console.log("R"+Total.toFixed(2))
    return "R"+Total.toFixed(2);
  }
  