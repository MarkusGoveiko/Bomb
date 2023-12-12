function w() {
let value1 = document.querySelector("#value1").value;
let value2 = document.querySelector("#value2").value;
let value3 = document.querySelector("#value3").value;
let value4 = document.querySelector("#value4").value;

let story = `
Reiz uzsprāga ${value1} viņa ķermeņa daļas aizlidoja uz ${value2}
cilvēki viņu meklēja ${value3} gadus tā arī netrada ${value4} 
visvarenāko kartupeļu žirītāju.
`


if(value1 == "" || value2 == ""  || value3 =="" || value4 =="" ){ 
alert("Paskaties Velreiz, vai tu neesi daunis")
} else {
    document.querySelector("#e").innerText = story;
    document.querySelector("#e").style.display = "block";
}
}

function t(){
document.querySelector("#value1").value= "";
document.querySelector("#value2").value= "";
document.querySelector("#value3").value= "";
document.querySelector("#value4").value= "";

document.querySelector("#e").style.display = "none";
}