const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");

function getBookmarks() {
  let bookmarks = localStorage.getItem("bookmarks") || [];
  return bookmarks;
}

function displayOrCloseForm() {}

const objeto = {
  name: "Eduardo",
  age: 31,
  profession: "Web developer",
};

// const arr = Object.entries(objeto);

// console.log(arr.map(([k, v]) => v));

function invertirObjeto(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
}

console.log(invertirObjeto(objeto));
