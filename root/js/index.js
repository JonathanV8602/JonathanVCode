function toggleNavbar() {
    var navbar = document.querySelector('.navbar');
    if (navbar.className === "navbar") {
        navbar.className += " responsive";
    } else {
        navbar.className = "navbar";
    }
}

function updateDateTime() {
    const now = new Date();
    const dateTime = now.toLocaleString();
    document.getElementById('current-date-time').textContent = dateTime;
  }
  
  setInterval(updateDateTime, 1000);
  updateDateTime();  // Initial call to display date/time immediately
  