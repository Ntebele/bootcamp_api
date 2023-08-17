export default function shortestWord(str){
  const newArrayList=str.split(" ");
  let count=1;
  let currentWordCount=newArrayList[0];
    for(let i=0;i<newArrayList.length;i++){
        if(currentWordCount<newArrayList[count]){
            currentWordCount=newArrayList[i];
            count++
           }
      else if(currentWordCount>=newArrayList[count]){
            count++
        
           }
    }console.log(currentWordCount)
  return currentWordCount;
  }