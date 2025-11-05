const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const addBookmarkBtn = document.getElementById("add-bookmark-button");
const addBookmarkBtnForm = document.getElementById("add-bookmark-button-form");
const categoryDropdown = document.getElementById("category-dropdown");
const categoryName = document.querySelector(".category-name");
const closeFormBtn = document.querySelector("#close-form-button");
const bookmarkListSection = document.querySelector("#bookmark-list-section");
const viewCategoryBtn = document.querySelector("#view-category-button");
const closeListBtn = document.querySelector("#close-list-button");

function getBookmarks() {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  return bookmarks;
}

function displayOrCloseForm() {
  if (formSection.className === "hidden") {
    mainSection.className = "hidden";
    formSection.classList.remove("hidden");
  } else {
    formSection.className = "hidden";
    mainSection.classList.remove("hidden");
  }
}

function displayOrHideCategory() {
  if (bookmarkListSection.className === "hidden") {
    mainSection.className = "hidden";
    bookmarkListSection.classList.remove("hidden");
  } else {
    bookmarkListSection.className = "hidden";
    mainSection.classList.remove("hidden");
  }
}

addBookmarkBtn.addEventListener("click", () => {
  categoryName.textContent = categoryDropdown.value;
  displayOrCloseForm();
});

closeFormBtn.addEventListener("click", () => {
  displayOrCloseForm();
});

addBookmarkBtnForm.addEventListener("click", () => {
  let bookmarks = getBookmarks();
  const name = document.querySelector("#name");
  const url = document.querySelector("#url");
  const obj = {
    name: name.value,
    category: categoryDropdown.value,
    url: url.value,
  };
  bookmarks.push(obj);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  name.value = "";
  url.value = "";
  displayOrCloseForm();
});

viewCategoryBtn.addEventListener("click", () => {
  displayOrHideCategory();
  categoryName.textContent = categoryDropdown.value;
});

closeListBtn.addEventListener("click", () => {
  displayOrHideCategory();
});
