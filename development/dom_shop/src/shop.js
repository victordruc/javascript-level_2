const tds = new TestDataServices()
const cs = new CurrencyService()

let catalog = tds.getTestProducts()
let currencies = cs.getCurrencies()
let currencySwitcher = null
// currencySwitcher.render("rootCurrSwitch")

let cart = new Cart(100)
cart.render("rootCart")

renderCatalog("root-catalog")