async function Conversion() {
    try {
      const Source = document.getElementById("Source").value;
      const Target = document.getElementById("Target").value;
      const amount = parseFloat(document.getElementById("amount").value);
  
      const response = await fetch(`https://v6.exchangerate-api.com/v6/bfa0c46bc09dd0bd52f2734d/latest/${Source}`);
      const data = await response.json();
  
      const exchangeRate = data.conversion_rates[Target];
      const convertedAmount = amount * exchangeRate;
  
      document.getElementById("result").innerHTML = `Converted Amount: ${convertedAmount.toFixed(2)} ${Target}<br>
      Exchange Rate: 1 ${Source} = ${exchangeRate.toFixed(3)} ${Target}`;
    } catch (error) {
      console.error('Error:', error);
    }
  }