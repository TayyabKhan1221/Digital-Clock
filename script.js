
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let day = document.getElementById("day");

// Array of month names
let monthName = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

// Function to update the clock
function updateTime() {
  // Create a new Date object to get the current date and time
  let today = new Date();

  // Extract date components
  let d = today.getDate(); // Day of the month (1-31)
  let m = today.getMonth(); // Month (0-11, where 0 = January)
  let y = today.getFullYear(); // Full year (e.g., 2024)
  let h = today.getHours(); // Hour (0-23)
  let min = today.getMinutes(); // Minutes (0-59)
  let sec = today.getSeconds(); // Seconds (0-59)

  // Determine if it's AM or PM based on the hour
  let ampm = h >= 12 ? "PM" : "AM";

  // Convert 24-hour time to 12-hour time
  if (h > 12) {
    h = h - 12;
  } else if (h === 0) {
    h = 12; // Convert midnight (0) to 12 AM
  }

  // Update the display
  day.textContent = `${d} ${monthName[m]} ${y}`;
  hour.textContent = h < 10 ? "0" + h : h; // Add leading zero if needed
  minute.textContent = min < 10 ? "0" + min : min; // Add leading zero if needed
  second.textContent = sec < 10 ? "0" + sec : sec; // Add leading zero if needed
}

// Call updateTime function initially to avoid delay in first update
updateTime();

// Update the clock every second using setInterval
setInterval(updateTime, 1000);