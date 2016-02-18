"use strict;";
(function() {
  var page = document.getElementById("page");
  var content = {
    'title': 'Hello, this is a title!',
    'h1': 'This is a heading!',
    'p': 'This is a paragraph!'
  };

  var btn = document.getElementById("refresh");

  btn.onclick = function generateTree() {
    for (var item in content) {
      var tag = document.createElement(item);
      tag.textContent = content[item];
      page.appendChild(tag);
    }
  };
})();