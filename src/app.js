import "bootstrap";
import "./style.css";




window.onload = function() {
  //write your code here

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

let randomwho = who[Math.floor(Math.random()*who.length)]
function getRandomElement(array){
return array[Math.floor(Math.random()*array.length)]
}
  // console.log(getRandomElement(who)+" "+getRandomElement(action)+" "+getRandomElement(what)+" "+getRandomElement(when));
  document.getElementById("excuse").innerHTML=getRandomElement(who)+" "+getRandomElement(action)+" "+getRandomElement(what)+" "+getRandomElement(when)
};
