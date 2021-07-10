class CurrencySwitcher {
  constructor(currencies) {
    this.currencies = currencies
    if(localStorage.getItem("changeValue")) {
      this.selected = JSON.parse(localStorage.getItem("changeValue"))
    } else {
      this.selected = this.currencies[0]
    }
  }

  render(rootID) {
    let root = document.getElementById(rootID)
    root.innerHTML = ``
    let label = this.selected?.code ?? "Loading"
    let li = ``
    this.currencies.forEach(item => {
      li += `<li onclick="currencySwitcher.change(event)"><a class="dropdown-item" href="#">${item.code}</a></li>`
    })

    let html = `
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
         <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           ${label}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            ${li}
          </ul>
         </li>
        </ul>
        `
    root.innerHTML = html
  }

  change(e) {
    let changeValue = this.selected
    this.selected = this.currencies.find(curr => curr.code == e.target.innerText)
    this.render("rootCurrSwitch")
    catalog.forEach(element => {
      if( changeValue.code !== this.selected.code) {
        element.price.amount = (element.price.amount*changeValue.rate/this.selected.rate)
        element.price.currency = this.selected.code
      }
    })
    changeValue = this.selected
    localStorage.setItem('changeValue', JSON.stringify(this.selected));
    renderCatalog("root-catalog")
  }
}

// HW2* rewrite for->ok