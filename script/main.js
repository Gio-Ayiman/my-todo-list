let close = document.getElementsByClassName('red-close');
for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

function addNewElement() {
  let div = document.createElement("div");
  let red_close = document.createElement("span");
  let span_paragraph = document.createElement("span");
  // let myInput = document.getElementById("input-en)
  let inputValue = document.getElementById("input-entree").value;
  let myList = document.getElementById("div-myList");
  let myText = document.createTextNode(inputValue);

  
  span_paragraph.classList.add("span-paragraph");
  span_paragraph.appendChild(myText);
  red_close.classList.add("red-close");

  if (inputValue == "") {
    alert("Vous devez entrer une tâche");
  } else {
    div.appendChild(span_paragraph);
    div.appendChild(red_close);

    myList.appendChild(div);
  }

  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  inputValue = ""
}

let myList = document.querySelectorAll("#div-myList div")








