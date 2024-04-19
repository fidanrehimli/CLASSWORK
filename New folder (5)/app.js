let tbody = document.querySelector(".bodyy")
fetch("https://northwind.vercel.app/api/products")
.then(res=>res.json())
.then(data=>{
    data.forEach(elem=>{
        let tr = document.createElement("tr")
        let id = document.createElement("td")
        let tdName = document.createElement("td")
        let country = document.createElement("td")
        let price = document.createElement("td")
        let deletebtn = document.createElement("button")
        let editbtn = document.createElement("button")
        let detailbtn = document.createElement("button")
        let deletex = document.createElement("td")
        let edit = document.createElement("td")
        let detail = document.createElement("td")



    
        deletebtn.style.color = "white"
        deletebtn.style.border = "none"
        deletebtn.style.backgroundColor = "red"
       

        editbtn.style.border = "none"
        detailbtn.style.border = "none"
        editbtn.style.backgroundColor = "green"
        detailbtn.style.backgroundColor= "purple"
        detailbtn.style.borderRadius = "15px"
        editbtn.style.borderRadius = "20px"
        deletebtn.style.borderRadius = "30px"
        detailbtn.style.width="80px"
        editbtn.style.width="80px"
        deletebtn.style.width="80px"



        editbtn.style.color = "white"
        detailbtn.style.color = "white"




        tdName.innerText = elem.tdName
        id.innerText = elem.id
        price.innerText = elem.unitPrice
        country.innerText = elem.name
        deletebtn.innerText = "Delete"
        editbtn.innerText = "Edit"
        detailbtn.innerText = "Detail"


        deletebtn.addEventListener("click",(e)=>{
            e.target.parentElement.parentElement.remove()
        })

        deletex.append(deletebtn)
        edit.append(editbtn)
        detail.append(detailbtn)
        tbody.append(tr)
        tr.append(id,tdName,price,country,deletex,edit,detail)



    })
})

  

   


// getProducts()





