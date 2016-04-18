 function check(button) {
    if (button.className == "incorrect")
    {
      button.style.backgroundColor = "#E66E74";
      
    }
    else
    {
      button.style.backgroundColor = "#96D5AF";
    }
    button.style.color = "#FFF"; 
  }