var numbers = [3, 4, 1, 5, 6];
console.log(numbers);
// numbers.push(7);
// console.log(numbers);
// push - затолкать
numbers.push(1, 228, 52);
console.log(numbers);
var poppedNumb = numbers.pop();
//pop () - удаление последнего элемента массива
console.log(numbers);
console.log(poppedNumb);


var students = ["Артем", "Ярослав", "Вика", "Вероника"];
var expelledStudents = [];
students.push("Максим");
var artyom = students.shift();
expelledStudents.push(artyom);
console.log ("Студенты:",students);
console.log ("отчисленные студенты:", expelledStudents);
var Maxsim = students.pop();
expelledStudents.push(Maxsim);
expelledStudents.shift();
students.push("Артём");
console.log ("отчисленные студенты:", expelledStudents);
console.log ("Студенты:",students);
students.splice(2, 1 );
students.splice(1, 0, "Вероника" );
console.log ("Студенты:",students);















































































































































