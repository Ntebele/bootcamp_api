 export default function longestWord(str){
 const newArrayList=str.split(" ");
 let currentWordCount="";
 
 console.log(newArrayList)
 for(let i=0;i<newArrayList.length;i++){
   if(currentWordCount.length<=newArrayList[i].length){
      currentWordCount=newArrayList[i];
   }
 }
 console.log(currentWordCount)
 return currentWordCount;
}
