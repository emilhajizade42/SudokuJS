const damas = document.querySelectorAll(`tbody td:not(.given-number)`);
const candidateSwitch = document.querySelector(`#candidate-switch`);//number-controls
const numberControls = document.querySelectorAll(`.number-control`);
 //candidate-switch
console.log(damas);
let lastItem ;
console.log(lastItem);
//Damalara click eden zaman ferqlidirse silsin select classini
damas.forEach(dama =>{
    dama.addEventListener("click",function (e) {
        dama.classList.add("selected")
        lastItem != dama ? removeClass(lastItem,"selected") : null
        lastItem = dama;
        // dama.children[0].innerHTML = "123456";
        // dama.children[1].innerHTML = "1";
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
    console.log("candidateText secilmis olan elementin kohne deyeri",candidateText);
    let candidateArr = changeStringToArr(candidateText)
    if (!candidateArr.includes(e.target.innerHTML)) {
        candidateArr.push(e.target.innerHTML)
    }
    
    candidateArr.sort()
    console.log("push olunmus",candidateArr);
    candidateArr = candidateArr.join("")
    console.log("stringlesmis",candidateArr);

    document.querySelector(".selected").children[0].innerHTML = candidateArr

      })
})

candidateSwitch.addEventListener("click",function (e) {
    console.log("input chekced ? :",e.target.checked );
    return e.target.checked 
  })

function removeClass(element,className) {
    element?.classList.remove(className)
}

function changeStringToArr(str) {
    
    return str.split("")
    //sortu kanarda ver
}

var text = "salam"
console.log(changeStringToArr(text));