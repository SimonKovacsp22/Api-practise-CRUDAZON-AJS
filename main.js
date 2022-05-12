const  fetchProd = async (url) => {
    try {
        let response = await fetch(url,
        {
            method: "GET" ,
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdkMDM4ZTZkMDZiOTAwMTUyZWYyYTEiLCJpYXQiOjE2NTIzNjAwNzksImV4cCI6MTY1MzU2OTY3OX0.SIbjIeox4vcnxGt1Yw2LzN9YuDo75vi8n2oxzXHNDUM",
                "Content-type": "application/json",
            }
            
        }
    )
    products = await response.json()
    return products
    }
    catch(error){
        console.log(error)
    }
    
}

const displayProducts = async function() {
     items = await fetchProd("https://striveschool-api.herokuapp.com/api/product")
     let ul = document.querySelector('.myList')

     items.forEach(product => {
         const listItem = document.createElement('li')
         listItem.className = "list-group-item d-flex  "
         listItem.innerHTML = `<span >name: ${product.name}</span> <span class="px-3">price: ${product.price}</span> <span class="px-3">des:  ${product.description}</span>`
         ul.appendChild(listItem)
     });

  

}

displayProducts()

