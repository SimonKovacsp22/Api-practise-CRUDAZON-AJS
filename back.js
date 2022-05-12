const endPoint = "https://striveschool-api.herokuapp.com/api/product/"
let form = document.querySelector("form")

const handleSubmit = async event => {
     event.preventDefault()

    const newProduct = {
        name: document.getElementById('name').value,
        description: document.getElementById('desc').value,
        brand: document.getElementById('brand').value,
        imageUrl: document.getElementById('img').value,
        price: document.getElementById('price').value
    }
   console.log(newProduct)
   await  fetch(endPoint,{
    method: "POST" ,
    body: JSON.stringify(newProduct),
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdkMDM4ZTZkMDZiOTAwMTUyZWYyYTEiLCJpYXQiOjE2NTIzNjAwNzksImV4cCI6MTY1MzU2OTY3OX0.SIbjIeox4vcnxGt1Yw2LzN9YuDo75vi8n2oxzXHNDUM",
                "Content-type": "application/json",
    }
        
    
    
})

}
form.addEventListener('submit', handleSubmit);