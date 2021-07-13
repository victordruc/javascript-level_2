class TestDataServices {

    getTestProducts(count=10){
        let products = []

        let xhr = new XMLHttpRequest()

        xhr.open("GET", "https://fakestoreapi.com/products")

        let storage = null
        let storageCatalog = []
        if(localStorage.getItem("changeValue")) {
            storage = JSON.parse(localStorage.getItem("changeValue"))
        }

        if(localStorage.getItem("catalog")) {
            storageCatalog = JSON.parse(localStorage.getItem("catalog"))
        }

        xhr.onload = () => {
            let data = JSON.parse(xhr.responseText)
            data = [...storageCatalog, ...data]
            data.forEach(element => {
                let product = new Product(
                    element.id, 
                    element.title?element.title:element.name, 
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