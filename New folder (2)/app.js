// const input = document.querySelector("input")
// const btn = document.querySelector(".btn")
// const errorMessage=document.querySelector(".error")
// // console.log(errorMessage);
// const succesMessage =document.querySelector(".succes")
// btn.addEventListener("click",()=>{
//     if(input.value.length>8){
// // console.log("Uzunlugu 8-den coxdur");
// errorMessage.style.display = "block"
// succesMessage.style.display="none"
//     }else{
//     //    console.log("sifre ugurludur");
//        succesMessage.style.display="block"
//        errorMessage.style.display = "none"
//     }  
// })
const btn1 = document.querySelector(".accordion")
const btn2 = document.querySelector(".qutu1")
const btn3 = document.querySelector(".qutu2")
const p = document.querySelector(".box1")
const box = document.querySelector(".box2")
const qutu = document.querySelector(".box3")
btn1.addEventListener("click",()=>{
p.style.display ="block"
box.style.display ="none"
qutu.style.display ="none"
})
btn2.addEventListener("click",()=>{
    box.style.display ="block"
    p.style.display ="none"
    qutu.style.display ="none"

    })
     btn3.addEventListener("click",()=>{
        qutu.style.display ="block"
        box.style.display ="none"
    p.style.display ="none"

        })



