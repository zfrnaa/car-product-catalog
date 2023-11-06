const buttonLogIn = document.getElementById('logIn-popup');

// Get open modal button
const logInBtn = document.getElementById('log-inBtn');

// When the user clicks the button, open the modal
btn.onclick = function() {
    buttonLogIn.style.display = "block";
}

  // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        buttonLogIn.style.display = "none";
    }
}

// Get search button
const searchBtn = document.querySelector('.search-bar__items button');

// Handle click
searchBtn.addEventListener('click', () => {

    // Toggle input visible class
    searchBtn.parentElement.classList.toggle('search-input');

});