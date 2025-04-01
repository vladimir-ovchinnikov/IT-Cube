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

var age = prompt("Сколько вам лет?");
if(age == null){
  alert("Вы отменили операцию")
} else{
  age = parseInt(age);
if(isNaN(age)){
  alert("Пишите цифрами, пожалуйста")
}
if(age < 0){
    alert("Вы лжец")
}
if(age < 12 && age >= 0){
    alert("Вы ребенок")
} else if(age >= 12 && age < 18){
    alert  ("Вы подросток")
}else if(age >= 18 && age < 35){
      alert  ("Вы молодой человек")
    }else if(age >= 35 && age < 65){
        alert  ("Вы взрослый человек")
      }else if(age >= 65 && age < 75){
        alert  ("Вы пожилой человек")
      }else if(age >= 75 && age <= 122 ){
        alert  ("Вы старый человек")
      }
      if(age > 122){
        alert("Вы лжец")
    }
}









