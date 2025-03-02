const resultPer=document.getElementById("result");
const historyPer=document.getElementById("history");
const num = document.querySelectorAll(".cifra");
const operation = document.querySelectorAll(".zhnak");
const clear = document.getElementById("bC");
const ravnoPer=document.getElementById("bravno")

operation.forEach(eloperation => {eloperation.addEventListener("click", polIvivestop)});
function polIvivestop() {const operation=this.textContent;
    const per = historyPer.value
    if (per.includes("+"||"-"||"*"||"/")){
        alert("Вы уже ввели знак, очистите поле и попробуйте снова")
    }
    else {historyPer.value += operation}
}

num.forEach(elnum => {elnum.addEventListener("click", polIvivestnum)});
function polIvivestnum() {const num = this.textContent;
    if (historyPer.value === "0") {historyPer.value = num;}
    else {historyPer.value += num}
   
    
    }

clear.addEventListener("click", () => {
        historyPer.value = "0";
        resultPer.value = "";
    });

ravnoPer.addEventListener("click",  vichislit)
function vichislit() {const per = historyPer.value
    
    if (per.includes("/0")){
        alert("На ноль делить нельзя")
        historyPer.value = "0";
        resultPer.value = ""
    }
    else {const result = eval(per)
    resultPer.value = result;}
    }
