"use strict;";
(function() {

  var value = document.createElement("input");
  var sec = document.getElementById("section");
  var sum = document.getElementById("checkedSum");
  var totalSum = document.getElementById("totalCheckedSum");
  sum.textContent = 0;
  totalCheckedSum.textContent = 0;
  var i;
  value.type = "text";
  sec.appendChild(value);
  value.addEventListener("change", addCheckbox);

  function addCheckbox() {
    checkboxes.textContent = "";
    for (i = 0; i < value.value; i++) {
      chckbox = document.createElement("input");
      chckbox.type = "checkbox";
      document.getElementById("checkboxes").appendChild(chckbox);
      chckbox.onclick = checkCheckBox;
    }
  }

  function checkCheckBox() {
    var checkedLength = 0,
        cboxes;
    if (this.checked === true) {
      totalSum.textContent = parseInt(totalSum.textContent) + 1;
    }
    cboxes = document.getElementsByTagName("input");
    for (i = 0; i < cboxes.length; i++) {
      if (cboxes[i].type == "checkbox" && cboxes[i].checked) {
        checkedLength++;
      }
    }
    sum.textContent = checkedLength ;
  }

  
})();