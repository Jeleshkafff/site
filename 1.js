let btn = document.querySelector(`.btn`)
let btn1 = document.querySelector(`.btn1`)
let btn2 = document.querySelector(`.btn2`)
let btn3 = document.querySelector(`.btn3`)
let btn4 = document.querySelector(`.btn4`)
let btn5 = document.querySelector(`.btn5`)
let btn6 = document.querySelector(`.btn6`)
let prob1 = document.querySelector(`.prob1`)
let h3 = document.querySelector(`.h3`)
let f = document.querySelector(`.input3`)

btn.addEventListener(`click`, function color(){
    let kv = document.querySelector(`.h1`)
    kv.style.backgroundColor = "#a1ffee"
} )
btn1.addEventListener(`click`, function bb (){

alert("привет")
})
btn2.addEventListener(`click`, function bb (){
    let input = document.querySelector(`.input`)
    input.value = "test@gmal.com"
    })
prob1.addEventListener(`click`, function bb (){
        let prob = document.querySelector(`.prob`)
       let a =  prob.value
       if (a!=""){
        alert("вы ввели  "+ a)}
        else{
            alert ("Ничего не ввели")
        }

})


btn3.addEventListener(`click`, function (){
    let dd = document.querySelector(`.input1`)
    let input2 = document.querySelector(`.input2`)
    let k = dd.value
    let m = input2.value
    dd.value = m
    input2.value = k
    })   
    
btn4.addEventListener(`click`, function (){
    f.disabled = true
     })   
btn5.addEventListener(`click`, function (){
    f.disabled = false
    })   

btn6.addEventListener(`click`, function (){
    let h2 = document.querySelector(`.h2`)
    if (h2.style.backgroundColor = "#3700b6"){
        h2.style.backgroundColor = "#fff2db"
    btn6.textContent = ("1")
    }
        else if(h2.style.backgroundColor = "#fff2db"){
            h2.style.backgroundColor = "#3700b6"
            btn6.textContent = ("2")
        }
    })   

    h3.addEventListener(`mouseenter`, function (){
        h3.style.backgroundColor = "#800046"
        })   
h3.addEventListener(`mouseleave`, function (){
    h3.style.backgroundColor = "#180052"
})      
        