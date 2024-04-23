const form = document.querySelector("form")
const contactNameinp = document.querySelector(".contactName")
const postalCodeinp = document.querySelector(".postalCode")
const loginBtn = document.querySelector(".btn")
const registerBtn = document.querySelector(".btn")



loginBtn.addEventListener("click",function(e){
    // console.log("e");
    
// console.log(contactNameinp.value);
// console.log(postalCodeinp.value);
fetch("https://northwind.vercel.app/api/suppliers")
  .then((res) => res.json())
  .then((data) => {
const contactName = data.find((element)=>element.contactName==contactNameinp.value)
if(contactName){
    console.log("salam"); 
    window.location.href = "./index.html"
}else{
    console.log("Xos geldin");
}
})
})
// registerBtn.addEventListener("click",function(e){
//     fetch("https://northwind.vercel.app/api/suppliers")
//     .then((res) => res.json())
//   .then((data) => {
//     window.location.href = "./register.html"
//   })    
// })






// fetch("https://northwind.vercel.app/api/suppliers")
//   .then((res) => res.json())
//   .then((data) => {
//     data.map((elem) => {
//         form.addEventListener("submit",function(e){
//             e.preventDefault()
//             console.log(data);
//         })
        // let addBtn = document.createElement("button")
        // addBtn.classList.add("addBtn")


        // addBtn.addEventListener("click",(e)=>{
        // fetch('https://northwind.vercel.app/api/suppliers'+'/'+item.id,{
        //     method: 'Post'
        // })
        // .then(response=>response.json())
        // e.target.parentElement.remove()
    //   })
    //     })
  
