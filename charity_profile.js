
const form = document.getElementById("Form1");
const volunteerButton = document.getElementById("volunteerButton");

volunteerButton.addEventListener("click", function() {
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
});
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('clock').textContent = timeString;
  }
  updateClock();
  setInterval(updateClock, 1000);
  