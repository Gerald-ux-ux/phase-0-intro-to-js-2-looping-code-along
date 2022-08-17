// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, event){
  const messages = []
  for (let i = 0; i < names.length; i++){
    const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    messages.push(message);
  }
  return messages
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"]));


function countDown(){
  let countDown = 11;
  while (countDown > 0){
    countDown--;
    console.log(countDown);
}
}