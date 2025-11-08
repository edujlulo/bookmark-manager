const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const addBookmarkBtn = document.getElementById("add-bookmark-button");
const addBookmarkBtnForm = document.getElementById("add-bookmark-button-form");
const categoryDropdown = document.getElementById("category-dropdown");
const categoryName = document.querySelector(".category-name");
const categoryName2 = document.querySelector(".category-name2");
const closeFormBtn = document.querySelector("#close-form-button");
const bookmarkListSection = document.querySelector("#bookmark-list-section");
const viewCategoryBtn = document.querySelector("#view-category-button");
const closeListBtn = document.querySelector("#close-list-button");
const categoryList = document.querySelector("#category-list");
const deleteBookmarkBtn = document.querySelector("#delete-bookmark-button");
const validationName = document.querySelector("#validation-name");
const validationUrl = document.querySelector("#validation-url");

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
  validationName.style = "display: none;";
  validationUrl.style = "display: none;";
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

  let hasError = false;

  if (name.value.trim() === "") {
    validationName.style = "display: block;";
    hasError = true;
  } else {
    validationName.style = "display: none;";
  }

  if (url.value.trim() === "") {
    validationUrl.style = "display: block;";
    hasError = true;
  } else {
    validationUrl.style = "display: none;";
  }

  if (hasError) return;

  bookmarks.push(obj);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  name.value = "";
  url.value = "";

  displayOrCloseForm();
});

viewCategoryBtn.addEventListener("click", () => {
  renderBookmarks();

  displayOrHideCategory();
});

function renderBookmarks() {
  categoryName2.textContent = categoryDropdown.value;
  const bookmarks = getBookmarks();
  categoryList.innerHTML = "";

  const filtered = bookmarks.filter(
    (b) => b.category === categoryDropdown.value
  );

  if (filtered.length === 0) {
    categoryList.textContent = "No Bookmarks Found";
    return;
  }

  const ul = document.createElement("ul");
  categoryList.appendChild(ul);

  filtered.forEach((b) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    const li = document.createElement("li");
    const nameSpan = document.createElement("span");

    label.classList.add("label-list");
    input.type = "checkbox";
    input.id = b.name;
    input.value = b.name;

    nameSpan.textContent = " " + b.name;
    nameSpan.style.cursor = "pointer";
    nameSpan.style.textDecoration = "underline";

    nameSpan.addEventListener("click", () => {
      alert(
        `This is just an example. Normally, this link would take you to: ${b.url}`
      );
    });

    label.appendChild(input);
    label.appendChild(nameSpan);
    li.appendChild(label);
    ul.appendChild(li);
  });
}

closeListBtn.addEventListener("click", () => {
  displayOrHideCategory();
});

deleteBookmarkBtn.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll(
    '#category-list input[type="checkbox"]'
  );

  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

  checkboxes.forEach((cb) => {
    if (cb.checked) {
      bookmarks = bookmarks.filter((b) => b.name !== cb.value);
    }
  });

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  renderBookmarks();
});
