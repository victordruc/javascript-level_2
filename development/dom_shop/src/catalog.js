const catalog = [
    new Product(1, "Olive Oil", "images/olive-oil-968657_640.jpg", {
        amount: 50,
        currency: "MDL"
    }),
    new Product(2, "Nuts", "images/nuts-2971675_640.jpg", {
        amount: 150,
        currency: "MDL"
    }),
    new Product(3, "Strawberry", "images/strawberry-1330459_640.jpg", {
        amount: 25,
        currency: "MDL"
    })
]

// HW1: why the render function here is called renderCatalog? ->ok
// Motivul ar fi: in interiorul classei renderul reprezinta o metoda, astfel apelarea renderului se face in contextul classei in care ea este creata, de aici logic ne dam seama ce randeaza aceasta functie, insa in cazul nostru calatogul si renderCatalog nu sunt legate nici de cum una fata de alta, si astfel pentru a explici ce randeaza aceasta functie a fost utilizat denumirea in cauza

const renderCatalog = (rootID) => {
    let root = document.getElementById(rootID)
    root.innerHTML = ``
    catalog.forEach(product => root.innerHTML +=product.render())

    let btns = Array.from(document.querySelectorAll(`.btn-add-to-cart`))
    // HW3: use Array.forEach() -> ok
    btns.forEach(btn=>btn.addEventListener(`click`,cart.addProduct.bind(cart)))
}

// HW5*: 
    // Bootstrap icon cart
    // Add adaptivity