function convertTemperature(value, fromUnit, toUnit) {
  if (isNaN(value)) return "";
  let celsius;
  // Convert input to Celsius first
  switch (fromUnit) {
    case "C":
      celsius = value;
      break;
    case "F":
      celsius = ((value - 32) * 5) / 9;
      break;
    case "K":
      celsius = value - 273.15;
      break;
    default:
      return "";
  }
  // Convert from Celsius to target unit
  switch (toUnit) {
    case "C":
      return celsius.toFixed(2);
    case "F":
      return ((celsius * 9) / 5 + 32).toFixed(2);
    case "K":
      return (celsius + 273.15).toFixed(2);
    default:
      return "";
  }
}

function getFormula(from, to) {
  if (from === to) {
    return "No conversion needed: value remains the same.";
  }
  const formulas = {
    C_F: "°F = (°C × 9/5) + 32",
    C_K: "K = °C + 273.15",
    F_C: "°C = (°F - 32) × 5/9",
    F_K: "K = ((°F - 32) × 5/9) + 273.15",
    K_C: "°C = K - 273.15",
    K_F: "°F = ((K - 273.15) × 9/5) + 32",
  };
  return formulas[`${from}_${to}`] || "Conversion not supported.";
}

document.getElementById("convertBtn").addEventListener("click", function () {
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const inputUnit = document.getElementById("inputUnit").value;
  const outputUnit = document.getElementById("outputUnit").value;
  const result = convertTemperature(inputValue, inputUnit, outputUnit);
  document.getElementById("outputValue").value = result;
  // Show formula
  const formulaText = getFormula(inputUnit, outputUnit);
  document.getElementById("formulaBox").textContent = formulaText;
});


