const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const addBookmarkBtn = document.getElementById("add-bookmark-button");
const categoryDropdown = document.getElementById("category-dropdown");
const categoryName = document.querySelectorAll(".category-name");

function getBookmarks() {
  let bookmarks = localStorage.getItem("bookmarks") || [];
  return bookmarks;
}

function displayOrCloseForm() {}

addBookmarkBtn.addEventListener("click", () => {});
