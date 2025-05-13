// var car = {
// model: "Lada Largus",
// year: "2025",
// Country: "Russia",
// url: "https://kolesa-photos.kcdn.online/webp/5a/5a64d816-90dc-4963-b962-9a040f9bb484/1-full.webp"

// }


// var div = document.createElement("div");




// for(const [key, value] of Object.entries(car)){



// if(key == "url"){
//     var img = new Image
//     img.src = value
//     div.append(img);
// }else{
//     div.append(value)
//     div.append(", ")
// }


//     div.append(value);
//     div.append(", ");
// }
// document.body.append(div);
var film = {
    nameofthecinema: "Здорово и вечно",
styleofthecinema:"Документальный",
Year:"2014",
Prodeccer:"Наталья Чумакова и Анна Цирлина",
Time:"78 минут"
}
var div = document.createElement("div");

for(const [key, value] of Object.entries(film)){
    div.append(value);
     div.append(", ");

} 
document.body.append(div);   



// var user = {
// }
// // console.log(user);
// user.age = prompt("Сколько Вам лет?") 
// if(
//     user.age < 18){
//         user.name = prompt("Как тебя зовут?")
// user.isAStudent = prompt("Ты где нибудь учишься?")
//     }  

//     else{user.name = prompt("Как Вас зовут?")
//         user.isAStudent = prompt("Вы где нибудь учишься?")}
    
// // console.log(user.name, user.age, user.isAStudent);

// delete user.name
// console.log(user);

// for(const [key, value] of Object.entries(user)) {
//     console.log(`${key}: ${value}`)
// }


































































































