const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");

function getBookmarks() {
  let bookmarks = localStorage.getItem("bookmarks") || [];
  return bookmarks;
}

function displayOrCloseForm() {}
