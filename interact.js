 function check(button) {
    if (button.className == "incorrect")
    {
      button.style.borderColor = "#E66E74";
      button.style.textDecoration = "line-through";
      button.style.color = "#E66E74";
      
    }
    else
    {
      button.style.borderColor = "#96D5AF";
      button.style.color = "#96D5AF";
    }
  }