document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle");
  const body = document.body;

  // Function to toggle theme
  function toggleTheme() {
      if (body.classList.contains("light")) {
          body.classList.remove("light");
          body.classList.add("dark");
          localStorage.setItem("theme", "dark");
      } else {
          body.classList.remove("dark");
          body.classList.add("light");
          localStorage.setItem("theme", "light");
      }
  }

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
      body.classList.remove("light", "dark");
      body.classList.add(savedTheme);
  }

  // Attach event listener to the toggle button
  toggleButton.addEventListener("click", toggleTheme);
});

    function readLocalStorage() {
      const storedData = JSON.parse(localStorage.getItem('blogPosts')) || [];
      return storedData;
    }

function storeLocalStorage(newData) {
  const storedData = readLocalStorage();
  storedData.push(newData);
  localStorage.setItem('blogPosts', JSON.stringify(storedData));
}

// ! Use the following function whenever you need to redirect to a different page
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

