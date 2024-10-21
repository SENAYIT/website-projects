function changePage(page) {
  const contentDiv = document.getElementById("content");

  if (page === "menu") {
    contentDiv.innerHTML =
      "<h1>Welcome to the menu</h1><p>This is the content for the menu page.</p>";
  } else if (page === "Livescore") {
    contentDiv.innerHTML =
      "<h1>LiveScore </h1><p>This is the content for the LiveScore page.</p>";
  } else if (page === "Scores") {
    contentDiv.innerHTML =
      "<h1>Scores</h1><p>This is the content for the Scores page.</p>";
  } else if (page === "Favourites") {
    contentDiv.innerHTML =
      "<h1>Favourites</h1><p>This is the content for theFavourites page.</p>";
  } else if (page === "News") {
    contentDiv.innerHTML =
      "<h1>News</h1><p>This is the content for the News page.</p>";
  } else if (page === "Get_the_app") {
    contentDiv.innerHTML =
      "<h1>Get_the_app page</h1><p>This is the content for the Get_the_app page.</p>";
  }
}

function toggleDropdown() {
  alert("Language changed to English!"); // Replace with your language change logic
}
