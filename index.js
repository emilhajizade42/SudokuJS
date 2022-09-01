const damas = document.querySelectorAll(`tbody td:not(.given-number)`);
const candidateSwitch = document.querySelector(`#candidate-switch`);
const numberControls = document.querySelectorAll(`.number-control`);
let lastItem ;
//Damalara click eden zaman ferqlidirse silsin select classini
damas.forEach(dama =>{
    dama.addEventListener("click",function (e) {
        dama.classList.add("selected")
        lastItem != dama ? removeClass(lastItem,"selected") : null
        lastItem = dama;
      })
})

//contolda butona basanda butonun text ini 
numberControls.forEach(nc=>{
    nc.addEventListener("click",function (e) {
    if (candidateSwitch.checked == false) {
        document.querySelector(".selected").children[1].innerHTML = e.target.innerHTML
        return;
    }
    // document.querySelector(".selected").children[0].innerHTML = e.target.innerHTML //sil
    let candidateText = document.querySelector(".selected").children[0].innerHTML
    let candidateArr = changeStringToArr(candidateText)
    if (!candidateArr.includes(e.target.innerHTML)) {
        candidateArr.push(e.target.innerHTML)
        candidateArr.sort()
    }

    candidateArr = candidateArr.join("")
    document.querySelector(".selected").children[0].innerHTML = candidateArr
      })
})

candidateSwitch.addEventListener("click",function (e) {
    return e.target.checked 
  })

function removeClass(element,className) {
    element?.classList.remove(className)
}

function changeStringToArr(str) {
    return str.split("")
}

var text = "salam"
console.log(changeStringToArr(text));