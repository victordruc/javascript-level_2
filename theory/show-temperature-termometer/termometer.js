let temperature_input = document.getElementById("temperature-input")
let termometer_indicator = document.getElementById("termometer-indicator")

let temperature_selected = document.getElementById("temperature-selected")
let termometer_digits = document.getElementById("termometer-digits").children

let value_temperature_width = parseInt(termometer_indicator.style.width)

function changeValueTemperatur() {
  for (let i = 0; i < termometer_digits.length; i++) {
    temperature_selected.value == "Fahrenheit" ?  termometer_digits[i].innerText = -4 + (i*18) : termometer_digits[i].innerText = -20 + (i*10)
  }
  updateTermometer()
}

function updateTermometer() {
  if (temperature_input.value >= -20 && temperature_input.value <= 50 && temperature_selected.value == "Celsius") {
    termometer_indicator.style.width = value_temperature_width + temperature_input.value * 3 + "px"
  } else if (temperature_input.value >= -4 && temperature_input.value <= 122 && temperature_selected.value == "Fahrenheit") {
    termometer_indicator.style.width = value_temperature_width + ((temperature_input.value - 32) * 5/9) * 3 + "px"
  } 
  else {
    termometer_indicator.style.width = value_temperature_width + "px"
  }
}


temperature_input.onkeyup = updateTermometer
temperature_selected.onchange = changeValueTemperatur
