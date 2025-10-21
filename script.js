function getBookmarks() {
  let bookmarks = localStorage.getItem("bookmarks") || [];
  return bookmarks;
}
