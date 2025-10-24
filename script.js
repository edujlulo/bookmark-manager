const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");

function getBookmarks() {
  let bookmarks = localStorage.getItem("bookmarks") || [];
  return bookmarks;
}

function displayOrCloseForm() {}

const personas2 = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Juan", edad: 19 },
  { nombre: "Luis", edad: 30 },
];

console.log(personas2.reduce((acc, p) => acc + p.edad, 0));
