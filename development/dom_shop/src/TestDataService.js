class TestDataServices {

    getTestProducts(count=10){
        let products = []

        let xhr = new XMLHttpRequest()

        xhr.open("GET", "https://fakestoreapi.com/products")

        let storage = null
        if(localStorage.getItem("changeValue")) {
            storage = JSON.parse(localStorage.getItem("changeValue"))
        }

        xhr.onload = () => {
            let data = JSON.parse(xhr.responseText)
            data.forEach(element => {
                let product = new Product(
                    element.id, 
                    element.title, 
                    element.image, {
                            amount: storage?element.price/storage.rate:element.price,
                            currency: storage?storage.code:"MDL"
                        })
                products.push(product)
            })
            renderCatalog("root-catalog")
        }

        xhr.send()        

        return products
    }
}