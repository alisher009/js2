
let namber = [ 1,2,3,4  ]   
let sum = 0;
namber.filter((total) => {sum += total;})
console.log(sum);







let arr = [ 'alish','amir', 'amin', 'zarina', 'shoxrux ', 'kumush', 'amina', 'xoji', 'shox', 'ula', 'artyom'] 
let name = prompt('Кого хотите удалить ')

let index = arr.indexOf(name);
if (index !== -1) {
 let user = confirm(`Вы точто хотите удалить ${name}`)
 if( user === true ) {
    arr.splice(index, 1);
 } else {
   alert('Операция по удалению при остановлина ')
 }
}
console.log(arr); 





 let numbers = [1, 2, false, 'hello', 24,'world', undefined, null, 'error',22]
 let numbersCount = numbers.reduce((item, c) => {
  if(typeof c === "number") ++item;
  return item;
}, 0);
if(numbersCount >= 5) {
  console.log('good');
}   else {
  console.log('error');
}


let filtered = numbers.filter(item => typeof  item === 'number')
console.log(filtered);