// ===== Footer: Current Year and Last Modified =====
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// ===== Wind Chill Calculation =====
// Static weather values (Metric units)
const temperature = 32;  // °C — matches displayed value
const windSpeed = 5;     // km/h — matches displayed value

/**
 * Calculates wind chill factor using the Metric formula.
 * @param {number} temp - Temperature in °C
 * @param {number} speed - Wind speed in km/h
 * @returns {number} Wind chill factor in °C
 */
function calculateWindChill(temp, speed) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

// Only calculate wind chill if conditions are met (Metric)
// Temperature <= 10°C AND Wind speed > 4.8 km/h
const windChillEl = document.getElementById("wind-chill");

if (temperature <= 10 && windSpeed > 4.8) {
  const chill = calculateWindChill(temperature, windSpeed);
  windChillEl.textContent = chill.toFixed(1) + "°C";
} else {
  windChillEl.textContent = "N/A";
}