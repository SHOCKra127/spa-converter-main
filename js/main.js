const rates = {};
const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
const elementBYN = document.querySelector('[data-value="BYN"]');
const elementUAH = document.querySelector('[data-value="UAH"]');
const elementKZT = document.querySelector('[data-value="KZT"]');
const elementJPY = document.querySelector('[data-value="JPY"]');
const elementGBP = document.querySelector('[data-value="GBP"]');
const elementCNY = document.querySelector('[data-value="CNY"]');

const getCurrencies = async () => {
  const responce = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  const data = await responce.json();
  const result = await data;

  console.log(result);

  rates.USD = result.Valute.USD;
  rates.EUR = result.Valute.EUR;
  rates.BYN = result.Valute.BYN;
  rates.UAH = result.Valute.UAH;
  rates.KZT = result.Valute.KZT;
  rates.JPY = result.Valute.JPY;
  rates.GBP = result.Valute.GBP;
  rates.CNY = result.Valute.CNY;

  elementUSD.textContent = rates.USD.Value.toFixed(2);
  elementEUR.textContent = rates.EUR.Value.toFixed(2);
  elementBYN.textContent = rates.BYN.Value.toFixed(2);
  elementUAH.textContent = rates.UAH.Value.toFixed(2);
  elementKZT.textContent = rates.KZT.Value.toFixed(2);
  elementJPY.textContent = rates.JPY.Value.toFixed(2);
  elementGBP.textContent = rates.GBP.Value.toFixed(2);
  elementCNY.textContent = rates.CNY.Value.toFixed(2);
};

getCurrencies();

document.getElementById("currencyInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    convertCurrency();
  }
});

const convertCurrency = () => {

  const input = document.getElementById('currencyInput').value;
  const valueInput = input.replace(/[^a-zA-Z]/g, '');
  const onlyDigit = input.replace(/\D/g, '');

  switch (valueInput.toUpperCase()) {
    case 'USD':
      result = `${(onlyDigit * rates.USD.Value).toFixed(2)} рублей`;
      break;
    case 'EUR':
      result = `${(onlyDigit * rates.EUR.Value).toFixed(2)} рублей`;
      break;
    case 'BYN':
      result = `${(onlyDigit * rates.BYN.Value).toFixed(2)} рублей`;
      break;
    case 'UAH':
      result = `${((onlyDigit * rates.UAH.Value) / 10).toFixed(2)} рублей`;
      break;
    case 'KZT':
      result = `${((onlyDigit * rates.KZT.Value) / 100).toFixed(2)} рублей`;
      break;
    case 'JPY':
      result = `${((onlyDigit * rates.JPY.Value) / 10).toFixed(2)} рублей`;
      break;
      case 'GBP':
      result = `${(onlyDigit * rates.GBP.Value).toFixed(2)} рублей`;
      break;
      case 'CNY':
      result = `${(onlyDigit * rates.CNY.Value).toFixed(2)} рублей`;
      break;
    default:
      result = 'Неправильный буквенный код';
  }
    
  document.getElementById('result').innerText = result;
};