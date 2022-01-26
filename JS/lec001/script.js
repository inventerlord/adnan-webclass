let a = document.querySelector("#a");
let b = document.querySelector("#b");
let result = document.querySelector("#result");




function calculate() {
    let v1 = parseInt(a.value);
    let v2 = parseInt(b.value);
    result.innerHTML = v1+v2;

}
a.addEventListener('input',calculate)
b.addEventListener('input',calculate)
