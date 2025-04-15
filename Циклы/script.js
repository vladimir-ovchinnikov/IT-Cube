// Всплывающие окна
//alert("Привет, мир"); // окно с текстом
//var age = prompt("Сколько вам лет?", 988);
//alert("Ваш возраст: "+age);
// var conf = confirm("Согласны ли вы со мной?");
// alert(conf);
// var isAdult = confirm("Вам есть 18 лет?");
// if(isAdult == true){
//      alert("Вы совершеннолетний");
// } else{
//     alert("Вы несовершеннолетний")
// }
// var age = prompt("Сколько вам лет?");
// if(age == null){
//   alert("Вы отменили операцию")
// } else{
//   age = parseInt(age);
// if(isNaN(age)){
//   alert("Пишите цифрами, пожалуйста")
// }
// if(age < 0){
//     alert("Вы лжец")
// }
// if(age < 12 && age >= 0){
//     alert("Вы ребенок")
// } else if(age >= 12 && age < 18){
//     alert  ("Вы подросток")
// }else if(age >= 18 && age < 35){
//       alert  ("Вы молодой человек")
//     }else if(age >= 35 && age < 65){
//         alert  ("Вы взрослый человек")
//       }else if(age >= 65 && age < 75){
//         alert  ("Вы пожилой человек")
//       }else if(age >= 75 && age <= 122 ){
//         alert  ("Вы старый человек")
//       }
//       if(age > 122){
//         alert("Вы лжец")
//     }
//
for(let i=0; i<7; i++){
  console.log(i) //что делать
}
console.log("конец");

for(let i=11; i<7; i--){
  console.log(i) //что делать
}
console.log("конец");

for(let i=11; i<7; i+=2){
  console.log(i) //что делать
}
console.log("конец");\

let i = 0;
for(; i < 60;){
      
    console.log(i);
    i = i + 10;
}

const people = ["Tom", "Sam", "Bob"];
for(let i=0; i < 3; i++){
      
     console.log(people[i]);
}
//для выставления столбцов

for(let i = 1, j=1; i < 5, j < 4; i++, j++){
      
  console.log(i + j);

  let i=0;
for(console.log("Init"); i < 5; i++){
      
     console.log(i);
}
//для вывода инит
for(let i=1; i <= 5; i++){
      
  for(let j = 1; j <=5; j++){
     console.log(i * j);
  }
}
// внутренний блок выполняется 25 раз.Внутренний сработал, потом внешний, потом внутренни1 5 раз и т.д.

const people = [["Tom", 39], ["Sam", 28],["Bob", 42]];
for(let i=0; i < 3; i++){   // перебираем двухмерный массив
 
    for(let j=0; j < 2; j++){ // перебираем вложенные массивы
     
        console.log(people[i][j]);
    }
    console.log("=================");   // для разделения элементов
}

let i = 1;
while(i <=5){
     
    console.log(i);
    i++;
}
//Цикл while здесь будет выполняться, пока значение i не станет равным 6.



//Если нам надо просто пропустить итерацию, но не выходить из цикла, мы можем применять оператор continue.



//Этот цикл перебирает все свойства объекта. Например:

const person = {name: "Tom", age: 37};
for(prop in person){
      
    console.log(prop);
}


//мы можем получить значение каждого свойства:
for(prop in person)
  // и получим
name Tom
age 37
// for...of разбирает по частям. Другим примером может быть перебор массива: