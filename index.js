
    // function convertTemperature() {
    //   var temperature = parseFloat(document.getElementById("input").value);
    //   var unit = document.getElementById("unit").value;
    //   var resultElement = document.getElementById("result");
      
    //   if (isNaN(temperature)) {
    //     resultElement.innerText = "Please enter a valid temperature.";
    //     return;
    //   }
      
    //   if (unit === "celsius") {
    //     var convertedTemp = (temperature * 9/5) + 32;
    //     resultElement.innerText = temperature + "°C is equal to " + convertedTemp + "°F.";
    //   } else if (unit === "fahrenheit") {
    //     var convertedTemp = (temperature - 32) * 5/9;
    //     resultElement.innerText = temperature + "°F is equal to " + convertedTemp + "°C.";
    //   }
    // }
 
    function convertTemperature(scale) {
        var temperature = parseFloat(document.getElementById("input").value);
        var resultElement = document.getElementById("result");
        
        if (isNaN(temperature)) {
          resultElement.innerText = "Please enter a valid temperature.";
          return;
        }
        
        var convertedTemp;
        
        if (scale === "celsius") {
          convertedTemp = kelvinToCelsius(temperature);
          resultElement.innerText = temperature + "K is equal to " + convertedTemp + "°C.";
        } else if (scale === "fahrenheit") {
          convertedTemp = kelvinToFahrenheit(temperature);
          resultElement.innerText = temperature + "K is equal to " + convertedTemp + "°F.";
        } else if (scale === "newton") {
          convertedTemp = kelvinToNewton(temperature);
          resultElement.innerText = temperature + "K is equal to " + convertedTemp + "°N.";
        }
      }
      
      function kelvinToCelsius(temperature) {
        return temperature - 273.15;
      }
      
      function kelvinToFahrenheit(temperature) {
        return (temperature - 273.15) * 9/5 + 32;
      }
      
      function kelvinToNewton(temperature) {
        return temperature * 33/100;
      }