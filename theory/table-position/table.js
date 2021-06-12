let products = [{
        product: "Product 1",
        price: 100.00,
        quantity: 1.00,
        operations: false
    },
    {
        product: "Product 2",
        price: 200.00,
        quantity: 2.00,
        operations: true
    },
    {
        product: "Product 3",
        price: 300.00,
        quantity: 3.00,
        operations: false
    }

]

function showProducts() {
    products.forEach(s => {
        let div = document.createElement('div')
        div.className = "row"

        let divName = document.createElement('div')
        divName.className = "name"
        divName.innerText = s.product

        let divPrice = document.createElement('div')
        divPrice.className = "price"
        divPrice.innerText = s.price.toFixed(2)

        let divQuantity = document.createElement('div')
        divQuantity.className = "quantity"
        divQuantity.innerText = s.quantity.toFixed(2)

        let divOperations = document.createElement('div')
        divOperations.className = "operations"

        let buttonDown = document.createElement('button')
        buttonDown.innerText = "⇃"
        buttonDown.onclick = moveOneDown

        let buttonUp = document.createElement('button')
        buttonUp.innerText = "↾"
        buttonUp.onclick = moveOneUp

        s.operations ? divOperations.append(buttonDown, buttonUp) : divOperations.innerHTML = "x"

        div.append(divName, divPrice, divQuantity, divOperations)
        table.appendChild(div)
    })
}

let table_array = document.getElementById("table").children

function moveOneUp() {
    for (i = 0; i < table_array.length; i++) {
        let searchButton = table_array[i].lastElementChild.children
        if (searchButton.length) {
            if (i < 1) {
                return
            }
            let beforeRow = table_array[i - 1]
            let actualRow = table_array[i]
            actualRow.after(beforeRow)
            return
        }
    }
}

function moveOneDown() {
    for (i = 0; i < table_array.length; i++) {
        let searchButton = table_array[i].lastElementChild.children
        if (searchButton.length) {
            if (i > table_array.length-2) {
                return
            }
            let beforeRow = table_array[i + 1]
            let actualRow = table_array[i]
            beforeRow.after(actualRow)
            return
        }
    }
}

showProducts()