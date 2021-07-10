class CurrencyService {

    getCurrencies() {
        const config = ["EUR", "USD", "RUB", "RON",]
        
        let currencies = [new Currency("MDL", 1, 1)]

        let xhr = new XMLHttpRequest()

        // HW: Date actual -ok

        let date = new Intl.DateTimeFormat("md").format(new Date())

        xhr.open("GET", `https://www.bnm.md/ro/official_exchange_rates?get_xml=1&date=${date}`)

        xhr.onload = () => {
            let xmlParser = new DOMParser()
            let xml = xmlParser.parseFromString(xhr.responseText, "text/xml")

            let valuteElements = Array.from(xml.getElementsByTagName("Valute"))

            valuteElements.forEach(e=>{
                let code = e.children[1].firstChild.textContent
                let nominal = e.children[2].firstChild.textContent
                let rate = e.children[4].firstChild.textContent
                if(config.includes(code)) {
                    currencies.push(new Currency(code, parseFloat(nominal), parseFloat(rate)))
                    
                }
            })
            currencySwitcher = new CurrencySwitcher(currencies)
            currencySwitcher.render("rootCurrSwitch")
        }

        xhr.send()        

        return currencies
    }
}