let catalog = []
let id = 1

if (!localStorage.getItem("catalog")) {
    localStorage.setItem("catalog", "")
} else {
    catalog = [...JSON.parse(localStorage.getItem("catalog"))]
    id = ++catalog[catalog.length - 1].id
}

let nameProduct, imageSrc = null

function addFormSubmit(e) {
    e.preventDefault()
    let price = document.querySelector('#productPrice')
    let imagePrev = document.querySelector('#productImagePreview')
    let textValidation = document.querySelector('#productImageValidation')
    let alert = document.querySelector('#alert')
    if (nameProduct && imageSrc && price.value) {
        catalog.push(new Product(id++, nameProduct, imageSrc, price.value))
        localStorage.setItem("catalog", JSON.stringify(catalog))
        e.target.reset()
        nameProduct = false
        imageSrc = false
        imagePrev.src = ""
        textValidation.innerHTML = ""
        alert.innerHTML = ""
    } else {
        if (!alert.children.length) {
            let div = document.createElement('div')
            div.className = "alert alert-danger"
            div.innerText = "You need to complet all rows"
            alert.appendChild(div)
        }
    }
}

function renderPreview() {
    const IMAGE_FILTER = ["person", "cat", "dog"]
    let imageFile = document.querySelector('#productImage').files[0]
    let imagePrev = document.querySelector('#productImagePreview')
    let textValidation = document.querySelector('#productImageValidation')
    if (imageFile) {
        textValidation.innerHTML = `
                              <div class="d-flex justify-content-center">
                                <div class="spinner-border text-primary" role="status">
                                </div>
                              </div>
    `
        const fileReader = new FileReader()
        fileReader.readAsDataURL(imageFile)
        fileReader.addEventListener("load", function () {
            imagePrev.src = this.result
            cocoSsd.load().then(model => {
                model.detect(imagePrev).then(predictions => {
                    let predictionClass = predictions.map(index => index.class)
                    if (predictionClass.find(e => IMAGE_FILTER.includes(e))) {
                        textValidation.style = 'color: red'
                        textValidation.innerText = `
                It is not allowed to place images that contain: ${IMAGE_FILTER.join(", ")}.`
                        imageSrc = false
                    } else {
                        textValidation.style = 'color: green'
                        textValidation.innerText = `
                You can add this product.`
                        imageSrc = this.result
                    }

                });
            });
        })
    }
}

function valueValidation() {
    let name = document.querySelector('#productName').value.trim()
    if (name.split(" ")[0].length >= 3) {
        nameProduct = name
    }
}