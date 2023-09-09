function firstMsg(){  
    var sName = null;
    sName = prompt("What is your name?", "");
    if (sName != null && sName!= "") {
        alert("Welcome " + sName + "!")
        document.getElementById("userName").innerHTML = sName
    } else {
        alert("You didn't enter a name!");
    }
  }
  