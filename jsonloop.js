var obj = [ { person: "Name 5", age: "6", company: "GUVI" }, { person: "Name 2", age: "5", company: "GUVI geek" }, { person: "Name 3", age: "8", company: "GUVI geek network" }, ]


for (var i in obj){
    console.log(i, obj[i]);
}

console.log("<br>");

for(var j of obj){
    console.log(j);
}

console.log("<br>");

for(var k = 0;k<=obj.length-1;k++){
    console.log(obj[k]);
}

console.log("<br>");

obj.forEach(function (l){
    console.log(l);
});

