//ask user for name and update the header text with element userName
function firstMsg(){  
    let sName = null;
    sName = prompt("What is your name?", "");
    if (sName != null && sName!= "") {
        alert("Welcome " + sName + "!")
        document.getElementById("userName").innerHTML = sName
    } else {
        alert("You didn't enter a name!");
    }
  }
  