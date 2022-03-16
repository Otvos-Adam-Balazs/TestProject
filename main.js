function sajatfuggveny(nev="Sanyi"){
    return "Hali "+nev;
}

let sun= function(a,b){
    return a*b;
}

let koszon= () => {
    return "hello"};

 let koszon2 = (a) =>{
    return "hello" +a;
}

function showOk(){
    alert("Elfogadtad");
}   

function showCancel()
{
    alert("Nem fogadtad el");
}
//alert(koszon());
var nev = prompt("Mi a neved?" , "Nemo");
alert(koszon2(nev));

document.write("Helo");
console.log("ez itt egy log");

var fruits = ["narancs" , "körte" , "szilva", "cseresznye"];
fruits[10]= "Alma";
for(i=0; i<fruits.length; i++)
{
    console.log(fruits[i]);
}

//fruits.splice(0,1);
fruits.sort().reverse();
for(i=0; i<fruits.length; i++)
{
    console.log(fruits[i]);
}

var cars = [
    {tipus: "Volvo", ev:2016},
    {tipus: "Volvo", ev:2018},
    {tipus: "BMW", ev:2017}
]

function kocsikiir(kocsik){
    for(i=0; i<cars.length;i++)
    {
        console.log(cars[i].tipus + " " + cars[i].ev);
    }
}

function kocsikiirEvNovekvo(kocsik){
    cars.sort((a,b) => {return a.ev - b.ev});
}

kocsikiir(cars);
kocsikiirEvNovekvo(cars);
kocsikiir(cars);

var kor = 15;
if(kor<18)
{
    console.log(" nem ihat");
}
else
{
    console.log("ihat");
}

var day;
switch(new Date().getDay()){
    case 0:
        day ="vasárnap";
        break;
    case 1:
        day ="hetfo";
        break;
    case 2:
        case 3:
            day ="fiezetsnap";
            break;
    default:
        day = "mindegy";
}

console.log(day);

for (kocsi of cars){
    console.log(kocsi.ev);
}

var szemely = {fname: "jhon", lname: "Doe", age:25, teljesnev: function(){
    return this.fname + " " + this.lname;
}};

console.log(szemely.teljesnev());

var szemely2 = new Object();
szemely2.firstName ="Jhon";
delete szemely.age;
console.log(szemely);

function valtoztat(elem){
    elem.innerHTML = "Upsz!";
}
function ujdoc(){
    window.location.assign("https://www.w3schools.com")
}
function vissza(){
    window.history.back();
}